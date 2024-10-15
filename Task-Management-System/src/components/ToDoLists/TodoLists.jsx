import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import TodoListStyle from './TodoLists.module.css';
import TodoListItem from './TodoListItem';
import TodoListForm from './TodoListForm';
=======
import TodoListStyle from './TodoLists.module.css'; // Import your CSS module
>>>>>>> 14d206d (Home Page Completed (Back & Front) - Folder Management Features - Token Store Handling - NavBar completed with sign out)
import { useParams } from 'react-router-dom';

const TodoLists = () => {
  const { folderId } = useParams();
  const [todoLists, setTodoLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/todoLists/folder/${folderId}`)
      .then(response => {
        setTodoLists(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error loading to-do lists');
        setLoading(false);
      });
  }, [folderId]);

  const deleteTodoList = (id) => {
    axios.delete(`/api/todoLists/${id}`)
      .then(() => {
        setTodoLists(todoLists.filter(list => list.id !== id));
      })
      .catch(error => {
        console.error('Error deleting the to-do list:', error);
      });
  };

  const addNewTodoList = (newList) => {
    setTodoLists([...todoLists, newList]);
  };

  return (
    <div className={TodoListStyle["todolists-container"]}>
      <h2>Your To-Do Lists</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Form for creating new lists */}
      <TodoListForm folderId={folderId} addNewTodoList={addNewTodoList} />

      <ul>
        {todoLists.map((list) => (
          <TodoListItem 
            key={list.id} 
            list={list} 
            deleteTodoList={deleteTodoList} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
