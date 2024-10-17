import React from 'react'
import styles from './Aside.module.css'
import { VscArrowRight } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

const Aside = ({ filteredTasks }) => {
  const navigate = useNavigate();
  function navigateToTaskDetails (uniqueId) {
    navigate(`/home/taskDetails/${uniqueId}`);
  }
  return (
    <aside className = {styles.aside}>
      <h4>Tasks on deadlines</h4>
      {
        filteredTasks.map((task) => {
          return (
            <button key = {task.uniqueId} className = {styles.card} onClick={() => navigateToTaskDetails(task.uniqueId)}>
              <div className={styles.container}>
                <h5>{task.title}</h5>
                <VscArrowRight className={styles.arrow}/>
              </div>
            </button>
          )
        })
      }
    </aside>
  )
}

export default Aside