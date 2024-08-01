import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import {
	wishlist_buttonClicked,
	formatNumberToINR,
	isProductLiked,
	getRatingValue,
} from "../../../utils/products-utils";

const reactStar_options = {
	className: "z-0",
	edit: false,
	color: "rgba(20,20,20,0.1)",
	activeColor: "tomato",
	size: window.innerWidth < 600 ? 17 : window.innerWidth < 1000 ? 20 : 25,
	isHalf: true,
	value: 1,
};

function ProductCard({ product }) {
	const { actionMode } = useSelector((state) => state.pageReducer);
	const { user } = useSelector((state) => state.userReducer);
	const [likedProduct, setLikedProduct] = useState(
		isProductLiked(product?._id),
	);

	useEffect(() => {
		if (user && product) {
			setLikedProduct(isProductLiked(product._id));
		}
	}, [user, product]);
	const getOptions = () => {
		const opt = {
			...reactStar_options,
			value: getRatingValue(product?.reviews),
		};
		return opt;
	};

	return (
		<Link
			to={`/product/${product._id}`}
			// className="basis-1/5 h-fit lg:text-base sm:text-sm text-xs m-2 bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0"
			className={`sm:m-2 lg:text-base sm:text-sm text-xs bg-white rounded-b-lg overflow-hidden border-2 border-gray-100 hover:shadow-md flex-shrink-0 ${
				actionMode === "edit" ? "bg-zinc-100" : ""
			}`}
		>
			<img src={product.images[0].url} alt={product.name} />
			<div className="lg:p-4 p-2">
				<div className="sm:flex items-center justify-between">
					<ReactStars {...getOptions()} />{" "}
					<span>
						{" "}
						{!product?.numberOfReviews
							? product?.numberOfReviews
							: 0} reviews{" "}
					</span>
				</div>
				<p className="font-semibold truncate">{product.name}</p>
				<div className="flex justify-between items-center">
					<div className="md:basis-2/3 basis-1/2">
						<p className="italic text-dark">{product.artist}</p>
						<p className="text-dark mt-4">{product.category}</p>
					</div>
					<p className="font-semibold lg:text-xl">
						{" "}
						₹ {formatNumberToINR(product.price)}
					</p>
				</div>
				<div className="flex space-x-4  mt-2">
					<button
						className={`lg:text-base sm:text-sm text-xs w-1/2 text-gray-500 py-2 bg-gray-200 rounded-md transition duration-300 hover:bg-gray-300 appearance-none block px-3 py-2 border border-gray-300 rounded-md focus:z-10 sm:text-sm ${
							likedProduct ? "text-maroonRed" : ""
						}`}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							wishlist_buttonClicked(product?._id, likedProduct);
						}}
					>
						<FaHeart className="m-auto" />
					</button>
					{actionMode === "edit" ? (
						<button className="lg:text-base sm:text-sm text-gray-500 text-xs w-1/2 py-2 bg-gray-200 rounded-md transition duration-300 hover:bg-gray-300 appearance-none block px-3 py-2 border border-gray-300 rounded-md focus:z-10 sm:text-sm">
							<ImCross className="m-auto font-black" />
						</button>
					) : (
						<></>
					)}
					<button className="lg:text-base sm:text-sm text-gray-500 text-xs w-1/2 py-2 bg-gray-200 rounded-md transition duration-300 hover:bg-gray-300 appearance-none block px-3 py-2 border border-gray-300 rounded-md focus:z-10 sm:text-sm">
						<FaShoppingCart className="m-auto" />
					</button>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
