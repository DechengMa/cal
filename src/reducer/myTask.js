const myTaskDefaultState = [];
export default (state = myTaskDefaultState,action)=>{
    switch(action.type){
        case 'ADD_GENERAL_TASKS':
            return [
                ...state,
                action.generalTasks];
        case 'FINISH_GENERAL_TASKS':
            return state.filter(({id})=>id !== action.id);
        
        default:
            return state
    }
}