import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState('buildings');

	const onFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(term);
	};

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onFormSubmit} className="ui form">
				<div className="field">
					<label>Search...</label>
					<input
						type="text"
						value={term}
						onChange={(event) => setTerm(event.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
