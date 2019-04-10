import React from 'react';
import Rows from './Rows'

class Tasks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data :[{id:1,taskName:'cleaning house',taskFrom:'Damon',
                    assignedDate:'12-04-2019',dueDate:'12-05-2019',
                    priority:'High',status:'working on',notes:'easy',
                    comments:['Good','very nice']}],
        }
    }


    render(){
        return(<div>
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
                        {this.state.data.map(e=>{return <Rows key = {e.id} {...e} />})}
                    </table>
            </div>)
    }
}

export default Tasks;