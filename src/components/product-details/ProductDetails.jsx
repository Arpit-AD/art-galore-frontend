import React, { useEffect, useState } from "react";
import { formatNumberToINR } from "../../utils/products-utils";
import { FaCopy, FaHeart, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import ArtistCard_II from "../common/artist-card-ii/ArtistCard_II";
import Loader from "../common/loader/Loader";
import ProductList from "../common/product-list/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productActions";

const formatDate = (isoDate) => {
	const date = new Date(isoDate);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based in JavaScript
	const year = date.getFullYear();
	return `${day}-${month}-${year}`;
};

function ProductDetails({ create, productData }) {
	const dispatch = useDispatch();
	const [starKey, setStarKey] = useState(0);
	const { products } = useSelector((state) => state.productReducer);
	const [productList, setProductList] = useState([]);
	const handleCopyUrl = () => {
		const url = window.location.href;
		navigator.clipboard
			.writeText(url)
			.then(() => {
				toast.success("URL copied to clipboard!");
			})
			.catch((err) => {
				toast.error("Failed to copy URL.");
				console.error("Failed to copy: ", err);
			});
	};
	useEffect(() => {
		if (productData) {
			setStarKey(Math.random() * 100);
		}
	}, [productData]);

	useEffect(() => {
		if (!(products && products?.length)) {
			dispatch(getProduct());
		}
	}, [products, dispatch]);

	const getOptions = () => {
		const opt = {
			className: "z-0",
			edit: false,
			color: "rgba(20,20,20,0.1)",
			activeColor: "tomato",
			size: window.innerWidth < 600 ? 17 : window.innerWidth < 1000 ? 20 : 25,
			value: productData?.numberOfReviews,
			isHalf: true,
		};
		return opt;
	};

	if (!productData) {
		return <Loader loading={!productData} />;
	}

	return (
		<>
			{create ? (
				<form>form</form>
			) : (
				<div className="my-8">
					<img
						src={`${
							productData?.images[0]?.url
								? productData?.images[0]?.url
								: "https://res.cloudinary.com/dkb4cxn9b/image/upload/v1720353302/artGaloreProducts/no_image_available.jpg"
						}`}
						alt=""
						className="mb-8 mx-auto"
					/>
					<div>
						<div className="my-8">
							<div className="text-3xl font-semibold">{productData?.name}</div>
							<div className="flex items-center justify-between">
								<div className="text-3xl">
									₹{" "}
									{formatNumberToINR(
										productData?.price ? productData.price : 0,
									)}
								</div>
								<div className="flex">
									<button
										className="border-2 border-maroonRed rounded-lg py-2 px-6 font-semibold text-maroonRed bg-white mx-1"
										onClick={handleCopyUrl}
									>
										<FaCopy className="m-auto" />
									</button>
									<button className="border-2 border-maroonRed rounded-lg py-2 px-6 font-semibold text-gray-400 bg-white mx-1">
										<FaHeart className="m-auto" />
									</button>
									<button className="border-2 border-maroonRed rounded-lg py-2 px-6 font-semibold bg-maroonRed text-white flex mx-1">
										<FaShoppingCart className="m-auto" />{" "}
										<span className="ml-2">Buy</span>
									</button>
								</div>
							</div>
						</div>
						<hr className="my-1" />
						<hr className="my-1" />
						<div className="my-8 flex justify-between items-center">
							<div className="basis-1/2 leading-10 mx-4">
								<div className="lg:text-xl text-base font-semibold underline">
									Specifications
								</div>
								<ul className=" ">
									<li className="flex">
										<div className="basis-1/2">Category:</div>
										<div className="basis-1/2">{productData?.category}</div>
									</li>{" "}
									<hr />
									<li className="flex">
										<div className="basis-1/2">Created on:</div>
										<div className="basis-1/2">
											{formatDate(productData?.createdDate)}
										</div>
									</li>{" "}
									<hr />
									<li className="flex">
										<div className="basis-1/2">Sold By:</div>
										<div className="basis-1/2">{productData?.artist}</div>
									</li>{" "}
									<hr />
									<li className="flex">
										<div className="basis-1/2">Stock:</div>
										<div className="basis-1/2">{productData?.stock}</div>
									</li>{" "}
									<hr />
									<li className="flex">
										<div className="basis-1/2">Rating:</div>
										<div className="basis-1/2">
											<ReactStars key={starKey} {...getOptions()} />
										</div>
									</li>{" "}
									<hr />
									<li className="flex">
										<div className="basis-1/2">International shipping:</div>
										<div className="basis-1/2">Yes</div>
									</li>
									<hr />
								</ul>
							</div>
							<div className="basis-1/2 mx-4">
								<ArtistCard_II userId={productData?.user} />{" "}
							</div>
						</div>
						<div className="my-8 mx-4">
							<div className="lg:text-xl text-base font-semibold underline">
								Description
							</div>
							<p className="my-4">{productData?.description}</p>
						</div>
					</div>
					<hr className="my-1" />
					<hr className="my-1" />
					<div className="my-8">
						<div className="lg:text-xl text-base font-semibold underline">
							Other products from artist
						</div>
						<div className="my-4">
							<ProductList
								productList={productList}
								message={"No other products from artist"}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ProductDetails;
