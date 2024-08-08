const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {tasks:[...state.tasks, action.payload]};
            
        case 'REMOVE_TASK':
            return {tasks:state.tasks.filter((task, index)=>index!==action.index)};
            
        case 'TOGGLE_TASK':
            return {tasks:state.tasks.map(
                (task, index) =>  
                    index === action.index ? 
                                                {...task, completed: !task.completed} :task
                ),
            };

        default:
            return state;
    }
};

export default taskReducer;