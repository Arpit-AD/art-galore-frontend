import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { createProductReview } from "../../utils/products-utils";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import ProductConstants from "../../redux/constants/productConstants";

function ReviewForm() {
	const [isOverlayVisible, setIsOverlayVisible] = useState(false);
	const { id } = useParams();
	const dispatch = useDispatch();

	const handleClick = async (review, discard = false) => {
		if (!discard) {
			if (review.rating > 0) {
				await createProductReview(id, review);
				dispatch({ type: ProductConstants.REVIEW_FORM_UPDATED });
			} else {
				toast.error("Kindly rate the product", {
					position: "top-left",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					className: "my-toast",
					theme: "light",
				});
				return;
			}
		}
		setIsOverlayVisible(false);
	};

	useEffect(() => {
		if (isOverlayVisible) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
	}, [isOverlayVisible]);

	const reviewForm = () => {
		setIsOverlayVisible(true);
	};

	return (
		<div className="justify-center items-center flex mt-5">
			<div
				className="flex border-2 border-dotted h-32 sm:w-1/3 w-full"
				onClick={reviewForm}
			>
				<FaPlusCircle className="m-auto text-2xl" />
			</div>
			<ReviewFormDisplay handleClick={handleClick} display={isOverlayVisible} />
		</div>
	);
}
function ReviewFormDisplay({ display, handleClick }) {
	const [review, setReview] = useState({ rating: 0, comment: "" });

	const handleRatingChange = (newRating) => {
		setReview({ ...review, rating: newRating });
	};

	const handleCommentChange = (event) => {
		setReview({ ...review, comment: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleClick(review);
	};

	const handleDiscard = () => {
		handleClick(review, true);
	};

	const reactStarOptions = {
		className: "z-0",
		edit: true,
		color: "rgba(20,20,20,0.1)",
		activeColor: "tomato",
		size: window.innerWidth < 600 ? 18 : window.innerWidth < 1000 ? 25 : 30,
		isHalf: true,
		onChange: handleRatingChange,
	};

	return (
		display && (
			<form
				className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
				onSubmit={handleSubmit}
			>
				<div className="bg-white p-5 rounded shadow-lg lg:w-1/3">
					<div className="mb-4">
						<div className="lg:text-md text-base font-semibold">
							Rate and comment the product.
						</div>
						<div className="text-center">
							<ReactStars {...reactStarOptions} />
						</div>
						<textarea
							name="comment"
							value={review.comment}
							onChange={handleCommentChange}
							className="border-2 w-full h-40 p-4 appearance-none rounded-none relative block w-full px-3 mr-10 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 md:text-base text-sm"
							placeholder="What's your review"
						></textarea>
					</div>
					<div>
						<button
							type="submit"
							className="p-2 mx-2 bg-maroonRed text-md text-white rounded"
						>
							Upload Review
						</button>
						<button
							type="button"
							className="mx-2 p-2 bg-maroonRed text-md text-white rounded"
							onClick={handleDiscard}
						>
							Discard Review
						</button>
					</div>
				</div>
			</form>
		)
	);
}

export default ReviewForm;
