import React, { useState } from "react";
import "../../App.css";

const List = ({ list, DeleteItem, CompleteItem, EditItem, EditId, editid }) => {
  const [complete, setComplete] = useState(false);
  const [editInput, setEditInput] = useState("");

  const handleEditId = (id) => {
    EditId(id);
  };
  const editandtoggle = (editedtext) => {
    EditItem(editedtext);
  };

  return (
    <div className="List">
      <div className="btn-choice">
        <button onClick={() => setComplete(false)}>Active</button>
        <button onClick={() => setComplete(true)}>Completed</button>
      </div>

      <div className="item-display">
        {list.map((elem) => {
          return elem.done == complete ? (
            <div className="display-wrapper">
              <div className="display-element">
                <div className="text">
                  {elem._id == editid ? (
                    <>
                      <input
                        placeholder="Enter new text"
                        onChange={(e) => setEditInput(e.target.value)}
                        value={editInput}
                      />

                      <button onClick={() => editandtoggle(editInput)}>
                        submit
                      </button>
                    </>
                  ) : (
                    elem.value
                  )}
                </div>
                <div className="button-box">
                  <button onClick={() => handleEditId(elem._id)}>Edit</button>
                  <button onClick={() => DeleteItem(elem._id)}>Delete</button>

                  {/* if not complete or complete = false only display button else dont display */}
                  {!complete ? (
                    <button onClick={() => CompleteItem(elem._id)}>
                      Complete
                    </button>
                  ) : (
                    console.log("displaying completed task")
                  )}
                </div>
              </div>
            </div>
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
};

export default List;
