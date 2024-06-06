import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ArtistCard({ artist, index }) {
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.userReducer);

	return (
		<div
			className="basis-1/6 cursor-pointer"
			onClick={() => {
				let url = `/user/${artist?._id}`;
				if (artist?._id === user?.user?._id) url = "/profile";
				navigate(url);
			}}
		>
			<img
				src={artist.avatar.url}
				alt={`artist-${index}`}
				className=" w-40 h-40 rounded-lg shadow-xl p-0.5 object-cover hover:border-2 border-maroonRed shaadow-sm"
			></img>
			<div className="py-2">{artist.name}</div>
		</div>
	);
}

export default ArtistCard;
