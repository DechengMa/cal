import React from 'react';
import { Modal, Button } from 'antd';
class Rows extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			statusModal: false
		};
	}

	handleModalChange = () => {
		this.setState(prevState => ({
			statusModal: !prevState.statusModal
		}));
	};

	handleOk = e => {
		this.setState({
			statusModal: false
		});
	};

	handleCancel = e => {
		this.setState({
			statusModal: false
		});
	};

	render() {
		const {
			id,
			taskName,
			taskFrom,
			assignedDate,
			dueDate,
			priority,
			status,
			notes,
			comments
		} = this.props;
		return (
			<tbody>
				<tr>
					<td>{taskName}</td>
					<td>{taskFrom}</td>
					<td>{assignedDate}</td>
					<td>{dueDate}</td>
					<td>{priority}</td>
					<td onClick={this.handleModalChange}>{status}</td>
					<td>{notes}</td>
					<td>{comments}</td>
					<Modal
						title={'Current Status: ' + this.props.status}
						visible={this.state.statusModal}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
					>
						<input type='button' value='Emergency' />
						<input type='button' value='High' />
						<input type='button' value='Medium' />
						<input type='button' value='Low' />
					</Modal>
				</tr>
			</tbody>
		);
	}
}

export default Rows;
