import React from 'react';
import { Tabs } from 'antd';
import Tasks from '../elements/Tasks';
import { Typography, Button } from 'antd';

const TabPane = Tabs.TabPane;
class GenearlTasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1 style={{ textAlign: 'center' }}>General Tasks</h1>
				<Tabs defaultActiveKey='1'>
					<TabPane tab='My Tasks(Working On)' key='1'>
						<Tasks />
					</TabPane>
					<TabPane tab='Assign Tasks(Working On)' key='2'>
						<Tasks type='assignTask' />
					</TabPane>
					<TabPane tab='My Tasks(Done)' key='3'>
						<Tasks />
					</TabPane>
					<TabPane tab='Assign Tasks(Done)' key='4'>
						<Tasks />
					</TabPane>
				</Tabs>
			</div>
		);
	}
}

export default GenearlTasks;
