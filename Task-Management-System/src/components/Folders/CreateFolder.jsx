import React, { useRef, useState } from 'react';
import styles from './Folder.module.css';
import { IoFolder } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { eventEmitter } from './eventEmitter';

export default function CreateFolder({ creatingFolder, closeCreateFolder }) {

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

  const handleCreateFolder = function () {
    axios.post('http://localhost:3000/api/addFolder', { folderName: InputElem.current.value, token })
      .then(res => {
        if (res.data.folderId) {
          eventEmitter.emit('updateFolders');
        }
        console.log(res.data);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
    closeCreateFolder();
  }

  const handleEnterPressed = (e) => {
    if (e.key === 'Enter') {
      handleCreateFolder();
    }
  }
    
  return (
    creatingFolder && (
      <div className={styles.item} style={{ borderColor: chosenColor /*, border:`3px solid ${chosenColor}` */ }}>
        <div alt="bin" style={{ width: '2rem', marginRight: '0.7rem' }}>
          <IoFolder style={{ color: chosenColor, fontSize: '2rem' }} />
        </div>
        <button className={styles.listButton}>
          <li>
            <input type='text' name='createdFolderName' id='createdFolderName' ref={InputElem} onKeyDown={handleEnterPressed}
              className={styles.createFolder} placeholder='Enter folder name' autoFocus></input>
            <div alt="bin" style={{ width: '3rem', marginRight: '1rem' }}>
              <IoAddCircle style={{ color: chosenColor, fontSize: '3rem' }} onClick={handleCreateFolder} />
            </div>
          </li>
        </button>
      </div>
    )
  );
}