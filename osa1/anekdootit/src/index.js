import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pisteet: new Array(props.anecdotes.length).fill(0),
			selected: 0,
			paras: 0
		}
	}
	
	satunnainen_selection() {
		var uusi_selected = this.satunnaisluku(this.state.selected, this.props.anecdotes.length)
		this.setState({
			selected: uusi_selected
		})
	}
	
	satunnaisluku(vanha, maksimi) {
		if(maksimi <= 1) {
			return 0
		}
		var uusi;
		do {
			uusi = Math.floor((Math.random() * maksimi))
		} while(uusi === vanha)
		return uusi
	}
	
	anekdootti(indeksi) {
		if(this.props.anecdotes.length > 0) {
			return (
				<div>
					<p>{this.props.anecdotes[indeksi]}</p>
					<p>{this.state.pisteet[indeksi]} 👍</p>
				</div>
			)
		}
	}
	
	aanesta() {
		var uudet_pisteet = this.state.pisteet
		uudet_pisteet[this.state.selected]++
		this.setState({
			pisteet: uudet_pisteet
		})
		this.paivitaParas()
	}
	
	paivitaParas() {
		var uusiParas = this.suurinIndeksi(this.state.pisteet)
		if(this.state.paras !== uusiParas) {
			this.setState({
				paras: uusiParas
			})
		}
	}
	
	suurinIndeksi(taulukko) {
		var suurin = -1
		var suurinIndeksi = -1
		for(var indeksi = 0; indeksi < taulukko.length; indeksi++) {
			if(taulukko[indeksi] > suurin) {
				suurinIndeksi = indeksi
				suurin = taulukko[indeksi]
			}
		}
		return suurinIndeksi
	}

	render() {
		return (
			<div>
				{this.anekdootti(this.state.selected)}
				<br />
				<Nappi otsikko="vote" nappiOnClick={this.aanesta.bind(this)} />
				<Nappi otsikko="next anecdote" nappiOnClick={this.satunnainen_selection.bind(this)} />
				<br />
				<h1>anecdote with most votes:</h1>
				{this.anekdootti(this.state.paras)}
			</div>
		)
	}
}

class Nappi extends React.Component {
	
	render() {
		return (
			<button onClick={this.props.nappiOnClick}>{this.props.otsikko}</button>
		)
	}
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
