import React from "react";
import CategoryEnum from "../../../data/categoryEnum";

function CategoryComponent({ categoryObj }) {
	return (
		<div className="flex flex-wrap justify-around">
			{Object.keys(CategoryEnum)?.map((key) => {
				const obj = categoryObj[CategoryEnum[key]];

				const src = obj?.length
					? obj[0]?.images[0]?.url
					: "https://res.cloudinary.com/dkb4cxn9b/image/upload/v1720353302/artGaloreProducts/no_image_available.jpg";
				return (
					<div
						style={{
							backgroundImage: `url(${src})`,
						}}
						className=" lg:w-72 lg:h-72 m-3 sm:w-60 sm:h-60 xs:w-36 xs:h-36 w-32 h-32 bg-cover shadow-xl object-cover shaadow-sm cursor-pointer flex items-center opacity-90 justify-center"
					>
						<div className="lg:mt-60 sm:mt-48 mt-24 w-full bg-black py-1 px-2 text-white sm:text-base text-sm sm:font-semibold opacity-80 hover:opacity-100 ">
							{CategoryEnum[key]}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CategoryComponent;
