import React from "react";
import { logout } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";

function ProfilePage() {
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(logout())}>logout</button>
		</div>
	);
}

export default ProfilePage;
