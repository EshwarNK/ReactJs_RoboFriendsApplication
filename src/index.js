import React from 'react';	// React is the core that contains the react bot
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; 
import App from './containers/App';
import CardList from './components/CardList';
import Card from './components/Card';
import {robots} from './robots';
// Since robots is not available by default, we have to destructure it
// Service worker helps the app to run when the app is offline

ReactDOM.render(<App />, document.getElementById('root'));

// When there are 100 cards, you cant add card everytime, so we create a cardlist component which is a parent of 
// Card. 
/*
// ReactDOM.render(<Hello greeting={'Hello'+'React Ninja'}/>, document.getElementById('root'));

// ReactDOM.render(
//   <h1>Helloworld</h1>,
//   document.getElementById('root')
// );
*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// LIfecyle methods react
// React provides few inbuilt methods that performs few actions like, add, remove, update, etc. 
// https://reactjs.org/docs/react-component.html

// Components: They are the components of our application. Cardlist, searchBox, scroll
// Containers: They are the one that have state in them. They pass state to components. 

// Finally, when you run "npm run build"
// It creates a build folder, that contains all the files in manifest format and is portable
// This build folder can be deployed anywhere