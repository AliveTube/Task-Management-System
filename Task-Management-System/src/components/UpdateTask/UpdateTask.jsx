import axios from 'axios';
import CreateUpdate from '../CreateUpdateTaskTemplate/CreateUpdate';
import { useParams,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function UpdateTask(){
    const [task, setTask] = useState({});
    const [loading, setLoading] = useState(true);
    const { uniqueId } = useParams();
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


    const handleSubmit = (task) => {
        
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