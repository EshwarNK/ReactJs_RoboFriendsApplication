import React, {Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'; 
// React has something called STATE, with the help of which of which we can estabilish communication between 2 components
// Here the search bar has to communicate with the card list
// For this we use STATE in react
// We have to store the STATE somewhere, to interact with the robots
// So we create a state object and convert out App from const to a class

// const state = {
// 	robots: robots,
// 	searchfield: ''
// }

// Step1: In searchbox.js whenever something in the search box changes, then onChange event will
// trigger.
// Step2: The triggers searchChange in the app.js file. 
// Step3: The change is communicated with the robots object through the filterRobots to make 
// the needed robots only to appear in the screen 
// Everytime when there is a change, the render will be triggered

class App extends Component {
	constructor(){
		super()
		this.state = {
			// robots: robots,
			robots: [],
			searchfield: ''
		}
		// console.log('constructor');
	}

	// componentDidMount(){
	// 	this.setState({robots: robots});
	// 	console.log('componentDidMount');
	// }

	componentDidMount() {
		// We are taken input from jsonplaceholder instead of robots.js and adding it as robots
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

	// onSearchChange = (event) => {
	// 	// Here the even refers to the input event that is triggered in the searchBox.js
	// 	// It does not refer to the app.js
	// 	this.setState({searchfield: event.target.value});
	// 	console.log(event.target.value);
	// 	const filterRobots = this.state.robots.filter(robots => {
	// 		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	// 	}) 
	// 	console.log(filterRobots);
	// }

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render(){
		const filterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robots.length===0){
			return <h1>Loading</h1>
		}else{
		// console.log('render');
		return (
		<div className='tc'>
		<h1>RoboFriends</h1>
		<SearchBox searchChange = {this.onSearchChange}/>
		<Scroll>
			<CardList robots={filterRobots}/>
		</Scroll>
		</div>
		); 
		}
	}
}

// Here we are using CardList as a children of parent scroll
// Here we are wrapping custom component cardlist inside scroll

// const App = () => {
// 	return (
// 		<div className='tc'>
// 		<h1>RoboFriends</h1>
// 		<SearchBox />
// 		<CardList robots={robots}/>
// 		</div>
// 		);
// }

export default App;