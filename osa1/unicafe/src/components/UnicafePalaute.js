import React, { Component } from 'react';
import Palautenapit from './Palautenapit.js';
import Statistiikka from './Statistiikka.js';

class UnicafePalaute extends Component {
	constructor(props) {
		super()
		var tulokset = {}
		this.otsikot = []
		props.vaihtoehdot.forEach(vaihtoehto => {
			tulokset[vaihtoehto.otsikko] = 0
			this.otsikot.push(vaihtoehto.otsikko)
		})
		this.state = {
			tulokset: tulokset,
		}
	}
	
	uusi_palaute(otsikko) {
		return () => {
			var tulokset = this.state.tulokset
			tulokset[otsikko]++
			this.setState({
				tulokset: tulokset
			})
		}
	}
	
	render() {
		return (
			<div style={{textAlign: 'left'}}>
				<h2>Anna palautetta</h2>
				<Palautenapit otsikot={this.otsikot} nappiOnClick={this.uusi_palaute.bind(this)} />
				<h2>Statistiikka</h2>
				<Statistiikka vaihtoehdot={this.props.vaihtoehdot} tulokset={this.state.tulokset} />
			</div>
		)
	}
}

export default UnicafePalaute;