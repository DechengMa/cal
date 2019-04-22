import React from 'react';
import Rows from './Rows';
import { connect } from 'react-redux';
import { Table, Menu, Icon, Dropdown } from 'antd';

const priorityMenu = (
	<Menu>
		<Menu.Item key='0'>Working On</Menu.Item>
		<Menu.Item key='1'>Stuck</Menu.Item>
		<Menu.Item key='2'>Failed</Menu.Item>
		<Menu.Item key='3'>Complete</Menu.Item>
	</Menu>
);

const openTaskDetail = () => {
	console.log('Open modal');
};

const columns = [
	{
		title: 'Task Name',
		dataIndex: 'taskName',
		key: 'taskName',
		render: taskName => <a onClick={openTaskDetail}>{taskName}</a>
	},
	{
		title: 'Task From',
		dataIndex: 'taskFrom',
		key: 'taskFrom'
	},
	{
		title: 'Assigned Date',
		dataIndex: 'assignedDate',
		key: 'assignedDate'
	},
	{
		title: 'Due Date',
		dataIndex: 'dueDate',
		key: 'dueDate'
	},
	{
		title: 'Priority',
		dataIndex: 'priority',
		key: 'priority',
		render: priority => (
			<Dropdown overlay={priorityMenu} trigger={['click']}>
				<a className='ant-dropdown-link' href='#'>
					{priority} <Icon type='down' />
				</a>
			</Dropdown>
		)
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status'
	},
	{
		title: 'Notes',
		dataIndex: 'notes',
		key: 'notes'
	},
	{
		title: 'Comments',
		dataIndex: 'comments',
		key: 'comments'
	}
];

const Tasks = props => (
	<div>
		{/* <table>
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
			{props.task.map(tasks => {
				return <Rows key={tasks.id} {...tasks} />;
			})}
        </table> */}
		<Table columns={columns} dataSource={props.task} />
	</div>
);

const mapStateToProps = (state, props) => ({
	task: state
});

export default connect(mapStateToProps)(Tasks);
