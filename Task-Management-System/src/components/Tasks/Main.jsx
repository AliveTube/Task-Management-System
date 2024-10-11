import React from 'react'
import styles from './Main.module.css'
import Task from './Task'
import { AiFillFilter } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Main = ({tasks}) => {
  const navigate = useNavigate();
  const navigateToAddTask = () => {
    navigate('/addTask');
  }
  return (
    <main className = {styles.main}>
      <div className = {styles.container}>
        <h1>Tasks</h1>
        <div className = {styles.buttonsContainer}>
          {/* Filter choices */}
          <button className = {styles.filter} > <AiFillFilter /> </button>
          <button className = {styles.button} onClick={navigateToAddTask}>Add Task</button>
        </div>
      </div>
      <ul className = {styles.ul}>
        {/* {tasks.map(task => (
          <Task key = {task.id}/>
        ))} */}
        <Task></Task>
      </ul>
    </main>
  )
}

export default Main