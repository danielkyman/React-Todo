import React from 'react';
import styles from "./style.css";

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleCompleted(props.task.id)}
            className={`task${props.task.completed ? 'completed' : ''}`}
        >
            <p>{props.task.task}</p>
        </div>
    );
};


export default Todo;