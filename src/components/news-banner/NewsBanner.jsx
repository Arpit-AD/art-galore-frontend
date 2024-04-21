import React from "react";

function NewsBanner({ news }) {
	return news ? (
		<div className="lg:h-12 h-8 bg-dark urbanist-font text-white text-xs sm:flex hidden justify-center items-center shadow-sm shadow-zinc-100 font-bold">
			<div className="my-0 lg:text-sm">{news}</div>
		</div>
	) : (
		<></>
	);
}

export default NewsBanner;
