import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
	const kurssi = {
		nimi: 'Half Stack -sovelluskehitys',
		osat: [
			{
				nimi: 'Reactin perusteet',
				tehtavia: 10
			},
			{
				nimi: 'Tiedonvälitys propseilla',
				tehtavia: 7
			},
			{
				nimi: 'Komponenttien tila',
				tehtavia: 14
			}
		]
	}
	return (
		<div>
			<Otsikko kurssi={kurssi.nimi} />
			<Sisalto osat={kurssi.osat} />
			<Yhteensa osat={kurssi.osat} />
		</div>
	)
}

const Otsikko = (props) => {
	return (
		<h1>{props.kurssi}</h1>
	)
}
const Sisalto = (props) => {
	var osat = props.osat.map(renderoitava_osa => {
		return (
			<Osa osa={renderoitava_osa.nimi} tehtavia={renderoitava_osa.tehtavia}/>
		)
	})
	return (
		<div>
			{osat}
		</div>
	)
}
const Osa = (props) => {
	return (
		<p>{props.osa} {props.tehtavia}</p>
	)
}
const Yhteensa = (props) => {
	var summa = 0
	props.osat.forEach(osa => {summa += osa.tehtavia});
	return (
		<p>yhteensä {summa} tehtävää</p>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
