from flask import Flask, request, jsonify, url_for
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate
from flask_jwt_extended import create_access_token, create_refresh_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
from werkzeug.utils import secure_filename
import os
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///scdb'
app.config['JWT_SECRET_KEY'] = "temp"
db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)
app.app_context().push()

#Database tables
class Users(db.Model):
    __tablename__ = 'users'
    user_name = db.Column(db.String(200), primary_key=True)
    password = db.Column(db.String(200), nullable=False)
    def __repr__(self):
        return f"<User(name={self.user_name}, password={self.password})"
    
class Post(db.Model):
    __tablename__ = 'post'
    title = db.Column(db.String(200), primary_key=True)
    price = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    img = db.Column(db.String, nullable=False)
    def __repr__(self):
        return f"<Post(title={self.title})"

#init tables
db.create_all()

#Routes

#Authentication
@app.route('/SignIn/<string:username>', methods=['POST'])
def sign_in(username):
    formUsername = request.json.get('username')
    formPassword = request.json.get('password')
    returnData = []
    User = Users.query.get(username)
    print("THE USER: ", User)
    if User.user_name != formUsername:
        return jsonify({"msg": 1}) #"User name does not exist"
    elif User.password != formPassword:
        return jsonify({"msg": 2})
    else:
        access_token = create_access_token(identity=formUsername)
        refresh_token = create_refresh_token(identity=formUsername)
        return jsonify({"access_token": access_token})
    
@app.route('/SignUp', methods=['POST'])
def sign_up():
    formUsername = request.json.get('username')
    formPassword = request.json.get('password')
    new_user = Users(
        user_name=formUsername,
        password=formPassword,
    )
    db.session.add(new_user)
    db.session.commit()
    print("THE New USER: ", new_user)
    return jsonify({"msg": "Account Successfully Created"})
    
@app.route('/logout', methods=['POST'])
def logout():
    response = jsonify({"msg":"loggedOut"})
    unset_jwt_cookies(response)
    return response
    

@app.route('/Post', methods=['POST'])
def post():
    #Image Handle
    upload_folder = app.root_path+ "/static/img"
    uploaded_img = request.files['img']
    img_name = secure_filename(uploaded_img.filename).lower()
    uploaded_img.save(os.path.join(upload_folder, img_name))
    Img = url_for('static', filename='img/'+img_name)
    Title = request.json.get('title')
    Price = request.json.get('price')
    Category = request.json.get('cat')
    Description = request.json.get('desc')
    new_post = Post(
        title = Title,
        price = Price,
        category = Category,
        description = Description,
        img = Img,
    )
    db.session.add(new_post)
    db.session.commit()
    return jsonify({"msg":"Post Created"})
    # if 'img' in request.files:
    #     file = request.files['img']
    #     filename = secure_filename(file.filename)
    #     # Here you should save the file
    #     # file.save(path_to_save_file)
    #     return 'File uploaded successfully'
    # return 'No file uploaded'
if __name__ == '__main__':
    app.run(debug=True)
