import React from "react";
import { colorsEnum } from "../../data/colorEnum";

function ColorComponent() {
	const topColors = colorsEnum.slice(0, 6);

	return (
		<div className="flex flex-wrap justify-center">
			{topColors.map((color, index) => (
				<div
					key={index}
					className="flex items-center justify-around rounded shadow-lg md:basis-1/4 lg:m-10 m-4 lg:h-60 lg:w-60 sm:h-44 sm:w-44 h-28 w-28"
					style={{
						backgroundColor: color.hex,
					}}
				>
					<div
						className={`${
							color.name == "White" || color.name == "Yellow"
								? ""
								: "text-white"
						}`}
					>
						{color.name}
					</div>
				</div>
			))}
		</div>
	);
}

export default ColorComponent;
