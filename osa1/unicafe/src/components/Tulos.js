import React, { Component } from 'react';

class Tulos extends Component {
	
	render() {
		return (
			<div>
				<span>{this.props.otsikko}</span>
				<span>{this.props.tila}</span>
			</div>
		)
	}
}

export default Tulos;