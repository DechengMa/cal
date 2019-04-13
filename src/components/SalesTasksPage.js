import React from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class SalesTasks extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<h1 strong style={{ textAlign: 'center' }}>
					Sales Tasks
				</h1>
				<Tabs defaultActiveKey='1'>
					<TabPane tab='My tasks (Working on)' key='1'>
						My tasks (Working on)
					</TabPane>
					<TabPane tab='Assign Tasks (Working on)' key='2'>
						Assign Tasks (Working on)
					</TabPane>
					<TabPane tab='My Tasks(Done)' key='3'>
						My Tasks(Done)
					</TabPane>
					<TabPane tab='Assgin Tasks (Done)' key='4'>
						Assgin Tasks (Done)
					</TabPane>
				</Tabs>
			</div>
		);
	}
}

export default SalesTasks;
