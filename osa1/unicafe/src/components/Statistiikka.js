import React, { Component } from 'react';

class Statistiikka extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tulokset: props.tulokset
		}
	}
	
	render() {
		var tulokset = this.props.vaihtoehdot.map(vaihtoehto => {
			if(this.props.tulokset[vaihtoehto.otsikko] > 0) {
				return (
					<Tulos key={vaihtoehto.otsikko} otsikko={vaihtoehto.otsikko} tulos={this.state.tulokset[vaihtoehto.otsikko]} />
				)
			}
			return null
		})
		return (
			<table>
				<tbody>
					{tulokset}
					<Keskiarvo vaihtoehdot={this.props.vaihtoehdot} tulokset={this.state.tulokset} />
					<Positiivisia vaihtoehdot={this.props.vaihtoehdot} tulokset={this.state.tulokset} />
				</tbody>
			</table>
		)
	}
}

class Tulos extends Component {
	
	render() {
		return (
			<tr>
				<td>{this.props.otsikko}</td>
				<td>{this.props.tulos}</td>
			</tr>
		)
	}
}

class Keskiarvo extends Component {
	
	render() {
		var summa = 0.0
		var jakaja = 0.0
		this.props.vaihtoehdot.forEach(vaihtoehto => {
			summa += vaihtoehto.arvo * this.props.tulokset[vaihtoehto.otsikko]
			jakaja += this.props.tulokset[vaihtoehto.otsikko]
		})
		if(jakaja === 0.0) {
			return null
		}
		var keskiarvo = (summa/jakaja).toFixed(1)
		return (
			<tr>
				<td>Keskiarvo</td>
				<td>{keskiarvo}</td>
			</tr>
		)
	}
}

class Positiivisia extends Component {
	
	render() {
		var summa = 0.0
		var jakaja = 0.0
		this.props.vaihtoehdot.forEach(vaihtoehto => {
			if(vaihtoehto.positiivinen) {
				summa += this.props.tulokset[vaihtoehto.otsikko]
			}
			jakaja += this.props.tulokset[vaihtoehto.otsikko]
		})
		if(jakaja === 0.0) {
			return null
		}
		var prosenttiluku = (summa/jakaja*100).toFixed(1)
		return (
			<tr>
				<td>Positiivisia</td>
				<td>{prosenttiluku} %</td>
			</tr>
		)
	}
}

export default Statistiikka;