import React, { Component } from 'react';
import Cardstock from '../Components/Cardstock';
import Errorboundary from '../Components/Errorboundary';
// import { robots } from './robots';
import SearchBar from '../Components/SearchBar';
import SearchBar1 from '../Components/SearchBar1';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state= {
			robots: [],
			searchvalue: '',
			searchvalue1: ''
		}
	}


	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(users => this.setState({ robots: users }))
	}

	Scrollfunc = () => {
	  if (document.documentElement.scrollTop > 50) {
	    document.getElementById("robuddies").classList.add("slideUp");
	  }
	}

	Onsearchchange = (event) => {
		this.setState({ searchvalue: event.target.value });
	}

	Onsearchchange1 = (event) => {
		this.setState({ searchvalue1: event.target.value });
	}	

	render() {
		const filteredrobos= this.state.robots.filter( robot => {
			let roboname = robot.name.toLowerCase()
			let roboemail = robot.email.toLowerCase()
			if (
				roboname.includes(this.state.searchvalue.toLowerCase())
				&& roboemail.includes(this.state.searchvalue1.toLowerCase())
				) {
					return robot
				}
			return null
		})
		// const filteredrobos1= this.state.robots.filter( robot => {
		// 	return robot.email.toLowerCase().includes(this.state.searchvalue1.toLowerCase())
		// })
		if (!this.state.robots.length) {
			return <h1 className="sega f1 blink_me tc">Loading...</h1>
		} else {
	return (
		<div className="tc">
			<h1 className="sega f1" id="robuddies">Robuddies</h1>
			<div className="flex justify-center">
				<SearchBar  SearchChange= { this.Onsearchchange } />
				<SearchBar1 SearchChange1= { this.Onsearchchange1 }/>
			</div>
			<Scroll>
				<Errorboundary>
					<Cardstock robots= { filteredrobos }/>
				</Errorboundary>
				{/*<h1 className="pa3 light-green">MADE WITH FUN</h1>*/}
			</Scroll>
		</div>
			);
		}
	}
}

export default App
