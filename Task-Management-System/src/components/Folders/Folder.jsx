import React from 'react';
import styles from './Folders.module.css';
import binIcon from '../../Images/Icons/bin.svg'
import editIcon from '../../Images/Icons/Edit.svg'
import { IoFolderOpen } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Task = ({ task }) => {
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

  const navigate = useNavigate();

  const navigateToTaskDetails = () => {
    navigate(`/home/tasks/${task.uniqueId}`);
  };


  return (
    task && (
      <div className={styles.item} style={{ borderColor: chosenColor }}>
        <div alt="bin" style={{ width: '2rem', marginRight: '0.7rem' }}>
          <IoFolderOpen style={{ color: chosenColor, fontSize: '2rem' }} />
        </div>
        <button onClick={navigateToTaskDetails} className={styles.listButton}>
          <li>
            <span className={styles.text}>{task.title}</span>
            <img src={editIcon} alt="edit" style={{ width: '2rem' }} />
            <img src={binIcon} alt="bin" style={{ width: '2rem', marginLeft: '1rem' }} />
          </li>
        </button>
      </div>
    )
  );
};

export default Task;
