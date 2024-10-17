import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CreateUpdate from '../CreateUpdateTaskTemplate/CreateUpdate';
import { useOutletContext } from 'react-router-dom';

const CreateTask = ( {} ) => {
    const { updateTasks } = useOutletContext();
    const navigate = useNavigate();
    const { uniqueId } = useParams();

    const handleSubmit = async (task) => {
        try {
            const newTask = { ...task, uniqueId };
            await axios.post(`http://localhost:3000/api/tasks/${uniqueId}`, newTask);

            const res = await axios.get(`http://localhost:3000/api/tasks/${uniqueId}`);
            updateTasks(res.data);
            alert('Task created successfully');

            navigate(`/home/tasks/${uniqueId}`);
        } catch (error) {
            console.error('Error creating task:', error);
            alert('Failed to create task. Please try again.');
        }
    };

    return <CreateUpdate handleSubmit={handleSubmit} toDoListId = {uniqueId} />;
};

export default CreateTask;