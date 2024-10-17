import TDCSS from './taskDetailsCSS.module.css';
import binIcon from '../../Images/Icons/bin.svg';
import editIcon from '../../Images/Icons/Edit.svg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function choosePriorityClass(priority) {
    if (priority === 'High') return TDCSS.HighPriority;
    else if (priority === 'Medium') return TDCSS.MedPriority;
    else return TDCSS.LowPriority;
}

export default function TaskDetails() {
    const [task, setTask] = useState(null);
    const { updateTasks } = useOutletContext();
    const { uniqueId } = useParams(); // get uniqueId from params

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/taskDetails/${uniqueId}`);
                console.log(response.data);
                setTask(response.data);
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };
        fetchTask();
    }, [uniqueId]);

    const navigateToTasks = () => {
        if (task) {
            navigate(`/home/tasks/${task.toDoListId}`);
        }
    };

    const handleTaskDelete = async () => { // No need for parameter here
        try {
            await axios.delete(`http://localhost:3000/api/tasks/${uniqueId}`);
            updateTasks();
            navigateToTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const navigateToUpdate = () => {
        navigate(`/home/updateTask/${uniqueId}`);
    };

    if (!task) {
        return <div>No task found.</div>;
    }

    const formattedDate = new Date(task.deadline).toLocaleDateString();

    const handleMarkAsDone = () => {
        
    }

    return (
        <div className={TDCSS.MainContainer}>
            <div className={TDCSS.Header}>
                <h1 className={TDCSS.Title}>{task.title}</h1>
                <div className={TDCSS.HeaderRight}>
                    <button className={TDCSS.button} onClick={handleMarkAsDone}>Mark as Done</button>
                    <img onClick={navigateToUpdate} className={TDCSS.binIcon} src={editIcon} alt="edit" style={{ width: '2rem' }} />
                    <img onClick={handleTaskDelete} className={TDCSS.binIcon} src={binIcon} alt="bin" style={{ width: '2rem' }} />
                </div>
            </div>
            <h3 className={TDCSS.Deadline}>Due {formattedDate}</h3>
            <p className={TDCSS.description}>{task.description}</p>
            <div className={choosePriorityClass(task.priority)}>{task.priority} Priority</div>
            <button className={TDCSS.button} onClick={navigateToTasks} style={{ margin: '1.5rem 0'}}>Back</button>
        </div>
    );
}