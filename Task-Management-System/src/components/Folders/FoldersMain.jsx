import styles from './FoldersMain.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Folder from './Folder';
import CreateFolder from './CreateFolder';
import { useState } from 'react';

export default function FolderMain({ folders }){
  let [creatingFolder,setCreatingFolder] = useState(false);

  const openCreateFolder = () => {
    setCreatingFolder(true);
  };

  const closeCreateFolder = () => {
    setCreatingFolder(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Folders</h1>
        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={openCreateFolder}>Add Folder</button>
        </div>
      </div>
      <ul className={styles.ul}>
        <CreateFolder creatingFolder={creatingFolder} closeCreateFolder={closeCreateFolder}/>
        {folders.map((folder) => (
          <Folder key={folder.uniqueId} folder={folder}/>
        ))}
      </ul>
    </main>
  );
};
