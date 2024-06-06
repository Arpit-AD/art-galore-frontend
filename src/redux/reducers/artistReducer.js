import ArtistConstants from "../constants/artistConstants";

export const artistReducer = (
	state = { artists: null, artistCounts: null },
	action,
) => {
	switch (action.type) {
		case ArtistConstants.ALL_ARTIST_REQUEST:
			return {
				loading: true,
				artists: null,
			};
		case ArtistConstants.ALL_ARTIST_SUCCESS:
			return {
				loading: false,
				artists: action.payload._users,
				artistsCount: action.payload._userCount,
			};
		case ArtistConstants.ALL_ARTIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ArtistConstants.CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
