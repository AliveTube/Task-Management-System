import axios from 'axios';
import CreateUpdate from '../CreateUpdateTaskTemplate/CreateUpdate';

export default function UpdateTask(){
    const handleSubmit = (task) => {
        
    };

    let tempTask = {
        title: 'Task-1',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        priority: 'High',
        startDate: '2024-9-26',
        deadline: '2024-11-2',
        status: 'Pending',
    };

    return(
        <>
            <CreateUpdate handleSubmit={handleSubmit} Task={tempTask}></CreateUpdate>
        </>
    )
}