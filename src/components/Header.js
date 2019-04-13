import React from 'react';
import './Header.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default () => (
	<header className='header'>
		{/* <Link to='/dashboard' class='site-logo' href='#'>
			Clean Coms
		</Link> */}
		<Link to='/dashboard' class='site-logo'>
			Clean Coms
		</Link>
	</header>
);
