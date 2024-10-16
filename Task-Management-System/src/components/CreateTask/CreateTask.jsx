import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CreateUpdate from '../CreateUpdateTaskTemplate/CreateUpdate';
import { useOutletContext } from 'react-router-dom';

const CreateTask = () => {
    const { updateTasks } = useOutletContext();
    const navigate = useNavigate();
    const { toDoListId } = useParams();

    const handleSubmit = async (task) => {
        try {
            const newTask = { ...task, toDoListId };
            await axios.post(`http://localhost:3000/api/tasks/${toDoListId}`, newTask);

            const res = await axios.get(`http://localhost:3000/api/tasks/${toDoListId}`);
            updateTasks();
            alert('Task created successfully');

            navigate(`/home/tasks/${toDoListId}`);
        } catch (error) {
            console.error('Error creating task:', error);
            alert('Failed to create task. Please try again.');
        }
    };

    return <CreateUpdate handleSubmit={handleSubmit} />;
};

export default CreateTask;