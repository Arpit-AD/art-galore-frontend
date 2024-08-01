import { useEffect, useState } from "react";
import ReviewCard from "../review-card/ReviewCard";
import { getProductReviews } from "../../../utils/products-utils";
import { useDispatch, useSelector } from "react-redux";
import ProductConstants from "../../../redux/constants/productConstants";

const ReviewList = ({ productId, message }) => {
	const [reviewList, setReviewList] = useState([]);
	const [isScrollable, setIsScrollable] = useState(false);
	const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
	const { productReview } = useSelector((state) => state.productReducer);
	const dispatch = useDispatch();

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

	const handleScroll = (e) => {
		const { scrollLeft, scrollWidth, clientWidth } = e.target;
		setIsScrollable(scrollWidth > clientWidth);
		setIsScrolledToEnd(scrollLeft + clientWidth >= scrollWidth);
	};

	return (
		<div className="relative m-4 my-10">
			<div
				className={`overflow-x-auto flex ${
					isScrollable && !isScrolledToEnd ? "shadow-right" : ""
				}`}
				onScroll={handleScroll}
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
			{isScrollable && (
				<>
					<div className="absolute top-0 left-0 w-8 h-full pointer-events-none bg-gradient-to-r from-white to-transparent" />
					{!isScrolledToEnd && (
						<div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent" />
					)}
				</>
			)}
		</div>
	);
};

export default ReviewList;
