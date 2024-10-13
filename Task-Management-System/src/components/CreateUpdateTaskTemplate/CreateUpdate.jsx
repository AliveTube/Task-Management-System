import { useRef } from 'react';
import CreateTask from './CreateUpdate.module.css'; // Import the CSS file

//in the case of craete task will be empty 
//in the case of update task will be the old task that we updating 
export default function CreateUpdate({handleSubmit,Task = {}}){ 

    //if Task is empty we start from Defualt
    //if Task is not empty we start from Task
    let newTask = useRef(Object.keys(Task).length === 0 ? {
        title: '',
        description: '',
        priority: 'Low',
        startDate: '',
        deadLine: '',
        status: 'Pending',
    } : Task);

    const handleInputChange = (e) => {
        newTask.current = {...newTask.current,[e.target.name]: e.target.value};
        console.log(newTask.current);
    };

    const onSubmit =  (e) => {
        e.preventDefault();
        handleSubmit(newTask.current);
    };

    return(
        <>
            <div className={CreateTask['task-form']}>
                <h2>{Object.keys(Task).length === 0 ? 'Create a New Task' : 'Update Task'}</h2>
                <form onSubmit={onSubmit}>
                    <div className={CreateTask['form-group']}>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder={newTask.current.title}
                            // value='s'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={CreateTask['form-group']}>
                        <label>Description</label>
                        <textarea
                            name="description"
                            placeholder={newTask.current.description}
                            // value={newTask.current.description}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <div className={CreateTask['form-group']}>
                        <label>Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            placeholder={newTask.current.startDate}
                            // value={newTask.current.startDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={CreateTask['form-group']}>
                        <label>Deadline</label>
                        <input
                            type="date"
                            name="deadLine"
                            placeholder={newTask.current.deadLine}
                            // value={newTask.current.deadLine}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={CreateTask['form-group']}>
                        <label>Priority</label>
                        <select
                            name="priority"
                            placeholder={newTask.current.priority}
                            // value={newTask.current.priority}
                            onChange={handleInputChange}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    {/* <div className={CreateTask['form-group']}>
                        <label>Status</label>
                        <select
                            name="status"
                            value={task.status}
                            onChange={handleInputChange}
                        >
                            <option value="Pending">Pending</option>
                            <option value="InProgress">In Progress</option>
                        </select>
                    </div> */}
                    <button type="submit" className={CreateTask['submit-button']}>
                        {Object.keys(Task).length === 0 ? 'Create Task' : 'Update Task'}
                    </button>
                </form>
            </div>
        </>
    )
}