import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateTask from './CreateUpdate.module.css'; // Import the CSS file
import { useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode';

//in the case of craete task will be empty
//in the case of update task will be the old task that we updating
export default function CreateUpdate({handleSubmit, Task = {}, toDoListId}){
    let isUpdate;
    Object.keys(Task).length === 0 ? isUpdate = false : isUpdate = true;

    const token = useSelector((state) => state.TokenInUse);
    let userData;
    if (token.length) {
        userData = jwtDecode(token);
    }
    const userId = userData.uniqueId;

    const getTodayDate = () => {
        const today = new Date();
        return today;
    };

    //if Task is empty we start from Default
    //if Task is not empty we start from Task
    let newTask = useRef(
        Object.keys(Task).length === 0
        ? {
            title: '',
            description: '',
            priority: 'Low',
            startDate: getTodayDate(),
            deadline: '',
            status: 'Pending',
            userId: userId
        }
        : Task
    );

    const handleInputChange = (e) => {
        newTask.current = {...newTask.current, [e.target.name]: e.target.value};
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(newTask.current);
    };

    const navigate = useNavigate();

    const navigateToTasks = () => {
        navigate(`/home/tasks/${toDoListId}`);
    }

    return(
        <>
            <div className={CreateTask['task-form']}>
                <h2 className={CreateTask['Header']}>{Object.keys(Task).length === 0 ? 'New Task' : 'Update Task'}</h2>
                <form onSubmit={onSubmit}>
                    <div className={CreateTask['form-group']}>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder={newTask.current.title}
                            // value='s'
                            onChange={handleInputChange}
                            autoFocus
                            required={!isUpdate}
                        />
                    </div>
                    <div className={CreateTask['form-group']}>
                        <label>Description</label>
                        <textarea
                            name="description"
                            placeholder={newTask.current.description}
                            // value={newTask.current.description}
                            onChange={handleInputChange}
                            required={!isUpdate}
                        ></textarea>
                    </div>
                    <div className={CreateTask['Deadline_Priority']}>
                        <div className={CreateTask['Deadline']}>
                            <label>Deadline</label>
                            <input
                                type="date"
                                name="deadline"
                                // placeholder={new Date(newTask.current.deadline).toLocaleDateString()}
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
                    </div>

                    <div className={CreateTask['Btns']}>
                        <button type="submit" className={CreateTask['submit-button']}>
                            {Object.keys(Task).length === 0 ? 'Create Task' : 'Update Task'}
                        </button>
                        <button className={CreateTask['cancel-button']} onClick={navigateToTasks}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}