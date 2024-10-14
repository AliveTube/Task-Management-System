import React from 'react';
import styles from './Folder.module.css';
import { IoFolder } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import axios from 'axios';

export default function CreateFolder({ creatingFolder, closeCreateFolder }) {
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
    // axios
    closeCreateFolder();
  }

  return (
    creatingFolder && (
      <div className={styles.item} style={{ borderColor: chosenColor /*, border:`3px solid ${chosenColor}` */ }}>
        <div alt="bin" style={{ width: '2rem', marginRight: '0.7rem' }}>
          <IoFolder style={{ color: chosenColor, fontSize: '2rem' }} />
        </div>
        <button className={styles.listButton}>
          <li>
            <input type='text' name='createdFolderName' id='createdFolderName'
              className={styles.createFolder} placeholder='Enter folder name' autoFocus></input>
            <div alt="bin" style={{ width: '3rem', marginRight: '1rem' }}>
              <IoAddCircle style={{ color: chosenColor, fontSize: '3rem' }} onClick={handleCreateFolder} />
            </div>
          </li>
        </button>
      </div>
    )
  );
};