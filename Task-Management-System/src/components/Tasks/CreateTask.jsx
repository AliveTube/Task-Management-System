import React, {useState} from 'react';
import axios from'axios';

const TaskForm = () =>{
    const [task,setTask]=useState({
        title:'',
        description:'',
        status:'',
        priority:'',
        deadLine:'',
        startDate:'',
    });


    const handleInputChange =(e) =>{
        const {name,value}= e.target;
        setTask({...task,[name]: value})
    };

    const handlesubmit= (e)=>{
        e.preventDefault();
        axios.post('/api/tasks', task)
        .then(response =>{
            alert('Task created successfully');
            //TODO modify this logic
            setTask({
                title:'',
                description:'',
                status:'To Do',
                priority:'Low',
                deadLine:'',
                startDate:'',
            });
        })
        .catch(error => {
            console.error('Error creating task:',error);
        });
    };

    return(
        <div className="task-form">
            <h2>Create a New Task</h2>
            <form onSubmit={handlesubmit}>
                <div className="form-group">
                   <label >Title</label> 
                    <input
                    type="text" 
                    name="title"
                    value={task.title}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label >description</label>
                    <textarea 
                    name="description"
                    value={task.description}
                    onChange={handleInputChange}
                    required
                    ></textarea>
                   
                </div>
                <div className="form-group">
                    <label >startDate</label>
                    <input 
                    type="date" 
                    name="startDate"
                    value={task.startDate}
                    onChange={handleInputChange}
                     />
                </div>
                <div className="form-group">
                    <label >deadLine</label>
                    <input
                    type= "date" 
                    name= "startDate"
                    value={task.startDate}
                    onChange={handleInputChange}
                     />
                </div>
                <div className="form-group">
                    <label >priority</label>
                    <select 
                    name="priority" 
                    value={task.priority}
                    onChange={handleInputChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select >
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select 
                        name="status" 
                        value={task.status} 
                        onChange={handleInputChange}
                    >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <button type="submit">Create Task</button>
            </form>


        </div>

    );
};
export default TaskForm;