import React, { Component } from 'react';
import './App.css';
import UnicafePalaute from './components/UnicafePalaute.js';

class App extends Component {
	
	constructor() {
		super()
		this.vaihtoehdot = [
			{
				otsikko: 'hyvä',
				arvo: 1.0,
				positiivinen: true
			},
			{
				otsikko: 'neutraali',
				arvo: 0.0,
				positiivinen: false
			},
			{
				otsikko: 'huono',
				arvo: -1.0,
				positiivinen: false
			}
		]
	}

	render() {
		return (
			<div className="App">
				<UnicafePalaute vaihtoehdot={this.vaihtoehdot} />
			</div>
		);
	}
}

export default App;
