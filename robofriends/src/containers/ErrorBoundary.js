import React, {Component} from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false		
		}
	}
}

// This is like the try catch in java script
componentDidCatch(error, info){
	this.setState({hasError: true})
}

render(){
	if(this.state.hasError){
		return <h1>Ooops. That is not good<h1>
	}
	return this.props.children; 
}