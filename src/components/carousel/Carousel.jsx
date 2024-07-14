import React, { useState } from "react";

const Carousel = ({ images }) => {
	const [currentImage, setCurrentImage] = useState(0);

	const handlePrev = () => {
		setCurrentImage((prevImage) =>
			prevImage === 0 ? images.length - 1 : prevImage - 1,
		);
	};

	const handleNext = () => {
		setCurrentImage((prevImage) =>
			prevImage === images.length - 1 ? 0 : prevImage + 1,
		);
	};

	return (
		<div className="relative  m-auto mt-10 lg:text-base sm:text-sm text-xs">
			<div className="xl:h-128 md:h-96 sm:h-64 h-48 overflow-hidden w-full flex justify-center align-center p-4 bg-gray-00  xl:shadow-xl">
				<img
					src={images[currentImage]}
					alt="Carousel"
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="absolute bottom-0 w-full flex justify-between p-4">
				<button
					className="lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 bg-maroonRed text-white hover:bg-gray-800 hover:text-white shadow-xl rounded-full"
					onClick={handlePrev}
				>
					Prev
				</button>
				<button
					className="lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 bg-maroonRed text-white hover:bg-gray-800 hover:text-white shadow-xl rounded-full"
					onClick={handleNext}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Carousel;
