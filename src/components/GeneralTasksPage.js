import React from 'react';
import { Tabs } from 'antd';
import Tasks from '../elements/Tasks';
const TabPane = Tabs.TabPane;
class GenearlTasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h2>Genearl Tasks</h2>
				<Tabs defaultActiveKey='1'>
					<TabPane tab='My Tasks(Working On)' key='1'>
						<Tasks />
					</TabPane>
					<TabPane tab='Assign Tasks(Working On)' key='2'>
						Content of Tab Pane 2
					</TabPane>
					<TabPane tab='My Tasks(Done)' key='3'>
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab='Assign Tasks(Done)' key='4'>
						Content of Tab Pane 4
					</TabPane>
				</Tabs>
			</div>
		);
	}
}

export default GenearlTasks;
