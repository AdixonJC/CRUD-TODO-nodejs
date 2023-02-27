# Todos CRUD / app

This is a simple RESTful API built with Node.js, Express, and Sequelize. It allows you to manage a list of tasks or "todos". You can create new todos, retrieve a list of all todos, update an existing todo, and delete a todo.


## Note to be taken into consideration

 you will find a middleware with the following function

```javascript
validateFields()
```
the task of this middleware is to accept requests that only come from one source, in this case postman, in a specific version, if you have a lot of problems to understand it, just delete it and the app will work correctly.