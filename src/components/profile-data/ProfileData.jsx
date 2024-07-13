import React from "react";
import { FaShareAlt, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdSaveAs } from "react-icons/md";
import Loader from "../common/loader/Loader";

function ProfileData({
	user,
	form,
	avatarPreview,
	artistPage,
	personalProfile,
	actionMode,
	onSubmit,
	registerProfileChange,
}) {
	const navigate = useNavigate();
	if (!user) {
		return <Loader loading={true} />;
	}
	return (
		<div>
			{" "}
			{actionMode === "view" ? (
				<div className="md:flex justify-around lg:m-10 m-4 static items-center ">
					<img
						src={user?.avatar?.url}
						alt=""
						className="lg:w-60 lg:h-60 sm:w-48 sm:h-48 w-36 h-36 rounded-full shadow-xl p-0.5 object-cover shaadow-sm m-auto"
					/>
					<div className="md:w-3/4 border-2 border-gray-200 rounded-lg md:p-8 p-4 md:ml-4 md:mt-0 mt-5">
						<div className="xs:flex justify-between my-2 items-center text-center">
							<div className="lg:text-2xl text-xl font-semibold xs:m-0 mb-2">
								{user?.name}
							</div>
							<div className="flex content-center justify-center">
								{personalProfile ? (
									<div className="flex content-center justify-center">
										<button className="border-2 border-maroonRed rounded-lg py-2 px-4 text-sm font-semibold text-maroonRed">
											Orders
										</button>
										<button
											className="border-2 border-maroonRed rounded-lg ml-2 text-maroonRed"
											onClick={() => {
												navigate("/edit/profile");
											}}
										>
											<FaEdit className="text-md rounded-md m-2 cursor-pointer" />
										</button>
									</div>
								) : (
									<button className="border-2 border-maroonRed rounded-lg py-2 px-4 text-sm font-semibold text-maroonRed">
										Follow
									</button>
								)}
								<button className="border-2 border-maroonRed rounded-lg mx-2 text-maroonRed ">
									<FaShareAlt className="text-md rounded-md m-2 cursor-pointer" />
								</button>
							</div>
						</div>
						<hr></hr>
						<div className="my-2 lg:text-base text-sm xs:text-left text-center">
							{user?.followers?.length} Followers | {user?.following?.length}{" "}
							Following
						</div>
						<div className="mt-6 mb-3 lg:text-xl text-base font-semibold underline">
							{artistPage ? (
								<span>Artist's Words</span>
							) : (
								<span>Description</span>
							)}
						</div>
						<p>
							{user?.description ? (
								<span className="md:text-base text-sm font-normal">
									{user.description}
								</span>
							) : (
								<div className="w-fit m-auto text-3xl font-bold text-gray-200 my-3">
									Artist's Bio
								</div>
							)}
						</p>
					</div>
				</div>
			) : (
				<form
					ref={(refF) => {
						form.current = refF;
					}}
					onSubmit={onSubmit}
				>
					<div className="md:flex justify-around lg:m-10 m-4 static items-center ">
						<div className="text-center">
							<img
								src={avatarPreview}
								height={40}
								width={40}
								alt="Avatar Preview"
								className="lg:w-60 lg:h-60 sm:w-48 sm:h-48 w-36 h-36 rounded-full shadow-xl p-0.5 object-cover shaadow-sm m-auto border-2 border-solid border-maroonRed"
							/>
							<input
								className="my-3 md:text-base text-xs"
								type="file"
								name="avatar"
								accept="image/*"
								onChange={registerProfileChange}
							/>
						</div>
						<div className="md:w-3/4 border-2 border-gray-200 rounded-lg md:p-8 p-4 md:ml-4 md:mt-0 mt-5">
							<div className="flex justify-between my-2">
								{/* <div className="text-2xl font-semibold ">{user?.name}</div> */}
								<label htmlFor="name" className="sr-only">
									Full Name
								</label>
								<input
									id="name"
									name="name"
									defaultValue={user?.name}
									type="text"
									required
									className="appearance-none rounded-none relative block w-full px-3 mr-10 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 md:text-base text-sm "
									placeholder="Full Name"
								/>
								<div className="flex content-center justify-center">
									<button
										className="border-2 border-maroonRed rounded-lg mx-2 text-maroonRed "
										title="Save"
										type="submit"
									>
										<MdSaveAs className="text-xl rounded-md m-2 cursor-pointer" />
									</button>
								</div>
							</div>
							<hr></hr>
							<div className="my-2 lg:text-base text-sm ">
								{user?.followers?.length} Followers | {user?.following?.length}{" "}
								Following
							</div>
							<div className="mt-6 mb-3 lg:text-xl text-base  font-semibold underline">
								{artistPage ? (
									<span>Artist's Words</span>
								) : (
									<span>Description</span>
								)}
							</div>
							<textarea
								name="description"
								className="border-2 z-0 w-full h-60 p-4 appearance-none rounded-none relative block w-full px-3 mr-10 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 md:text-base text-sm "
								placeholder="Write about Yourself"
								defaultValue={user?.description}
							></textarea>
						</div>
					</div>
				</form>
			)}
		</div>
	);
}

export default ProfileData;
