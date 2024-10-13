import React, { useEffect, useState } from 'react';
import styles from './Folders.module.css';
import Main from './FoldersMain';
import axios from 'axios';

export default function Folders() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/tasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, []);

    // const activeTasks = tasks.filter((task) => task.status !== 'Completed');

    return (
        <div className={styles.container}>
            <div className={styles.tasksContainer}>
                <Main tasks={tasks} />
            </div>
        </div>
    );
}
