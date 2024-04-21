import React from "react";
import Logo from "../logo/Logo";
import playStoreImage from "../../assets/playStore.png";
import appStoreImage from "../../assets/appStore.png";
import CategoryList from "../common/category-list/CategoryList";

function Footer() {
	return (
		<footer className="bg-gray-100 ">
			<div className=" w-4/5 m-auto">
				<div className="flex py-8 items-center justify-between">
					<div>
						<Logo width={"300"} />
						<div className="flex space-x-2 pt-8">
							<img src={appStoreImage} alt={"appStoreImage"} className="h-12" />
							<img
								src={playStoreImage}
								alt={"playStoreImage"}
								className="h-12"
							/>
						</div>
					</div>
					<div className="flex space-x-32">
						<CategoryList
							heading={"ART BY CATEGORY"}
							headingStyle={"pb-3 font-bold text-gray-600"}
							itemStyle={
								"leading-7 text-gray-600 cursor-pointer hover:text-black"
							}
						/>
						<div>
							<ul>
								<h2 className="pb-3 font-bold text-gray-600">ART BY PRICE</h2>
								<li className="leading-7 text-gray-600 cursor-pointer hover:text-black">
									Under Rs 10000
								</li>
								<li className="leading-7 text-gray-600 cursor-pointer hover:text-black">
									Rs 10000 - Rs 25000
								</li>
								<li className="leading-7 text-gray-600 cursor-pointer hover:text-black">
									Rs 25000 - Rs 1 Lac
								</li>
								<li className="leading-7 text-gray-600 cursor-pointer hover:text-black">
									Rs 1 Lac - Rs 3 Lac
								</li>
								<li className="leading-7 text-gray-600 cursor-pointer hover:text-black">
									Above Rs 3 Lac
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<h2 className="pb-3 font-bold text-gray-600">ABOUT</h2>
								<li className="leading-7 text-gray-600 cursor-pointer hover:text-black">
									The Team
								</li>
								<li className="leading-7 text-gray-600 cursor-pointer hover:text-black">
									Testimonials
								</li>
								<li className="leading-7 text-gray-600 cursor-pointer hover:text-black">
									Work with us
								</li>
								<li className="leading-7 text-gray-600 cursor-pointer hover:text-black">
									Contact us
								</li>
								<li className="leading-7 text-gray-600 cursor-pointer hover:text-black">
									Privacy Policy
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="h-0.5 bg-dark m-auto" />
				<div className="h-12 w-fit m-auto ltext-gray-600 mt-2">
					<div>Copyright on @Art Galore limited 2024</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
