import React, { useState } from "react";
import Logo from "../logo/Logo";
import ResponsiveNav from "./responsive-nav/ResponsiveNav";
import { RiAccountCircleFill } from "react-icons/ri";
import CategoryList from "../common/category-list/CategoryList";

const Navbar = () => {
	const [responsiveNav, setResponsiveNav] = useState(false);
	const [loggedInStatus, setLoggedInStatus] = useState(false);
	const toggleNavbar = () => {
		setResponsiveNav((prev) => !prev);
	};
	return (
		<nav className="lg:max-h-28 max-h-24 sticky top-0 text-dark shadow shadow-gray-300 bg-gray-50 lg:text-base sm:text-md text-xs">
			<div className="z-10 p-2 lg:block flex items-center justify-between ">
				<div className="lg:m-auto p-6 w-fit">
					<Logo width={"180px"} />
				</div>
				<ResponsiveNav
					toggleNavbar={toggleNavbar}
					loggedInStatus={loggedInStatus}
				/>
				<div className="lg:flex hidden justify-between xl:px-10 px-8">
					<CategoryList
						categoryListStyle={"lg:flex block lg:space-x-10 text-gray-600"}
						itemStyle={
							"hover:border-b-2 hover:text-black border-maroonRed border-solid"
						}
					/>
					{!loggedInStatus ? (
						<a
							className="lg:flex hidden hover:border-b-2 hover:text-black text-gray-600 border-maroonRed border-solid"
							href="/login"
						>
							Login
						</a>
					) : (
						<RiAccountCircleFill className=" text-xl" />
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
