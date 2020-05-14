import React from 'react';

// searchChange acts as an html event
const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className = 'pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue' 
		type='search' 
		placeholder='Search Robots' 
		onChange = {searchChange} />
		</div>
		);
}
//pa2 is from tachyons
export default SearchBox;