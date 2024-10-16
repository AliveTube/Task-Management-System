import React, { useRef, useState } from 'react';
import styles from './TodoList.module.css';
import binIcon from '../../Images/Icons/bin.svg'
import editIcon from '../../Images/Icons/Edit.svg'
import { IoFolderOpen } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { eventEmitter } from './eventEmitter';

export default function TodoList({ todoList, openDeleteCheck }) {

  let [updatingTitle, setUpdatingTitle] = useState(false);
  const navigate = useNavigate();

  const getRandomColor = () => {
    const colorOptions = [
      "#4CAF4F", "#4CAF97", "#4CAF27",
      "#3E9B44", "#65B861", "#2F8D38",
      "#AF4F4C", "#4F4CAF", "#AFAF4F",
      "#AF4CAF", "#4CAF8C", "#68AF4C", "#AF4C68"
    ];
    let color = colorOptions[Math.floor(Math.random() * 13)];
    return color;
  };
  let chosenColor = getRandomColor();

  const navigateToTodoList = () => {
    if (!updatingTitle) {
      navigate(`/home/todolists/${todoList.uniqueId}`);
    }
  };

  const handleEditTodoList = (e) => {
    if (e.key === 'Enter') {
      let todoListID = todoList.uniqueId;
      let newTitle = e.target.value;
      axios.post(`http://localhost:3000/api/editTodoList`, { todoListID, newTitle })
        .then(response => {
          eventEmitter.emit('updateTodoList');
          console.log(response.data);
        })
        .catch(error => {
          console.log("Error: ", error);
        })
      setUpdatingTitle(false);
    }
  }
  let editingTodoListTitle =
    <input type='text' name='EditTodoListName' id='EditTodoListName' onKeyDown={handleEditTodoList}
      className={styles.createTodoList} placeholder={todoList.title} autoFocus></input>;

  const setTodoListforDelete = ()=>{
    openDeleteCheck(todoList.uniqueId);
  }


  return (
    todoList && (<>
      <div className={styles.item} style={{ borderColor: chosenColor }}>
        <div alt="bin" style={{ width: '2rem', marginRight: '0.7rem' }}>
          <IoFolderOpen style={{ color: chosenColor, fontSize: '2rem' }} />
        </div>
        <button className={styles.listButton}>
          <li>
            <span className={styles.text} onClick={navigateToTodoList}>{updatingTitle ? editingTodoListTitle : todoList.title}</span>
            <img src={editIcon} alt="edit" style={{ width: '2rem' }} onClick={() => { setUpdatingTitle(true) }} />
            <img src={binIcon} alt="bin" style={{ width: '2rem', marginLeft: '1.2rem' }} onClick={setTodoListforDelete} />
          </li>
        </button>
      </div>
    </>)
  );
};