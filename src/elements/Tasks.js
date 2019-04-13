import React from 'react';
import Rows from './Rows';
import {connect} from 'react-redux';
import {Table} from 'antd';

const Tasks = (props)=>(<div>
    <table>
        <tbody>
        <tr>
            <th>Task Name</th>
            <th>Task From</th>
            <th>Assigned Date</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Notes</th>
            <th>Comments</th>
        </tr>
        </tbody>
        {props.task.map((tasks)=>{
            return <Rows key={tasks.id} {...tasks}/>
        })}
    </table>
</div>)

const mapStateToProps = (state,props)=>({
    task:state
})

export default connect(mapStateToProps)(Tasks)