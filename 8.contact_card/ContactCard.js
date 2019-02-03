import React from 'react';
import './ContactCard.css';

function ContactCard(props){
	return(
		<div className="card">

		    <div >
		        <img className="immg" src={props.imgUrl} />
		    </div>

		    <h3>{props.name}</h3>
		    <p>Email: {props.email}</p>
		    <p>Phone: {props.phone}</p>
		</div>
	)
}
export default ContactCard