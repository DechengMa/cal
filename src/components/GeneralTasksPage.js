import React from 'react';
import Tasks from '../elements/Tasks'

class GenearlTasks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        return (
            <div>
                <h2>Genearl Tasks</h2>
                <Tasks />
            </div>)
    }
}


export default GenearlTasks