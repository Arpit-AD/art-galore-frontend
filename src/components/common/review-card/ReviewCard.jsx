import Loader from "../loader/Loader";
import ReactStars from "react-rating-stars-component";

function ReviewCard({ review }) {
	if (!review) return <Loader />;
	const reactStarOptions = {
		className: "z-0",
		edit: false,
		color: "rgba(20,20,20,0.1)",
		activeColor: "tomato",
		size: window.innerWidth < 600 ? 17 : window.innerWidth < 1000 ? 20 : 25,
		isHalf: true,
		value: review.rating || 0,
	};

	return (
		<div className="lg:p-2 p-1 justify-between md:items-center sm:max-w-80 max-w-60 flex-shrink-0">
			<div className="border-2 border-solid p-2">
				<div className="items-center mb-2 md:mb-0 md:mr-4 justify-between">
					<div className="flex items-center">
						<img
							src={review?.avatar?.url}
							alt={review?.name}
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<h3 className="text-lg font-semibold">{review?.name}</h3>
						</div>
					</div>
					<ReactStars
						key={`review-stars-${review.rating * Math.random()}`}
						{...reactStarOptions}
						className="md:mr-4"
					/>
				</div>
				<div className="flex flex-col md:flex-row md:items-center md:w-full lg:my-2 my-2">
					<p
						className="lg:mt-3 mt-2 text-gray-700 md:mt-0 text-sm"
						style={{
							display: "-webkit-box",
							WebkitBoxOrient: "vertical",
							WebkitLineClamp: 3 /* Number of lines to show */,
							overflow: "hidden",
							textOverflow: "ellipsis",
						}}
					>
						{review?.comment}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ReviewCard;
