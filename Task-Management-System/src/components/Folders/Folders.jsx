import React, { useEffect, useState } from 'react';
import styles from './Folders.module.css';
import axios from 'axios';
import FolderMain from './FoldersMain';

export default function Folders() {
    const [folders, setFolders] = useState([]);
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVJZCI6MzMsInVzZXJuYW1lIjoiS2FyaW0gSG9zYW0iLCJlbWFpbCI6ImFobWVkQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA3JEJzUHpDTS5hMVRCVTNCYmI0WTFPLi4vMDhvdUhqNDZWUURsY3JFVC9nS2N5ZmNKbGtYVjc2IiwicGhvbmVOdW1iZXIiOm51bGwsImlhdCI6MTcyODg1OTg3M30.dajHY3BNumFkpd9BWhxfu50vxyKR4wTQ0u6CQX_jMKQ'

    useEffect(() => {
        axios.get(`http://localhost:3000/api/folders/${token}`)
            .then(response => {
                setFolders(response.data);
            })
            .catch(error => {
                console.error('Error fetching folders:', error);
            })
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.tasksContainer}>
                <FolderMain folders={folders} />
            </div>
        </div>
    );
}
