import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import tasks from '../reducer/myTask';

export default ()=>{
    const store = createStore(tasks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store
}