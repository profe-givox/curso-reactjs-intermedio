import React, {useContext, useCallback} from "react";
import {TaskContext} from '../context/TaskContext';


const TaskList = () => {
    const  {state, dispatch} = useContext(TaskContext);

    const toggleTask = useCallback(
        (index) => {
            dispatch({type: "TOGGLE_TASK", index});
        }, [dispatch]
    );
    const removeTask = useCallback(
        (index) => {
            dispatch({type: "REMOVE_TASK", index});
        }, [dispatch]
    );
    return (
        <ul>
            {state.tasks.map(
                (task, index) => (
                    <li>
                        <span 
                            style={{textDecoration: task.completed ? 'line-through': 'none'}}>
                                {task.text}
                        </span>
                        <button
                            onClick={()=> toggleTask(index)}>
                            Completar
                        </button>
                        <button
                            onClick={()=> removeTask(index)}>
                            Eliminar
                        </button>
                    </li>
                )
            )
            }
        </ul>
    );
};

export default TaskList;