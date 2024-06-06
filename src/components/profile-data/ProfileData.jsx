import React from "react";
import { FaShareAlt, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdSaveAs } from "react-icons/md";

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
	return (
		<div>
			{" "}
			{actionMode === "view" ? (
				<div className="flex justify-around m-10 static">
					<img
						src={user?.avatar?.url}
						alt=""
						className="w-60 h-60 rounded-full shadow-xl p-0.5 object-cover shaadow-sm"
					/>
					<div className="w-3/4 border-2 border-gray-200 rounded-lg p-8">
						<div className="flex justify-between my-2">
							<div className="text-2xl font-semibold ">{user?.name}</div>
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
											<FaEdit className="text-xl rounded-md m-2 cursor-pointer" />
										</button>
									</div>
								) : (
									<button className="border-2 border-maroonRed rounded-lg py-2 px-4 text-sm font-semibold text-maroonRed">
										Follow
									</button>
								)}
								<button className="border-2 border-maroonRed rounded-lg mx-2 text-maroonRed ">
									<FaShareAlt className="text-xl rounded-md m-2 cursor-pointer" />
								</button>
							</div>
						</div>
						<hr></hr>
						<div className="my-2">
							{user?.followers?.length} Followers | {user?.following?.length}{" "}
							Following
						</div>
						<div className="mt-6 mb-3 text-xl font-semibold underline">
							{artistPage ? (
								<span>Artist's Words</span>
							) : (
								<span>Description</span>
							)}
						</div>
						<p>
							{user?.description ? (
								<span>{user.description}</span>
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
					<div className="flex justify-around m-10 s	tatic">
						<div>
							<img
								src={avatarPreview}
								height={40}
								width={40}
								alt="Avatar Preview"
								className="w-60 h-60 rounded-full shadow-xl p-0.5 object-cover shaadow-sm border-2 border-solid border-maroonRed"
							/>
							<input
								className="my-3"
								type="file"
								name="avatar"
								accept="image/*"
								onChange={registerProfileChange}
							/>
						</div>
						<div className="w-3/4 border-2 border-gray-200 rounded-lg p-8">
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
									className="appearance-none rounded-none relative block w-full px-3 mr-10 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 sm:text-sm"
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
							<div className="my-2">
								{user?.followers?.length} Followers | {user?.following?.length}{" "}
								Following
							</div>
							<div className="mt-6 mb-3 text-xl font-semibold underline">
								{artistPage ? (
									<span>Artist's Words</span>
								) : (
									<span>Description</span>
								)}
							</div>
							<textarea
								name="description"
								className="border-2 w-full h-60 p-4 appearance-none rounded-none relative block w-full px-3 mr-10 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 sm:text-sm"
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
