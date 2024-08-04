import { useEffect, useState, useRef } from "react";
import ReviewCard from "../review-card/ReviewCard";
import { getProductReviews } from "../../../utils/products-utils";
import { useDispatch, useSelector } from "react-redux";
import ProductConstants from "../../../redux/constants/productConstants";

const ReviewList = ({ productId, message }) => {
	const [reviewList, setReviewList] = useState([]);
	const { productReview } = useSelector((state) => state.productReducer);
	const dispatch = useDispatch();
	const scrollContainerRef = useRef(null);

	const getReviewListData = async () => {
		const data = await getProductReviews(productId);
		setReviewList(data?.reviews);
	};

	useEffect(() => {
		if (productId || productReview) {
			if (productReview) {
				dispatch({ type: ProductConstants.PRODUCT_REVIEW_FETCHED });
			}
			getReviewListData();
		}
	}, [productId, productReview]);

	const handleScroll = (direction) => {
		const { current } = scrollContainerRef;
		if (current) {
			const scrollAmount = current.clientWidth / 2;
			current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="relative m-4 my-10">
			<button
				className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-gray-200 p-2 rounded-full shadow-md"
				onClick={() => handleScroll("left")}
			>
				&lt;
			</button>
			<div
				ref={scrollContainerRef}
				className="overflow-x-auto flex space-x-4 p-2"
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
				}}
			>
				{reviewList.length ? (
					<div className="flex flex-nowrap space-x-4">
						{reviewList.map((review, index) => (
							<ReviewCard review={review} key={index} />
						))}
					</div>
				) : (
					<div className="w-fit m-auto text-3xl font-bold text-gray-200 my-3">
						{message}
					</div>
				)}
			</div>
			<button
				className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-gray-200 p-2 rounded-full shadow-md"
				onClick={() => handleScroll("right")}
			>
				&gt;
			</button>
		</div>
	);
};

export default ReviewList;
