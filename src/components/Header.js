import React from 'react';
import './Header.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default () => (
	<header className='header'>
		{/* <Link to='/dashboard' class='' href='#'>
			Clean Coms
		</Link> */}
		<Link to='/dashboard' className='site-logo'>
			Clean Coms
		</Link>
	</header>
);
