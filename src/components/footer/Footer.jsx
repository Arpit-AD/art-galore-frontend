import React from "react";
import Logo from "../logo/Logo";
import playStoreImage from "../../assets/playStore.png";
import appStoreImage from "../../assets/appStore.png";
import CategoryList from "../common/category-list/CategoryList";
import PriceEnum from "../../data/priceEnum";
import AboutEnum from "../../data/aboutEnum";

function Footer() {
	return (
		<footer className="bg-gray-100 lg:text-base sm:text-sm text-xs">
			<div className="xl:w-4/5 m-auto xl:p-auto p-8">
				<div className="flex flex-wrap lg:py-8 py-4 items-center md:justify-between">
					<div className="md:w-1/3 w-2/3 m-auto">
						<div className="xl:w-auto w-2/3">
							<Logo width={"280"} />
						</div>
						<div className="flex xl:space-x-2 space-x-1 pt-8">
							<img
								src={appStoreImage}
								alt={"appStoreImage"}
								className="md:w-1/3 md:w-1/4 w-1/3"
							/>
							<img
								src={playStoreImage}
								alt={"playStoreImage"}
								className="md:w-1/3 md:w-1/4 w-1/3"
							/>
						</div>
					</div>
					<div className="flex sm:flex-nowrap flex-wrap lg:space-x-32 xs:space-x-16 space-x-8 md:mt-auto mt-10 md: mx-auto">
						<CategoryList
							heading={"ART BY CATEGORY"}
							headingStyle={"pb-3 font-bold"}
							itemStyle={
								"lg:leading-7 leading-6 cursor-pointer hover:text-black"
							}
						/>
						<div>
							<ul>
								<h2 className="pb-3 font-bold">ART BY PRICE</h2>
								{Object.values(PriceEnum).map((price, i) => (
									<li
										className="lg:leading-7 leading-6 cursor-pointer hover:text-black"
										key={i}
									>
										<a href={`#`}>{price}</a>
									</li>
								))}
							</ul>
						</div>
						<div className="sm:flex hidden">
							<ul>
								<h2 className="pb-3 font-bold">ABOUT</h2>
								{Object.values(AboutEnum).map((text, i) => (
									<li
										className="lg:leading-7 leading-6 cursor-pointer hover:text-black"
										key={i}
									>
										<a href={`#`}>{text}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<hr className="h-0.5 bg-dark m-auto" />
				<div className="h-6 w-fit m-auto  mt-2">
					<div>Copyright on @Art Galore limited 2024</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
