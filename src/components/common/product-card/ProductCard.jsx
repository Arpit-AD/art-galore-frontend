import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ImCross } from "react-icons/im";

const options = {
	edit: false,
	color: "rgba(20,20,20,0.1)",
	activeColor: "tomato",
	size: window.innerWidth < 600 ? 20 : 25,
	value: 3.5,
	isHalf: true,
};

function ProductCard({ product }) {
	const { actionMode } = useSelector((state) => state.pageReducer);
	return (
		<Link
			// to={`/${product._id}`}
			// className="basis-1/5 h-fit lg:text-base sm:text-sm text-xs m-2 bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0"
			className={`m-2 lg:text-base sm:text-sm text-xs bg-white rounded-b-lg overflow-hidden border-2 border-gray-100 hover:shadow-md flex-shrink-0 ${
				actionMode === "edit" ? "bg-zinc-100" : ""
			}`}
		>
			<img src={product.images[0].url} alt={product.name} />
			<div className="p-4">
				<div className="flex items-center justify-between">
					<ReactStars {...options} className="z-0" />{" "}
					<span> (256 reviews) </span>
				</div>
				<div className="flex justify-between items-center">
					<div>
						<p className="font-semibold">{product.name}</p>
						<p className="italic text-dark">{product.artist}</p>
						<p className="text-dark mt-4">{product.category}</p>
					</div>
					<p className="font-semibold text-xl"> ₹ {product.price}</p>
				</div>
				<div className="flex space-x-4  mt-2">
					<button className="lg:text-base sm:text-sm text-xs w-1/2 py-2 hover:text-maroonRed bg-gray-200 rounded-md transition duration-300 hover:bg-gray-300 appearance-none block px-3 py-2 border border-gray-300 rounded-md focus:z-10 sm:text-sm">
						<FaHeart className="m-auto" />
					</button>
					{actionMode === "edit" ? (
						<button className="lg:text-base sm:text-sm text-xs w-1/2 py-2 hover:text-maroonRed bg-gray-200 rounded-md transition duration-300 hover:bg-gray-300 appearance-none block px-3 py-2 border border-gray-300 rounded-md focus:z-10 sm:text-sm">
							<ImCross className="m-auto font-black" />
						</button>
					) : (
						<></>
					)}
					<button className="lg:text-base sm:text-sm text-xs w-1/2 py-2 hover:text-maroonRed bg-gray-200 rounded-md transition duration-300 hover:bg-gray-300 appearance-none block px-3 py-2 border border-gray-300 rounded-md focus:z-10 sm:text-sm">
						<FaShoppingCart className="m-auto" />
					</button>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
