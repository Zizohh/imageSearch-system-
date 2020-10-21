import React from "react";

function App() {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			{/* <img className="w-full" src={require("./profile.jpg")} alt="Display" /> */}
			<div className="px-6 py-4">
				<div className="font-bold text-green-500 text-xl mb-2">Alt Text</div>
				<p className="text-gray-700 text-base">Image Details</p>
			</div>
			<div className="">
				<span className="">#Software Engineer</span>
				<span className="">#Writter</span>
				<span className="">#Public Speaker</span>
			</div>
		</div>
	);
}

export default App;
