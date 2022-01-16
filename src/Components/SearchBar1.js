import React from 'react';

const SearchBar1 = ( { SearchChange1, searchvalue1 }) => {
	return (
		<div className="pa3">
			<input
			className="pa3 ba b--green bg-lightest-blue br2"
			type="search"
			placeholder="Search Robos by email"
			onChange= {SearchChange1}
			/>
		</div>
		)
}

export default SearchBar1;