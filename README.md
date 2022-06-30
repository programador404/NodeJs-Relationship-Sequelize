![GitHub issues](https://img.shields.io/github/issues/programador404/NodeJs-Relationship-Sequelize)
![GitHub forks](https://img.shields.io/github/forks/programador404/NodeJs-Relationship-Sequelize)
![GitHub stars](https://img.shields.io/github/stars/programador404/NodeJs-Relationship-Sequelize)
![GitHub license](https://img.shields.io/github/license/programador404/NodeJs-Relationship-Sequelize)
![NodeJs](https://img.shields.io/badge/NodeJs-backend-yellow)
![Sequelize](https://img.shields.io/badge/Sequelize-querybuilder-red)


# NodeJs Relationship With Sequelize
This repository contain an application created with Nodejs to do a relationship using Sequelize.

## Relations
- One to One
- One to Many
- Many to Many

## Routes
- (POST) /users "Create new user"
- (GET) /users/:user_id "Get user by id"
- (GET) /users "Get all users"

- (POST) /users/:user_id/addresses "Create new address using user_id"
- (GET) /users/:user_id/addresses "Get user's address by user_id"

- (POST) /users/:user_id/techs "Create new tech using user_id"
- (GET) /users/:user_id/techs "Get all user's techs"
- (DELETE) /users/:user_id/techs "Delete user's relationship with tech"

## Image
![Capture](https://user-images.githubusercontent.com/48457700/117864142-dbde7980-b26a-11eb-9825-ca45b1af3872.PNG)
