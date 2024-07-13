import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ArtistCard({ artist, index }) {
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.userReducer);

	return (
		<div
			className="lg:basis-1/6 basis-1/3 cursor-pointer flex justify-center "
			onClick={() => {
				let url = `/profile/${artist?._id}`;
				if (artist?._id === user?.user?._id) url = "/profile";
				navigate(url);
			}}
		>
			<div>
				<img
					src={artist.avatar.url}
					alt={`artist-${index}`}
					className=" sm:w-40 sm:h-40 w-24 h-24 rounded-lg shadow-xl p-0.5 object-cover hover:border-2 border-maroonRed shaadow-sm m-auto"
				></img>
				<div className="py-2 md:text-base sx:text-sm text-xs font-normal m-auto">
					{artist.name}
				</div>
			</div>
		</div>
	);
}

export default ArtistCard;
