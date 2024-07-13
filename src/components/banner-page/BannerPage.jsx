import React from "react";

function BannerPage() {
	return (
		<div className="flex justify-center">
			<div className="bg-zinc-50 rounded-lg lg:w-1/2 p-10 ">
				<div className="lg:text-4xl text-2xl lg:w-2/3 font-semibold">
					Art Curation for everyone, We help finding art you love?
				</div>
				<div className="my-6 lg:text-xl text-base font-medium">
					Looking for the perfect art work?
				</div>
				<div className="bg-zinc-500 w-fit rounded-lg md:p-4 p-2 hover:bg-zinc-400 text-white cursor-pointer">
					We cover you.
				</div>
			</div>
			<div className="sm:block hidden lg:w-2/5 w-full rounded-lg relative bottom-[-2rem] lg:left-[-5rem] left-[-1rem]  pr-0 sm:pr-6 pr-2 overflow-hidden">
				<img
					src="https://res.cloudinary.com/dkb4cxn9b/image/upload/v1716566843/artGaloreCarousel/banner-page.jpg"
					alt=""
					className="rounded-lg shadow-md"
				/>
			</div>
		</div>
	);
}

export default BannerPage;
