import React from "react";
import { RiAccountCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userAction";

function ResponsiveNav({ toggleNavbar, loggedInStatus }) {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<span className="lg:hidden flex items-center sm:p-4 float-right space-x-6 z-20">
			{loggedInStatus ? (
				<>
					<RiLogoutCircleFill
						className=" text-2xl xl:text-3xl cursor-pointer hover:text-maroonRed"
						onClick={() => {
							dispatch(logout());
							navigate("/");
						}}
					/>
					<RiAccountCircleFill
						className={`text-2xl xl:text-3xl cursor-pointer hover:text-maroonRed ${
							pathname.endsWith("/profile") ? "text-maroonRed" : ""
						}`}
						onClick={() => {
							navigate("/profile");
						}}
					/>
				</>
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
				className="font-black text-xl "
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
