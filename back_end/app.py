from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
app = Flask(__name__)

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
        return f"<User(id={self.id}, name={self.user_name}, password={self.password})"

#init tables
db.create_all()

#Routes

#Authentication
@app.route('/SignIn/<string:username>', methods=['POST'])
def sign_in(username):
    formUsername = request.json.get('username')
    formPassword = request.json.get('password')
    storedUsername = Users.query.get(username)
    if storedUsername != formUsername:
        return jsonify({"msg": 1}) #"User name does not exist"
    

if __name__ == '__main__':
    app.run(debug=True)