import Tilt from 'react-tilt'
import React from 'react';
import focal from './focal.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ph3 pb2 mt0'>
		<Tilt className="Tilt b5 shadow-2" options={{ max : 30 }} style={{ height: 80, width: 80 }} >
		 <div className="Tilt-inner"> <img alt='logo' src={focal} /> </div>
		</Tilt>
		</div>
		)
}

export default Logo;
