import React from 'react';
// import { robots } from './robots';


const Card = ({ name, email, id }) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?set=set3`} alt="Robo" width="250" height="250"/>
			<div>
				<h2>{ name }</h2>
				<p>{ email }</p>
			</div>
		</div>
	)
}

export default Card;
