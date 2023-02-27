const express = require('express');
const morgan = require('morgan');
const db = require('./src/configs/database');
const PORT = 4000;
const app = express();
const Todos = require('./src/models/todosModels');
const { todosRouter } = require('./src/routes/todo.routes');
const { validateEntity } = require('./src/middlewares/validateEntity');
const corsMiddleware = require('./src/configs/cordsConfig');

Todos;
app.use(corsMiddleware);
app.use(express.json());
app.use(morgan('tiny'));

db.authenticate()
.then(() => {
    console.log('====================================');
    console.log('conected database OK');
    console.log('====================================');
})
.catch((err) => {
    console.error(err);
});

db.sync()
.then(() => {
    console.log('====================================');
    console.log('database Sync');
    console.log('====================================');
});

app.use('/api/v1/todos', validateEntity ,todosRouter)

app.listen(PORT, () => {
    console.log('====================================');
    console.log('SERVER RUNNING');
    console.log('====================================');
});