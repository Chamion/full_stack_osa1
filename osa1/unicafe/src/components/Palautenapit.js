import React, { Component } from 'react';

class Palautenapit extends Component {
	constructor(props) {
		super(props)
		this.napit = props.otsikot.map(otsikko => {
			return (
				<Palautenappi key={otsikko} otsikko={otsikko} nappiOnClick={props.nappiOnClick} />
			)
		})
	}
	
	render() {
		return (
			<div>
				{this.napit}
			</div>
		)
	}
}

class Palautenappi extends Component {
	
	render() {
		return (
			<button key={this.props.otsikko} onClick={this.props.nappiOnClick(this.props.otsikko)}>{this.props.otsikko}</button>
		)
	}
}

export default Palautenapit;