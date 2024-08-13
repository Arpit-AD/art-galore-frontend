import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import ResponsiveNav from "./responsive-nav/ResponsiveNav";
import { RiAccountCircleFill } from "react-icons/ri";
import CategoryList from "../common/category-list/CategoryList";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiLogoutCircleFill } from "react-icons/ri";
import { logout } from "../../redux/actions/userAction";

const Navbar = () => {
	const [responsiveNav, setResponsiveNav] = useState(false);
	const { isLoggedIn } = useSelector((state) => state.userReducer);
	const { selectedTab } = useSelector((state) => state.pageReducer);
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const toggleNavbar = () => {
		setResponsiveNav((prev) => !prev);
	};

	return (
		<nav className="lg:max-h-28 max-h-24 sticky top-0 text-dark shadow shadow-gray-300 bg-gray-50 lg:text-base sm:text-sm text-xs z-20">
			<div className="z-20 p-2 lg:block flex items-center justify-between ">
				<div className="lg:m-auto p-6 sm:w-fit w-1/2">
					<Logo width={"180px"} />
				</div>
				<ResponsiveNav
					toggleNavbar={toggleNavbar}
					loggedInStatus={isLoggedIn}
				/>
				<div className="lg:flex hidden justify-between xl:px-10 px-8">
					<CategoryList
						categoryListStyle={"lg:flex block lg:space-x-10"}
						itemStyle={
							"hover:border-b-2 hover:text-black border-maroonRed border-solid"
						}
					/>
					{!isLoggedIn ? (
						<span
							className="lg:flex hidden hover:border-b-2 hover:text-black border-maroonRed border-solid cursor-pointer"
							onClick={() => {
								navigate("/login");
							}}
						>
							Login
						</span>
					) : (
						<div className="flex">
							<RiAccountCircleFill
								className={`text-3xl cursor-pointer hover:text-maroonRed mx-2 ${
									pathname.endsWith("/profile") ? "text-maroonRed" : ""
								}`}
								onClick={() => {
									navigate("/profile");
								}}
							/>
							<RiLogoutCircleFill
								className=" text-3xl cursor-pointer hover:text-maroonRed mx-2"
								onClick={() => {
									dispatch(logout());
									navigate("/");
								}}
							/>
						</div>
					)}
				</div>
			</div>
			{responsiveNav && (
				<CategoryList
					categoryListStyle={
						"lg:hidden z-1 flex sm:flex-wrap flex-nowrap overflow-x-scroll shadow shadow-gray-400 bg-stone-100 bg-zinc-100 m-auto transition duration-200 ease-out transition-all animate-slide-down"
					}
					itemStyle={
						"hover:border-b-2 hover:font-medium border-maroonRed border-solid p-1 basis-1/3 my-2 px-8"
					}
				/>
			)}
		</nav>
	);
};

export default Navbar;
