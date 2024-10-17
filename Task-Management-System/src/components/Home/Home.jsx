import { Outlet } from "react-router-dom";
import Aside from "../Tasks/Aside";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    const token = useSelector((state) => state.TokenInUse);
    let userData;
    if (token.length) {
        userData = jwtDecode(token);
    }
    let userId = userData.uniqueId;

    const fetchTasks = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/allTasks/${userId}`);
            const allTasks = response.data;

            console.log('Fetched tasks:', allTasks); 

            setTasks(allTasks);

            const tasksForAside = allTasks
                .filter(task => task.status !== 'Completed')
                .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
                .slice(0, 3);

            setFilteredTasks(tasksForAside);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const updateTasks = () => {
        fetchTasks();
    };

    return (
        <div style={{ display: 'flex' }}>
            <Aside filteredTasks={filteredTasks} />
            <Outlet context={{ tasks, updateTasks }} />
        </div>
    );
}