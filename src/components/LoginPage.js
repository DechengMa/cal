import React from 'react';
import './LoginPage.css';
import companyIcon from '../resources/image/Icon_1024.png';
import { Link } from 'react-router-dom';

export default () => (
	<>
		<div className='container'>
			<div className='info'>
				<h1>Clean Coms</h1>
			</div>
		</div>
		<div className='form'>
			<div className='thumbnail'>
				<img src={companyIcon} />
			</div>
			<form className='login-form'>
				<input type='text' placeholder='username' />
				<input type='password' placeholder='password' />
				<Link to='/dashboard'>
					<button>login</button>
				</Link>
			</form>
		</div>
	</>
);
