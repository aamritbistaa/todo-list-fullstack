import React, { useState, useEffect } from "react";
import Header from "./todolist/Header";
import Input from "./todolist/Input";
import List from "./todolist/List";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addTodos,
  updateTodos,
  STATUSES,
  deleteTodos,
  deleteAllTodos,
} from "../redux/todoslice";

const Todo = () => {
  const [activityList, setActivityList] = useState([]);
  const [editid, setEditId] = useState("");
  // useEffect(() => {
  //   dispatch
  // }, [third])

  const { todos, status } = useSelector((state) => state.todo);
  // console.log(todos);
  const dispatch = useDispatch();
  // console.log(todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  console.log(status);
  if (status == STATUSES.LOADING) {
    return <div>Loading</div>;
  }
  if (status == STATUSES.ERROR) {
    return <div>Error</div>;
  }

  const handleAdd = async (item) => {
    // console.log("Information sent from input slide is ", item);

    // setActivityList([...activityList, item]);
    // console.log("list information is ", ...activityList);

    await dispatch(addTodos(item));
    await dispatch(fetchTodos());
  };

  const handleDelete = async (id) => {
    console.log(id);
    if (id === "all") {
      await dispatch(deleteAllTodos());
      // setActivityList([]);
    } else {
      await dispatch(deleteTodos({ id }));
      // await dispatch(fetchTodos());

      // console.log("Delete item with id=", id);
      // const updated_list = activityList.filter((elem) => {
      //   return elem.id != id;
      // });

      // setActivityList(updated_list);
      // console.log("Remaining item list = ", updated_list);
    }
    await dispatch(fetchTodos());
  };

  const handleComplete = async (id) => {
    // console.log("id no", id, "item completed");
    // const newCompletedList = activityList.map((elem) =>
    //   elem.id === id
    //     ? {
    //         ...elem,
    //         complete: true,
    //       }
    //     : elem
    // );
    // setActivityList(newCompletedList);

    await dispatch(updateTodos({ id, done: true }));
    await dispatch(fetchTodos());
  };

  const handleEdit = async (updatedText) => {
    // console.log("id no", id, "item selected");

    // const newupdatedList = activityList.map((elem) =>
    //   elem.id === id
    //     ? {
    //         ...elem,
    //         text: updatedText,
    //       }
    //     : elem
    // );

    // setActivityList(newupdatedList);

    await dispatch(updateTodos({ id: editid, value: updatedText }));

    await dispatch(fetchTodos());

    setEditId("");
  };
  // console.log(editId);
  const EditId = async (id) => {
    setEditId(id);
    // console.log(id, "edit id");
  };

  return (
    <div className="Todo">
      <Header />
      <div>
        <Input todoActivity={handleAdd} />
        <button onClick={() => handleDelete("all")} className="btn-delete-all">
          Delete all
        </button>
      </div>
      <List
        list={todos}
        DeleteItem={handleDelete}
        CompleteItem={handleComplete}
        EditItem={handleEdit}
        EditId={EditId}
        editid={editid}
      />
    </div>
  );
};

export default Todo;

//--------Edit/Update item--------
// in list.js
// when edit is pressed open a input box, it should return id , store it and open a input box on same filed
// tyo input box ko value should be passed from child to parent and replace existing field keeping old id as constant
// edit function takes id and input value search for the array from id and change the text value to input value

//----------Completed item---------
// activityList -> complete should be changed to true

// {if elem.complete == true  the activity is completed}
