import TDCSS from './taskDetailsCSS.module.css' //TDCSS -> Task Deatails CSS
import binIcon from '../../Images/Icons/bin.svg'
import editIcon from '../../Images/Icons/Edit.svg'
import { useNavigate } from 'react-router-dom';

function choosePriorityClass(priority){
    if(priority === 'High')
        return TDCSS.HighPriority;
    else if(priority === 'Medium')
        return TDCSS.MedPriority;
    else
        return TDCSS.LowPriority;
}

export default function TaskDetails(){

    //just a temp task TO BE REMOVED when the Backend is added
    const tempTask = {
        uniqueid: 0,
        title: 'Task-1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis eum tempore at, tenetur magnam! Ratione sed, quibusdam dicta laborum a fugit, cupiditate tempore hic dolores magni minus repudiandae rem!',
        priority: 'High',
        createdAt: '12-10-2024',
        deadline: '12-11-2024',
        status: 'To Do',
        userId: 0,
        toDoListId: 0
    };

    const navegate = useNavigate();

    const navegateToTasks = function(){
        navegate('/home/tasks');
    }

    return(
        <>
            <div className={TDCSS.MainContainer}>
                <div className={TDCSS.Header}>
                    <h1 className={TDCSS.Title}>{tempTask.title}</h1>
                    <div className={TDCSS.HeaderRight}>
                        <button className={TDCSS.button}>Mark as Done</button>
                        <img src={editIcon} alt="edit" style={{width: '2rem'}}/>
                        <img src={binIcon} alt="bin" style={{width: '2rem'}}/>
                    </div>
                </div>
                <h3 className={TDCSS.Deadline}>Due {tempTask.deadline}</h3>
                <p className={TDCSS.description}>{tempTask.description}</p>
                <div className={choosePriorityClass(tempTask.priority)}>{tempTask.priority} Priority</div>
                <button className={TDCSS.button} onClick={navegateToTasks} style={{marginTop: '1rem'}}>Back</button>
            </div>
        </>
    )
}