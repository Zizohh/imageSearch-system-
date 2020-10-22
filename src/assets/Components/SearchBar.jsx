import React from "react";

export default function SearchBar({ term, handleChange, handleSearch }) {
	return (
		<form onSubmit={handleSearch} className="w-full mb-8">
			<div className="flex items-center py-2 border-b-2 border-teal-500">
				<input
					value={term}
					onChange={(e) => handleChange(e.target.value)}
					className="w-full px-2 py-3 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none text-md focus:outline-none"
					placeholder="Enter a search query..."
				/>

				<button
					type="submit"
					className="flex-shrink-0 px-8 py-2 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:text-teal-500"
				>
					Search
				</button>
			</div>
		</form>
	);
}
