import React , { createContext, useReducer} from "react";
import taskReducer from '../reducers/taskReducer';

const TaskContext = createContext();

const initialState = {tasks:[]};

const TaskProvider = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{state, dispatch}} >
            {children}
        </TaskContext.Provider>
    )
    ;
};

export {TaskContext, TaskProvider};