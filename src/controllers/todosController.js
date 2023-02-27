const Todos = require("../models/todosModels");
const { validateFields } = require("../utils/ValidateFields");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todos.findAll({
      attributes: ["id", "title", "description", "status"],
    });
    res.json({
      status: "success",
      data: todos,
    });
  } catch (error) {
    res.status(404).json({
        status: "error",
        data: error
    })
  }
};

exports.addNewTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    const result = await Todos.create(newTodo);
    res.status(201).json({
      status: "success",
      message: "New Todo Created",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
        status: "error",
        data: error
    })
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = validateFields(req.body, 'title', 'description', 'status')
    console.log({data});
    await Todos.update(data, {
        where: { id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({
        status: "Error",
        message: error.message
    })
  }
};


exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await Todos.destroy({
      where: {
        id,
      }
    });
    res.status(200).json({
      status:"success",
      message: `Todo with id # ${id} Deleted`,
    })
  } catch (error) {
    res.status(400).json({
      status:"error",
      message: error.message
    })
  }
}
