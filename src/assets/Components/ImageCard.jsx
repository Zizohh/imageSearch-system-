import React from "react";

export default function ImageCard({ image }) {
	console.log("images:", image);

	function renderTags() {
		if (image.tags.length > 0) {
			return image.tags.map((tag) => {
				return (
					<span className="inline-block px-3 py-1 mb-4 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
						{tag.title}
					</span>
				);
			});
		}

		return <div />;
	}
	return (
		<div className="rounded-lg shadow-lg">
			<img src={image.urls.full} alt={image.alt_description} className="mb-8" />
			<div className="m-6">{renderTags()}</div>
		</div>
	);
}
