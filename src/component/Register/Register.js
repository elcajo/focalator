import React from 'react';


class Register extends React.Component {
constructor(props){
	super(props);
	this.state = {
		name: '',
		email: '',
		password: ''
	}
}

onNameCreate = (event) => {
	this.setState({name: event.target.value})
}

onEmailCreate = (event) => {
	this.setState({email: event.target.value})
}
onPasswordCreate = (event) => {
	this.setState({password: event.target.value})
}
/*
	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data === 'success'){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	} */

onSubmitRegister = () => {
	fetch('https://shielded-anchorage-14744.herokuapp.com/register', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		})
	})
	.then(response => response.json())
	.then(user => {
		if (user.id){
			this.props.loadUser(user);
			this.props.onRouteChange('home');
		}
	})
} 

render(){
	// const { onRouteChange } = this.props;
	return (
	<article className="br3 ba b--black-10 mv1 w-100 w-50-m w-25-l mw6 shadow-5 center">
	<main className="pa3 black-80">
	  <div className="measure">
	    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	      <legend className="f2 fw6 ph0 mh0">Register</legend>
	      <div className="mt1">
	        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
	        <input className="br3 ba b--black-20 mw6 shadow-5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="text" 
	        name="name" 
	        id="name" 
	        onChange = {this.onNameCreate}
	        />
	      </div>
	      <div className="mt1">
	        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
	        <input className="br3 ba b--black-20 mw6 shadow-5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="email" 
	        name="email-address"  
	        id="email-address" 
	        onChange = {this.onEmailCreate}
	        />
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
	        <input className="br3 ba b--black-20 mw6 shadow-5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="password" 
	        name="password"  
	        id="password" 
	        onChange = {this.onPasswordCreate}
	        />
	      </div>
	    </fieldset>
	    <div className="">
	      <input 
	      onClick={this.onSubmitRegister}
	      className="br3 ba b--black-20 mw6 shadow-5 b ph3 pv2 input-reset bg-transparent grow pointer f6 dib" 
	      type="submit" value="Save" />
	    </div>
	  </div>
	</main>	
	</article>	
	)
	}
}


export default Register;
