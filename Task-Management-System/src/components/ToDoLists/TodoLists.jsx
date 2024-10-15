import React, {useEffect,useState} from 'react';
import axios from 'axios';
import TodoListStyle from './TodoLists.module.css'; // Import your CSS module
import { useParams } from 'react-router-dom';

const TodoLists = () =>{
    const { folderId } = useParams();
    const [todoLists,setTodoLists]= useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        axios.get(`/api/todoLists/folder/${folderId}`)
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
                   // link to task of the todolist
                   //TODO hnadle this in the router
                     <Link to={`/todo-lists/${list.id}/tasks`}>
                     <h3>{list.title}</h3>
                     <p>{list.description}</p>
                     </Link>
                    </li>
                ))}
            </ul>
            {/* <Route>
                <Route path="" element={} />
            </Route> */}
        </div>
    );
};
export default TodoLists;