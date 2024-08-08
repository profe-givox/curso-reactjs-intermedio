import React, {useState, useContext}  from "react";
import {TaskContext} from '../context/TaskContext';


const TaskForm = () => {
    const [task, setTask] = useState('');
    const {dispatch} = useContext(TaskContext);

    const addTask = () => {
        dispatch({type: "ADD_TASK", payload: {text: task, completed:false}});
        setTask('');
    }
    
    return (
        <div>
            <input 
                type="text"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Nueva tarea" />
                <button onClick={addTask}>Add</button>
        </div>
    );
};

export default TaskForm;
