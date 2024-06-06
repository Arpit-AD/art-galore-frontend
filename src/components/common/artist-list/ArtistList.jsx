import React from "react";
import ArtistCard from "../artist-card/ArtistCard";

function ArtistList({ artists }) {
	return (
		<div className="flex flex-wrap">
			{artists.map((artist, i) => (
				<ArtistCard artist={artist} index={i} />
			))}
		</div>
	);
}

export default ArtistList;
