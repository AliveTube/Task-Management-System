import axios from 'axios';
import CreateUpdate from '../CreateUpdateTaskTemplate/CreateUpdate';
import { useParams,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function UpdateTask(){
    const [task, setTask] = useState({});
    const [loading, setLoading] = useState(true);
    const { uniqueId } = useParams();
    const { updateTasks } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/tasks/${uniqueId}`);
                setTask(response.data);
                console.log(task);
            } catch (error) {
                console.error('Error fetching task:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTask();
    }, [uniqueId]);


    //TO BE CHANGED
    const navigateToTasks = () => {
        navigate('/home/tasks');
    };

    const handleSubmit = async (task) => {
        try {
            await axios.put(`http://localhost:3000/api/tasks/${uniqueId}`, task);
            alert('Task updated successfully');

            const res = await axios.get('http://localhost:3000/api/tasks');
            updateTasks(res.data);

            navigate('/home/tasks');
        } catch (error) {
            console.error('Error updating task:', error);
            alert('Failed to update task. Please try again.');
        }
    };

    return(
        <>
            {loading ? (
            <p>Loading...</p>
            ) : (
                task && (
                    <CreateUpdate handleSubmit={handleSubmit} Task={task} />
                )
            )}
        </>
    )
}