import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function ResponsiveNav({ toggleNavbar, loggedInStatus }) {
	const navigate = useNavigate();
	return (
		<span className="lg:hidden flex items-center sm:p-4 float-right space-x-6">
			{loggedInStatus ? (
				<RiAccountCircleFill
					className="text-2xl xl:text-3xl cursor-pointer hover:text-maroonRed"
					onClick={() => {
						navigate("/profile");
					}}
				/>
			) : (
				<span
					className=""
					onClick={() => {
						navigate("/login");
					}}
				>
					Login
				</span>
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
