import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtistList from "../common/artist-list/ArtistList";
import { useDispatch, useSelector } from "react-redux";
import { getArtists } from "../../redux/actions/artristAction";

function ArtistPanel() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { artists } = useSelector((state) => state.artistReducer);

	const [artistList, setArtistList] = useState([]);

	useEffect(() => {
		if (!artists) {
			dispatch(getArtists());
		} else {
			setArtistList(artists);
		}
	}, [artists, dispatch]);

	return (
		<div>
			<div className="lg:mt-12 mb-6 flex align-center justify-between font-semibold  lg:text-3xl sm:text-2xl text-xl xl:px-0 px-4">
				MEET OUR ARTISTS
				<button
					className="lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 text-base bg-maroonRed text-white hover:bg-gray-800 hover:text-white shadow-xl rounded-full md:text-base text-sm font-normal"
					onClick={() => navigate("/all-artists")}
				>
					View all
				</button>
			</div>
			<ArtistList artists={artistList} />
		</div>
	);
}

export default ArtistPanel;
