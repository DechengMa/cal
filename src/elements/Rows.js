import React from 'react';
import { Modal, Button ,Radio } from 'antd';
class Rows extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            statusModal: false,
            status:['Working On','Stuck','Failed','Complete'],
            modalValue:this.props.status
		};
	}

	handleModalChange = () => {
		this.setState(prevState => ({
			statusModal: !prevState.statusModal
		})); 
	};

	handleOk = (e) => {
        console.log(e)
		this.setState({
			statusModal: false
		});
		this.props.handleStatusChange(this.state.modalValue);
	};

	handleCancel = e => {
		this.setState({
			statusModal: false
		});
    };
    
    handleChange = (e) => {
        console.log(e)
    }

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
                        onCancel={this.handleCancel}>  
                            <Radio.Group defaultValue={this.props.status} onChange={this.handleChange} buttonStyle="solid">
                                {this.state.status.map(status=>(<Radio.Button value={status} key={status}>{status}</Radio.Button>))}
                            </Radio.Group>
					</Modal>
				</tr>
			</tbody>
		);
	}
}

export default Rows;
