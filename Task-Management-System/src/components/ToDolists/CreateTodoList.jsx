import React, { useRef, useState } from 'react';
import styles from './TodoList.module.css';
import { IoFolder } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { eventEmitter } from './eventEmitter';

export default function CreateTodoList({ creatingTodoList, closeCreateTodoList, folderId }) {

  const InputElem = useRef("");
  const token = useSelector((state) => state.TokenInUse);

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

  const handleCreateTodoList = function () {
    const newTodoList = {
      title: InputElem.current.value,
      startDate: new Date().toISOString(),
      folderId: parseInt(folderId)
    };
    axios.post('http://localhost:3000/api/todoLists', newTodoList)
      .then(response => {
        if (response.data.folderId) {
          eventEmitter.emit('updateTodoList');
        }
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error creating the list:', error);
      });
    closeCreateTodoList();
  }

  const handleEnterPressed = (e) => {
    if (e.key === 'Enter') {
      handleCreateTodoList();
    }
  }

  return (
    creatingTodoList && (
      <div className={styles.item} style={{ borderColor: chosenColor /*, border:`3px solid ${chosenColor}` */ }}>
        <div alt="bin" style={{ width: '2rem', marginRight: '0.7rem' }}>
          <IoFolder style={{ color: chosenColor, fontSize: '2rem' }} />
        </div>
        <button className={styles.listButton}>
          <li>
            <input type='text' name='createdTodoListName' id='createdTodoListName' ref={InputElem} onKeyDown={handleEnterPressed}
              className={styles.createTodoList} placeholder='Enter Todo-List name' autoFocus></input>
            <div alt="bin" style={{ width: '3rem', marginRight: '1rem' }}>
              <IoAddCircle style={{ color: chosenColor, fontSize: '3rem' }} onClick={handleCreateTodoList} />
            </div>
          </li>
        </button>
      </div>
    )
  );
};