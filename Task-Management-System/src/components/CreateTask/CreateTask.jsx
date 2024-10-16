import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CreateUpdate from '../CreateUpdateTaskTemplate/CreateUpdate';
import { useOutletContext } from 'react-router-dom';

const CreateTask = () => {
    const { updateTasks } = useOutletContext();
    const navigate = useNavigate();

    const handleSubmit = async (task) => {
        try {
            await axios.post('http://localhost:3000/api/tasks', task);
            alert('Task created successfully');

            const res = await axios.get('http://localhost:3000/api/tasks');
            updateTasks(res.data);

            navigate('/home/tasks');
        } catch (error) {
            console.error('Error creating task:', error);
            alert('Failed to create task. Please try again.');
        }
    };

    return (
        <CreateUpdate handleSubmit={handleSubmit} />
    );
};

export default CreateTask;