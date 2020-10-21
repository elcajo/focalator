import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
		if (isSignedIn){
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p onClick={() => onRouteChange ('signout')} className='f5 link dim black ph3 pointer'>Sign Out</p>
			</nav>
				);
		} else {
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p onClick={() => onRouteChange ('register')} className='f5 link dim black ph3 pointer'>Register</p>
				<p onClick={() => onRouteChange ('signin')} className='f5 link dim black ph3 pointer'>Sign In</p>
			</nav>		
				);
		}
}

export default Navigation;
