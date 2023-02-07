import Todo from "../model/Todo.js";

export const getTodo = async (req, res) => {
  try {
    const list = await Todo.find();
    // [{},{}]
    return res.status(200).json(list);
  } catch (error) {
    console.log("error");
    return res.status(200).json(error.message);
  }
};

export const postTodo = async (req, res) => {
  try {
    console.log(req.body);
    const newTodo = await Todo.create({
      value: req.body.value,
      createdAt: Date.now(),
    });
    console.log(newTodo, "how is this possible");

    await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (error) {
    console.log("error");
    return res.status(500).json(error.message);
  }
};

export const getTodoById = async (request, response) => {
  const id = request.params.id;
  try {
    const todoById = await Todo.findById(id);
    return response.status(200).json(todoById);
  } catch (error) {
    console.log(error);
  }
};

export const getTodoByIdAndUpdate = async (request, response) => {
  const id = request.params.id;
  const { value, done = false } = request.body;
  try {
    const todoUpdateById = await Todo.findByIdAndUpdate(id, {
      value,
      done,
    });
    console.log(todoUpdateById, "this is to be updated");
    await todoUpdateById.save();
    return response.status(200).json({
      statusCode: 200,
      message: "successfully updated",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTodoByIdAndDelete = async (request, response) => {
  const id = request.params.id;
  try {
    await Todo.findByIdAndDelete(id);
    return response.status(200).json({
      message: "successfylly deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTodos = async (request, response) => {
  try {
    await Todo.deleteMany();
    return response.status(200).json({
      message: "All todos are deleted",
      statusCode: 200,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateAllTodos = async (request, response) => {
  console.log(request);
  try {
    const todoUpdateById = await Todo.updateMany(
      {
        done: false,
      },
      {
        $set: { done: true },
        $currentDate: { lastModified: true },
      }
    );
    return response.status(200).json({ message: "successfully updated" });
  } catch (err) {
    console.log(err);
  }
};
