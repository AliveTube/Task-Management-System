import React, { useState } from 'react';
import axios from 'axios';
import TodoListStyle from './TodoLists.module.css';

const TodoListForm = ({ folderId, addNewTodoList }) => {
  const [newListTitle, setNewListTitle] = useState("");

  const createTodoList = (e) => {
    e.preventDefault();
    const newTodoList = {
      title: newListTitle,
      folderId: folderId
    };
    axios.post('http://localhost:3000/api/todoLists', newTodoList)
      .then(response => {
        addNewTodoList(response.data);
        setNewListTitle("");
      })
      .catch(error => {
        console.error('Error creating the list:', error);
      });
  };

  return (
    <form onSubmit={createTodoList} className={TodoListStyle["todolists-form"]}>
      <input 
        type="text"
        placeholder="Title"
        value={newListTitle}
        onChange={(e) => setNewListTitle(e.target.value)}
        required
      />
      <button type="submit" className={TodoListStyle["todolists-submit-button"]}>
        Create To-Do List
      </button>
    </form>
  );
};

export default TodoListForm;
