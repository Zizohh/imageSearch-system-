import React, { useState } from "react";
import SearchBar from "./assets/Components/SearchBar";
import axios from "axios";
import ImageList from "./assets/Components/ImageList";

const key = process.env.REACT_APP_UNSPLASH_API_KEY;

function App() {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);
	const [searched, setSearched] = useState(false);

	function handleSearch(e) {
		e.preventDefault();
		axios
			.get(
				`https://api.unsplash.com/search/photos/?client_id=${key}&query=${term}`
			)
			.then((response) => {
				const images = response.data.results;

				setResults(images);
			})
			.catch((error) => {
				//Handle No result
				console.log("error:", error);
				setResults([]);
			})
			.finally(() => {
				setSearched(true);
			});
	}

	return (
		<div className="container p-4 mx-auto mt-5">
			<SearchBar
				term={term}
				handleChange={(value) => setTerm(value)}
				handleSearch={(e) => handleSearch(e)}
			/>

			<ImageList results={results} searched={searched} />
		</div>
	);
}

export default App;
