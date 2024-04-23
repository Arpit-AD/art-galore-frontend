import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";

function ResponsiveNav({ toggleNavbar, loggedInStatus }) {
	return (
		<span className="lg:hidden flex items-center sm:p-4 float-right space-x-6">
			{loggedInStatus ? (
				<RiAccountCircleFill className="inline" />
			) : (
				<a className="" href="#">
					Login
				</a>
			)}
			<span
				className="font-bold"
				onClick={() => {
					toggleNavbar();
				}}
			>
				☰
			</span>
		</span>
	);
}

export default ResponsiveNav;
