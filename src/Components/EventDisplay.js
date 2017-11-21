import React from 'react';
import {auth, database} from '../Firebase';
import {Card} from './EventCard.js';

class EventDisplay extends React.Component {
	constructor () {
		super();
		this.state = {
			eventName: "No event Selected.",
			eventList: [],
			user_id: auth.currentUser.uid
		};
	}

	changeAttendanceState(event_id) {
		let ev = database.ref().child('users/'+this.state.user_id+'/events/'+event_id);
		ev.once('value').then((snapshot) => {
			if (snapshot.val() === '0') {
				database.ref().child('users/'+this.state.user_id+'/events/'+event_id).set('1');
			}
			else {
				database.ref().child('users/'+this.state.user_id+'/events/'+event_id).set('0');
			}
		});
	}
	render () {
		const mainContainer = {
			'padding-bottom': '4%',
		}

		return (
			<div className="container" style={mainContainer}>
				{
					this.state.eventList.map((listedEvent) => {
						return<Card event={listedEvent}/>

						/* return<li>
							<h2>{listedEvent.title}</h2>
							<p>{listedEvent.date}</p>
							Check here to attend: {listedEvent.title}
							<input 
							onChange={this.changeAttendanceState.bind(this, listedEvent.id)}				     
											     type='checkbox'/>
						      </li> */
					})
				}
				
			</div>);
	}

	componentWillMount() {
		const events = database.ref().child('events');
		events.on('value', ((snapshot) => {
			snapshot.forEach( (event) => {
				let ev = {
					title: event.child('Title').val(), 
					date: event.child('Date').val(),
					location: event.child('Location').val(),
					description: event.child('Description').val(),
					id: event.key
				};
				this.setState({eventList: [ev].concat(this.state.eventList)});
				})			
			})
		);
	}
	

}

export default EventDisplay;
