const { Router } = require('express');

const { getAllTodos, addNewTodo, updateTodo, deleteTodo } = require('../controllers/todosController')
const router = Router();



router.get('/', getAllTodos);

router.post('/', addNewTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = {todosRouter : router}