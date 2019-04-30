import React, { Component } from 'react';
import Rows from './Rows';
import { connect } from 'react-redux';
import {
	Table,
	Menu,
	Icon,
	Dropdown,
	Modal,
	Row,
	Col,
	Input,
	Form,
	Select,
	Button,
	List,
	Typography,
	DatePicker
} from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 }
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 }
	}
};

const data = ['Clean Office', 'Task Name 2', 'Task Name 3', 'Task Name 4'];

class Tasks extends Component {
	state = {
		taskDetailModalVisible: false,
		staffDetailModalVisible: false,
		commentsDetailModalVisible: false,
		newTaskModalVisible: false,
		addNewTaskModalVisible: false
	};

	handleChange = value => {
		console.log(value);
	};

	priorityMenu = (
		<Menu>
			<Menu.Item key='0'>Working On</Menu.Item>
			<Menu.Item key='1'>Stuck</Menu.Item>
			<Menu.Item key='2'>Failed</Menu.Item>
			<Menu.Item key='3'>Complete</Menu.Item>
		</Menu>
	);

	openAddTaskModal = () => {
		this.setState({
			newTaskModalVisible: true
		});
	};

	openStaffDetail = () => {
		this.setState({
			staffDetailModalVisible: true
		});
	};
	openTaskDetail = () => {
		this.setState({
			taskDetailModalVisible: true
		});
	};

	openCommentsDetail = () => {
		this.setState({
			commentsDetailModalVisible: true
		});
	};

	columns = [
		{
			title: 'Task Name',
			dataIndex: 'taskName',
			key: 'taskName',
			render: taskName => <a onClick={this.openTaskDetail}>{taskName}</a>
		},
		{
			title: 'Task From',
			dataIndex: 'taskFrom',
			key: 'taskFrom',
			render: taskFrom => <a onClick={this.openStaffDetail}>{taskFrom}</a>
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
				<Dropdown overlay={this.priorityMenu} trigger={['click']}>
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
			key: 'comments',
			render: comments => <a onClick={this.openCommentsDetail}>{comments}</a>
		}
	];

	handleOk = e => {
		console.log(e);
		this.setState({
			taskDetailModalVisible: false,
			staffDetailModalVisible: false,
			commentsDetailModalVisible: false
		});
	};

	addNewTaskAction = () => {
		this.setState({
			newTaskModalVisible: false,
			addNewTaskModalVisible: true
		});
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			taskDetailModalVisible: false,
			staffDetailModalVisible: false,
			commentsDetailModalVisible: false,
			addNewTaskModalVisible: false,
			newTaskModalVisible: false
		});
	};

	render() {
		return (
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
				{this.props.type === 'assignTask' ? (
					<Button onClick={this.openAddTaskModal}>Add New Task</Button>
				) : (
					<></>
				)}
				<Table columns={this.columns} dataSource={this.props.task} />
				<Modal
					title='Add New Task'
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					style={{ minWidth: '700px' }}
					visible={this.state.addNewTaskModalVisible}
					footer={[
						<Button
							key='confirm'
							type='primary'
							onClick={this.addNewTaskAction}
						>
							Confirm
						</Button>
					]}
				>
					<Form {...formItemLayout}>
						<Row gutter={4}>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Task Name'>
									<Input />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Task Type'>
									<Select
										defaultValue='general'
										style={{ width: 120 }}
										onChange={this.handleChange}
									>
										<Option value='general'>General</Option>
										<Option value='special'>Special</Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>
						<Row>
							<Form.Item labelAlign='left' label='Address'>
								<Input />
							</Form.Item>
						</Row>
						<Row>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Assign To'>
									<Input />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Due Date'>
									<DatePicker />
								</Form.Item>
							</Col>
						</Row>
						<Row>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Priority'>
									<Select
										defaultValue='high'
										style={{ width: 120 }}
										onChange={this.handleChange}
									>
										<Option value='high'>High</Option>
										<Option value='low'>Low</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Task Document'>
									<Input />
								</Form.Item>
							</Col>
						</Row>
						<Form.Item labelAlign='left' label='Task Description'>
							<Input />
						</Form.Item>
					</Form>
				</Modal>

				<Modal
					title='Add Task'
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					style={{ minWidth: '700px' }}
					visible={this.state.newTaskModalVisible}
					footer={[
						<Button
							key='addNewTask'
							type='primary'
							onClick={this.addNewTaskAction}
						>
							Add New Task
						</Button>
					]}
				>
					<List
						bordered
						dataSource={data}
						renderItem={item => (
							<List.Item>
								<Typography.Text mark>[ITEM]</Typography.Text> {item}
							</List.Item>
						)}
					/>
				</Modal>
				<Modal
					title='Comment History'
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					style={{ minWidth: '700px' }}
					visible={this.state.commentsDetailModalVisible}
				>
					<Form {...formItemLayout}>
						<Form.Item labelAlign='left' label='Name'>
							<Input />
							<span> 17:00 01/02</span>
						</Form.Item>
						<Form.Item labelAlign='left' label='Name'>
							<Input />
							<span> 17:00 01/02</span>
						</Form.Item>
						<Form.Item labelAlign='left' label='Name'>
							<Input />
							<span> 17:00 01/02</span>
						</Form.Item>
					</Form>
				</Modal>
				<Modal
					title='Staff Detail'
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					style={{ minWidth: '700px' }}
					visible={this.state.staffDetailModalVisible}
				>
					<Form {...formItemLayout}>
						<Row>
							<Col span={12}>
								<Form.Item label='Staff No.'>
									<Input />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item label='Staff Name'>
									<Input />
								</Form.Item>
							</Col>
						</Row>
						<Row>
							<Col span={12}>
								<Form.Item label='Phone'>
									<Input />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item label='Email'>
									<Input />
								</Form.Item>
							</Col>
						</Row>
						<Row>
							<Col span={12}>
								<Form.Item label='Department'>
									<Input />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item label='Site'>
									<Input />
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</Modal>
				<Modal
					title='Task Detail'
					visible={this.state.taskDetailModalVisible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					style={{ minWidth: '700px' }}
				>
					<Form {...formItemLayout}>
						<Row gutter={4}>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Task Name'>
									<Input />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Task From'>
									<Input />
								</Form.Item>
							</Col>
						</Row>
						<Row>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Assigned Date'>
									<DatePicker />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Due Date'>
									<DatePicker />
								</Form.Item>
							</Col>
						</Row>

						<Row>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Priority'>
									<Select
										defaultValue='low'
										style={{ width: 120 }}
										onChange={this.handleChange}
									>
										<Option value='low'>Low</Option>
										<Option value='high'>High</Option>
										<Option value='medium'>Medium</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item labelAlign='left' label='Status'>
									<Select
										defaultValue='workingOn'
										style={{ width: 120 }}
										onChange={this.handleChange}
									>
										<Option value='workingOn'>Working On</Option>
										<Option value='stuck'>Stuck</Option>
										<Option value='finished'>Finished</Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>
						<Form.Item labelAlign='left' label='Notes'>
							<Input />
						</Form.Item>

						<Form.Item labelAlign='left' label='Comments'>
							<Input />
						</Form.Item>
						<Form.Item labelAlign='left' label='Address'>
							<Input />
						</Form.Item>
						<Form.Item labelAlign='left' label='Task Documents'>
							<Input />
						</Form.Item>
						<Form.Item labelAlign='left' label='Task Description'>
							<Input />
						</Form.Item>
					</Form>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = (state, props) => ({
	task: state
});

export default connect(mapStateToProps)(Tasks);
