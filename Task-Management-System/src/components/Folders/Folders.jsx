import React, { useEffect, useState } from 'react';
import styles from './Folders.module.css';
import axios from 'axios';
import FolderMain from './FoldersMain';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { eventEmitter } from './eventEmitter';

export default function Folders() {
    const [folders, setFolders] = useState([]);
    const token = useSelector((state) => state.TokenInUse);
    const dispatch = useDispatch();
    let userData;
    if (token.length) {

        userData = jwtDecode(token);

        const getFolderFromDB = () => {
            axios.get(`http://localhost:3000/api/folders/${userData.uniqueId}`)
                .then(response => {
                    setFolders(response.data);
                })
                .catch(error => {
                    console.error('Error fetching folders:', error);
                })
        }
        
        useEffect(() => {
            // dispatch(setPath({type:"FolderName", value:""}));
            // dispatch(setPath({type:"TodoListName", value:""}));
            // dispatch(setPath({type:"TaskName", value:""}));
            getFolderFromDB();                                      // Fetch data immediately on component mount
            eventEmitter.on('updateFolders', getFolderFromDB);      // Listen for the updateFolders event
            return () => {
                eventEmitter.off('updateFolders', getFolderFromDB); // Clean up the updateFolders event listener on unmount
            };
        }, []);
    }

    return (
        <div className={styles.container}>
            <div className={styles.tasksContainer}>
                <FolderMain folders={folders} />
            </div>
        </div>
    );
}
