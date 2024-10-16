import { Outlet } from "react-router-dom";
import Aside from "../Tasks/Aside";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/tasks');
                setTasks(response.data);
                console.log(response.data);
                const filteredTasks = response.data
                    .filter(task => task.status !== 'Completed')
                    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
                    .slice(0, 3);
                setFilteredTasks(filteredTasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, [setTasks]);

    const filterAndSetAsideTasks = (allTasks) => {
        const tasksForAside = allTasks
            .filter(task => task.status !== 'Completed')
            .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
            .slice(0, 3);
        setFilteredTasks(tasksForAside);
    };

    const updateTasks = (newTasks) => {
        console.log(newTasks)
        setTasks(newTasks);
        filterAndSetAsideTasks(newTasks);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Aside filteredTasks={filteredTasks} />
            <Outlet context={{ tasks, updateTasks }} />
        </div>
    );
}