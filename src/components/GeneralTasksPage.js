import React from 'react';
import {Tabs} from 'antd';
import Tasks from '../elements/Tasks'
const TabPane = Tabs.TabPane;
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
            <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
            </div>)
    }
}


export default GenearlTasks