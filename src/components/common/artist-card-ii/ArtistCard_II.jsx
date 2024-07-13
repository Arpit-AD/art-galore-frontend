import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import UserConstants from "../../../redux/constants/userConstants";
import Loader from "../loader/Loader";
import { BACKEND_URL } from "../../../utils/route-util";

function ArtistCard_II({ userId }) {
	const dispatch = useDispatch();
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (userId) {
			const fetchUser = async () => {
				try {
					const { data } = await axios.get(
						`${BACKEND_URL}/api/v1/user/${userId}`,
					);
					setUser(data.user);
				} catch (error) {
					dispatch({
						type: UserConstants.LOAD_USER_FAIL,
						payload: error?.response?.data?.message,
					});
				}
			};
			fetchUser();
		}
	}, [userId, dispatch]);

	if (!user) {
		return <Loader loading={!user} />;
	}

	return (
		<div className="max-w-md mx-auto bg-white shadow-md bg-zinc-50 rounded-xl overflow-hidden">
			<div className="flex justify-center mt-4">
				<img
					className="w-24 h-24 rounded-full shadow-xl p-0.5 object-cover  shaadow-sm m-auto"
					src={user.avatar.url}
					alt={user.name}
				/>
			</div>
			<div className="text-center mt-4">
				<h2 className="text-xl font-semibold">{user.name}</h2>
				<p className="text-gray-600">{user.location}</p>
				<a href={`/profile/${userId}`} className="text-red-500">
					View Profile
				</a>
			</div>
			<div className="px-6 py-4">
				<h3 className="text-lg font-bold">About Artist</h3>
				<p className="text-gray-700 text-sm">
					{user.description ? (
						user.description
					) : (
						<div className="w-fit m-auto text-xl font-bold text-gray-200 my-1">
							No Bio Yet
						</div>
					)}
				</p>
			</div>
			<div className="px-6 py-4 flex items-center">
				<FaCheckCircle className="text-red-500 mr-2" />
				<p className="text-gray-700 text-sm">Most Visited</p>
			</div>
		</div>
	);
}

export default ArtistCard_II;
