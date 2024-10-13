import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CreateUpdate from '../CreateUpdateTaskTemplate/CreateUpdate';

const CreateTask = () => {
    const handleSubmit = (task) => {
        axios.post('/api/tasks', task)
            .then(response => {
                alert('Task created successfully');

                const navigate = useNavigate();
                navigate('/home/tasks');
            })
            .catch(error => {
                console.error('Error creating task:', error);
            });
    };

    return (
        <>
            <CreateUpdate handleSubmit={handleSubmit}></CreateUpdate>
        </>
    );
};

export default CreateTask;
