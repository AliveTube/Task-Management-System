import React, { useEffect, useState } from 'react';
import styles from './TodoLists.module.css';
import axios from 'axios';
import TodoListMain from './TodoListMain';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { eventEmitter } from './eventEmitter';
import { useParams } from 'react-router-dom';

export default function TodoLists() {
  const { folderId } = useParams();
  const [todoLists, setTodoLists] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.TokenInUse);

  let userData;
  if (token.length) {
    userData = jwtDecode(token);
  }

  const getTodoListFromDB = () => {
    axios.get(`http://localhost:3000/api/todoLists/${folderId}`)
      .then(response => {
        setTodoLists(response.data);
      })
      .catch(error => {
        setError('Error loading to-do lists');
      });
  }

  useEffect(() => {
    // dispatch(setPath({type:"TodoListName", value:""}));
    // dispatch(setPath({type:"TaskName", value:""}));
    getTodoListFromDB();
    eventEmitter.on('updateTodoList', getTodoListFromDB);
    return () => {
      eventEmitter.off('updateTodoList', getTodoListFromDB);
    };
  }, [folderId]);

  return (
    <div className={styles.container}>
      <div className={styles.tasksContainer}>
        {error && <p>{error}</p>}
        <TodoListMain todoLists={todoLists} setTodoLists={setTodoLists} folderId={folderId}/>
      </div>
    </div>
  );
}
