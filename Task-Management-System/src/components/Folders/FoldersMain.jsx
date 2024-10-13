import styles from './FoldersMain.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Folder from './Folder';

export default function FolderMain({ folders }){
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
        {folders.map((folder) => (
          <Folder key={folder.uniqueId} folder={folder}/>
        ))}
      </ul>
    </main>
  );
};
