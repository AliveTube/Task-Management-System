import React, { useEffect, useState } from 'react'
import Aside from './Aside'
import Main from './Main'
import CompletedTasks from './CompletedTasks'
import styles from './Tasks.module.css'


const Tasks = () => {
  const [tasks, setTasks] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTasks(data))
  }, [setTasks]);
  return (
    <>
      <div className = {styles.container}>
        {/* <Aside /> */}
        <div className = {styles.tasksContainer}>
          <Main />
          <CompletedTasks />
        </div>
      </div>
    </>
  )
}

export default Tasks