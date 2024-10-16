import React from 'react';
import { Link } from 'react-router-dom';
import TodoListStyle from './TodoLists.module.css';

const TodoListItem = ({ list, deleteTodoList }) => {
  return (
    <li className={TodoListStyle["todolist-item"]}>
      <Link to={`/todo-lists/${list.id}/tasks`}>
        <h3>{list.title}</h3>
        <p>{list.description ? list.description : 'No description available'}</p>
      </Link>
      <button 
        onClick={() => deleteTodoList(list.id)} 
        className={TodoListStyle["todolist-item-delete-button"]}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;
