import styles from './FoldersMain.module.css';
import Task from './Folder';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = ({ tasks }) => {
  const navigate = useNavigate();

  const navigateToAddTask = () => {
    navigate('/home/addTask');
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Folders</h1>
        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={navigateToAddTask}>Add Folder</button>
        </div>
      </div>
      <ul className={styles.ul}>
        {tasks.map((task) => (
          <Task key={task.uniqueId} task={task}/>
        ))}
      </ul>
    </main>
  );
};

export default Main;
