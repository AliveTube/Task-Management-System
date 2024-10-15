import styles from './FoldersMain.module.css';
import Folder from './Folder';
import CreateFolder from './CreateFolder';
import { IoWarningOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';
import { eventEmitter } from './eventEmitter';

export default function FolderMain({ folders }) {
  let [creatingFolder, setCreatingFolder] = useState(false);
  let [deleteCheck, setDeleteCheck] = useState(false);
  let [FolderToBeDeleted, setFolderToBeDeleted] = useState(NaN);

  const openCreateFolder = () => {
    setCreatingFolder(true);
  };

  const closeCreateFolder = () => {
    setCreatingFolder(false);
  };

  const openDeleteCheck = (folderId) => {
    setFolderToBeDeleted(folderId);
    setDeleteCheck(true);
  };

  const closeDeleteCheck = () => {
    setDeleteCheck(false);
  };

  const handleDeleteFolder = () => {
    axios.delete(`http://localhost:3000/api/deleteFolder/${FolderToBeDeleted}`)
      .then(respone => {
        eventEmitter.emit('updateFolders');
        console.log(respone.data);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
      setFolderToBeDeleted(NaN);
      setDeleteCheck(false);
  }

  return <>
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Folders</h1>
        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={openCreateFolder}>Add Folder</button>
        </div>
      </div>
      <ul className={styles.ul}>
        <CreateFolder creatingFolder={creatingFolder} closeCreateFolder={closeCreateFolder} />
        {folders.slice().reverse().map((folder) => (
          <Folder key={folder.uniqueId} folder={folder} openDeleteCheck={openDeleteCheck}/>
        ))}
      </ul>
    </main>
    <div className={deleteCheck? styles.DeleteCheck : styles.DeleteCheckDisabled}>
      <IoWarningOutline style={{ color: "#AF4C4C", fontSize: '2.5rem' }} />
      <h5>Are you sure you want to delete this folder? This action cannot be undone.</h5>
      <div className={styles.buttonContainer}>
        <button className={styles.yesBtn} onClick={handleDeleteFolder}>Yes, continue</button>
        <button className={styles.noBtn} onClick={closeDeleteCheck}>No, go back</button>
      </div>
    </div>
  </>
};
