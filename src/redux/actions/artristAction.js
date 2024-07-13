import { BACKEND_URL } from "../../utils/route-util";
import ArtistConstants from "../constants/artistConstants";
import axios from "axios";

export const getArtists = () => async (dispatch) => {
	try {
		dispatch({
			type: ArtistConstants.ALL_ARTIST_REQUEST,
		});

		const artistData = await axios.get(`${BACKEND_URL}/api/v1/artists`);

		dispatch({
			type: ArtistConstants.ALL_ARTIST_SUCCESS,
			payload: artistData?.data,
		});
	} catch (error) {
		dispatch({
			type: ArtistConstants.ALL_ARTIST_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: ArtistConstants.CLEAR_ERRORS,
	});
};
