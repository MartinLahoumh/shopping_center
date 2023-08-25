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
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(200), nullable=True)
    description = db.Column(db.Text, nullable=False)
    img = db.Column(db.String, nullable=False)
    def __repr__(self):
        return f"<Post(title={self.title}, id={self.id})"

class Posts(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(200), nullable=True)
    description = db.Column(db.Text, nullable=False)
    img = db.Column(db.String, nullable=False)
    credit = db.Column(db.String, nullable=False)
    def __repr__(self):
        return f"<Post(title={self.title}, id={self.id}, category={self.category}, price={self.price}, description={self.description}, img={self.img}, credit={self.credit})"
    
    

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
    
#Actual Post's
@app.route('/Post', methods=['POST'])
def post():
    #Image Handle
    upload_folder = app.root_path+ "/static/img"
    uploaded_img = request.files['img']
    img_name = secure_filename(uploaded_img.filename).lower()
    uploaded_img.save(os.path.join(upload_folder, img_name))
    Img = url_for('static', filename='img/'+img_name)
    print("IMAGE NAME, ", Img)
    Title = request.form.get('title')
    Credit = request.form.get('credit')
    Price = request.form.get('price')
    Category = request.form.get('cat')
    Description = request.form.get('desc')
    new_post = Posts(
        title = Title,
        price = Price,
        category = Category,
        description = Description,
        img = Img,
        credit = Credit,
    )
    db.session.add(new_post)
    db.session.commit()
    return jsonify({"msg":"Post Created"})

#Get a post by category
@app.route('/PostCat/<string:category>', methods=['GET'])
def post_cat(category):
    #Image Handle
    posts = []
    for post in Posts.query.all():
        if post.category == category:
            posts.append({"title": post.title, "price": post.price, "category": post.category, "description": post.description, "img": post.img, "credit": post.credit, "id":post.id})
    return jsonify(posts)

#Get a post by id
@app.route('/PostId/<int:id>', methods=['GET'])
def post_id(id):
    #Image Handle
    post = Posts.query.get(id)
    postInfo = {"title": post.title, "price": post.price, "category": post.category, "description": post.description, "img": post.img, "credit": post.credit, "id":post.id}
    return jsonify(postInfo)

if __name__ == '__main__':
    app.run(debug=True)
