from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///scdb'
db = SQLAlchemy(app)
migrate = Migrate(app, db)
app.app_context().push()

#Database tables
class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    def __repr__(self):
        return f"<User(id={self.id}, name={self.user_name}, password={self.password})"

#init tables
db.create_all()

if __name__ == '__main__':
    app.run(debug=True)