import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'


const store = configureStore();
store.dispatch({type:'ADD_GENERAL_TASKS',generalTask:{id:1,taskName:'cleaning house',taskFrom:'Damon',
                        assignedDate:'12-04-2019',dueDate:'12-05-2019',
                        priority:'High',status:'Working On',notes:'easy',
                        comments:'very nice'}})
store.dispatch({type:'ADD_GENERAL_TASKS',generalTask:{id:2,taskName:'cleaning home',taskFrom:'Anson',
                        assignedDate:'12-04-2019',dueDate:'12-05-2019',
                        priority:'High',status:'Working On',notes:'easy',
                        comments:'good'}})
console.log(store.getState())
const jsx = (<Provider store={store}>
                <AppRouter />
            </Provider>)
ReactDOM.render(jsx, document.getElementById('root'));
