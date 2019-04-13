const myTaskDefaultState = [];
export default (state = myTaskDefaultState,action)=>{
    switch(action.type){
        case 'ADD_GENERAL_TASKS':
            return [
                ...state,
                action.generalTask];
        case 'FINISH_GENERAL_TASKS':
            return state.filter(({id})=>id !== action.id);
        case 'UPDATE_WORKING_STATUS':
            return state.map((task)=>{
                if(task.id === action.id){
                    return {
                        ...task,
                        ...task.updates
                    }
                }else{
                    return task
                }
            });
        case 'SET_TASKS':
            return action.tasks
        default:
            return state
    }
}