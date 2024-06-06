import React from "react";

function BannerPage() {
	return (
		<div className="flex static justify-center">
			<div className="bg-zinc-50 rounded-lg w-1/2 p-10">
				<div className="text-4xl w-2/3 font-semibold ">
					Art Curation for everyone, We help finding art you love?
				</div>
				<div className="my-6 text-xl font-medium ">
					Looking for the perfect art work?
				</div>
				<div className="bg-zinc-500 w-fit rounded-lg p-4 hover:bg-zinc-400 text-white cursor-pointer">
					We cover you.
				</div>
			</div>
			<div className="w-2/5 rounded-lg shadow-md relative top-8 right-20">
				<img
					src="https://res.cloudinary.com/dkb4cxn9b/image/upload/v1716566843/artGaloreCarousel/banner-page.jpg"
					alt=""
					className="rounded-lg"
				/>
			</div>
		</div>
	);
}

export default BannerPage;
