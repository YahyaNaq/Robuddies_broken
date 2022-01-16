import React from 'react';
import './Scroll.css';

const Scroll = (props) => {	
	return (
		<div
		className="pa1"
		style={{overflowY:'scroll', border: '1px solid #00ffae', height: '500px'}}
		>
			{props.children}
		</div>
		)
}

export default Scroll;