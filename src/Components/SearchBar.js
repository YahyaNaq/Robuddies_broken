import React from 'react';

const SearchBar = ( { SearchChange, searchvalue } ) => {
	return (
		<div className="pa3">
			<input
			className="pa3 ba b--green bg-lightest-blue br2"
			type="search"
			placeholder="Search Robos by name"
			onChange= {SearchChange}
			/>
		</div>
		)
}

export default SearchBar;