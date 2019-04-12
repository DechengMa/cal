import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';

const cardStyle = {
	width: '300px',
	margin: '30px',
	textAlign: 'center',
	fontSize: '22px'
};

export default () => (
	<div style={{ display: 'flex', justifyContent: 'center' }}>
		<Card style={cardStyle}>
			GeneralTasksPage
			<div style={{ height: '180px' }} />
			<Button type='primary' style={{ width: '100%' }}>
				<Link to='/general-tasks-page'>Next</Link>
			</Button>
		</Card>
		<Card style={cardStyle}>
			SalesTaskPage
			<div style={{ height: '180px' }} />
			<Button type='primary' style={{ width: '100%' }}>
				<Link to='/sales-tasks-page'>Next</Link>
			</Button>
		</Card>
	</div>
);
