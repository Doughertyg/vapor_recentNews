import React from 'react';
import ReactDOM from 'react-dom';
import View from './updates_view.jsx';
import Checkout from './checkout_comp.jsx';
import About from './about.jsx';
const db = require('../../database');
const $ = require('jquery');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			updates: [],
			modalToggle: false,
			id: 1,
			game: {},
			platforms: [],
			vr_supprt: []
		}
	}

	componentDidMount() {

		console.log('mounted');

		$.get('/updates')
			.done((data) => {

				console.log('[app.jsx: 27] got updates data back!!');
				var updates = JSON.parse(data);

				this.setState({
					updates: updates
				})
			})
			.done(() => {
				$.get(`/games_updates/${this.state.id}`)
				.done((data) => {

					console.log('[app.jsx: 37] game got!', data);
					var game = JSON.parse(data);

					this.setState({
						game: game[0],
						platforms: game[0].platforms.split(' '),
						vr_supprt: game[0].vr_support.split(' ')
					})
				})
			})
	}

	// handleClick() {
	// 	$.get('http://localhost:3003/updates', (data) => {

	// 		console.log('got data back!!', data);

	// 		this.setState({
	// 			updates: data
	// 		})
	// 	})

	// 	console.log('mounted');
	// }

	toggleModal() {

		this.setState({
			modalToggle: !this.state.modalToggle
		})
	}

	persistModal(e) {

		e.stopPropogation();
	}

	render() {

		//first check if state updates is an empty array
		if (this.state.updates.length === 0 ) {
			console.log('state updates is empty', this.state.updates); //do something useful with this

			return (

				<h1>See it here</h1>

			)
		} else { //state updates is not empty and thus can be acted on
			console.log('state updates no longer empty', this.state.updates[0]);

			return (
				
				<div>
					<Checkout platforms={this.state.platforms} title={this.state.game} vr={this.state.vr_supprt}/>
					<View updates={this.state.updates} state={this.state} toggleModal={this.toggleModal.bind(this)} persistModal={this.persistModal.bind(this)} />
					<About />
				</div>				
			)
		}
	}
}

export default App;