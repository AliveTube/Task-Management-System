import React, {useEffect,useState} from 'react';
import axios from 'axios';
import TodoListStyle from './TodoLists.module.css'; // Import your CSS module

const TodoLists = () =>{
    const [todoLists,setTodoLists]= useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        axios.get('/api/todoLists')
        .then(response =>{
            setTodoLists(response.data);
            setLoading(false);
        })
        .catch(error =>{
            setError('Error loading to-do lists');
            setLoading(false);
        });
    },[]);

    return(
        <div className={TodoListStyle["todolists-container"]}>
            <h2>Your To-Do Lists</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {todoLists.map((list)=>(
                    <li key={list.id} className={TodoListStyle["todolist-item"]}>
                     <Link to={`/todo/${list.id}`}></Link>
                        <h3>{list.title}</h3>
                        <p>{list.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};