import React from 'react';
import Card from './Card';
// import { robots } from './robots';

const Cardstock= ({ robots }) => {
	// if (true) {
	// 	throw new Error("Messed Up!")
	// }
	const Users = robots.map ( (user,i) => {
			return (
				<Card
					key={i}
					name={user.name}
					id= {user.id}
					email= {user.email}
					/>
				);
			})
	return (
		<div>
			{ Users }
		</div>
	);
}
export default Cardstock;