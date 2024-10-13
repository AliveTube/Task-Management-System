import TDCSS from './taskDetailsCSS.module.css'
import binIcon from '../../Images/Icons/bin.svg'
import editIcon from '../../Images/Icons/Edit.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function choosePriorityClass(priority){
    if(priority === 'High')
        return TDCSS.HighPriority;
    else if(priority === 'Medium')
        return TDCSS.MedPriority;
    else
        return TDCSS.LowPriority;
}

export default function TaskDetails(){
    const [task, setTask] = useState({});

    const { uniqueId } = useParams();

    const formattedDate = new Date(task.deadline).toLocaleDateString();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/tasks/${uniqueId}`);
                setTask(response.data[0]);
            }
            catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTask();
    }, [uniqueId]);

    const navigate = useNavigate();

    const navigateToTasks = function(){
        navigate('/home/tasks');
    }

    return(
        <>
            <div className={TDCSS.MainContainer}>
                <div className={TDCSS.Header}>
                    <h1 className={TDCSS.Title}>{task.title}</h1>
                    <div className={TDCSS.HeaderRight}>
                        <button className={TDCSS.button}>Mark as Done</button>
                        <img src={editIcon} alt="edit" style={{width: '2rem'}}/>
                        <img src={binIcon} alt="bin" style={{width: '2rem'}}/>
                    </div>
                </div>
                <h3 className={TDCSS.Deadline}>Due {formattedDate}</h3>
                <p className={TDCSS.description}>{task.description}</p>
                <div className={choosePriorityClass(task.priority)}>{task.priority} Priority</div>
                <button className={TDCSS.button} onClick={navigateToTasks} style={{marginTop: '1rem'}}>Back</button>
            </div>
        </>
    )
}