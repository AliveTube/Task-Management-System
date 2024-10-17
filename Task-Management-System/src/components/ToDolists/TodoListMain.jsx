import styles from './TodoListMain.module.css';
import CreateTodoList from './CreateTodoList';
import { IoWarningOutline } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';
import { eventEmitter } from './eventEmitter';
import TodoList from './TodoList';
import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function TodoListMain({ todoLists, setTodoLists, folderId }) {

  let [creatingTodoList, setCreatingTodoList] = useState(false);
  let [deleteCheck, setDeleteCheck] = useState(false);
  let [TodoListToBeDeleted, setTodoListToBeDeleted] = useState(NaN);
  let { updateTasks } = useOutletContext();
  const Path = useSelector((state) => state.Path);

  const openCreateTodoList = () => {
    setCreatingTodoList(true);
  };

  const closeCreateTodoList = () => {
    setCreatingTodoList(false);
  };

  const openDeleteCheck = (TodoListId) => {
    setTodoListToBeDeleted(TodoListId);
    setDeleteCheck(true);
  };

  const closeDeleteCheck = () => {
    setDeleteCheck(false);
  };


  const handleDeleteTodoList = () => {
    axios.delete(`http://localhost:3000/api/todoLists/${TodoListToBeDeleted}`)
      .then((respone) => {
        eventEmitter.emit('updateTodoList');
      })
      .catch(error => {
        console.error('Error deleting the to-do list:', error);
      });
    setTodoListToBeDeleted(NaN);
    setDeleteCheck(false);
    updateTasks();
  }

  return <>
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>{Path.FolderName}</h1>
        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={openCreateTodoList}>Add TodoList</button>
        </div>
      </div>
      <ul className={styles.ul}>
        <CreateTodoList creatingTodoList={creatingTodoList} closeCreateTodoList={closeCreateTodoList} folderId={folderId} />
        {todoLists.slice().reverse().map((todoList) => (
          <TodoList key={todoList.uniqueId} todoList={todoList} openDeleteCheck={openDeleteCheck} />
        ))}
      </ul>
    </main>
    <div className={deleteCheck ? styles.DeleteCheck : styles.DeleteCheckDisabled}>
      <IoWarningOutline style={{ color: "#AF4C4C", fontSize: '2.5rem' }} />
      <h5>Are you sure you want to delete this TodoList? This action cannot be undone.</h5>
      <div className={styles.buttonContainer}>
        <button className={styles.yesBtn} onClick={handleDeleteTodoList}>Yes, continue</button>
        <button className={styles.noBtn} onClick={closeDeleteCheck}>No, go back</button>
      </div>
    </div>
  </>
};
