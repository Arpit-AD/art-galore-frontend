import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileData from "../../components/profile-data/ProfileData";
import { getUserData } from "../../utils/user-utils";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/common/product-list/ProductList";
import { getProduct } from "../../redux/actions/productActions";
import { updateUser } from "../../redux/actions/userAction";
import { getArtists } from "../../redux/actions/artristAction";
import { Helmet } from "react-helmet";

function ProfilePage({ personalProfile }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const updateForm = useRef();
	const { actionMode } = useSelector((state) => state.pageReducer);
	const { artists } = useSelector((state) => state.artistReducer);
	const { products } = useSelector((state) => state.productReducer);
	const { user } = useSelector((state) => state.userReducer);
	const [userData, setUserData] = useState(null);
	const [artistPage, setArtistPage] = useState(false);
	const [artworks, setArtworks] = useState([]);
	const [avatar, setAvatar] = useState(null);
	const artistSetter = async () => {
		const data = await getUserData(id);
		setUserData(data?.user);
		if (data?.user?.role === "artist") setArtistPage(true);
	};

	const updateFormSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(updateForm.current);
		let __userData = Object.fromEntries(formData.entries());
		__userData.avatar = avatar;

		if (userData) {
			__userData = { ...userData, ...__userData, oldAvatar: userData?.avatar };
		}

		dispatch(updateUser(__userData));
		dispatch(getArtists());

		navigate("/profile");
	};

	const registerProfileChange = (e) => {
		if (e.target.name === "avatar") {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatar(reader.result);
				}
			};

			reader.readAsDataURL(e.target.files[0]);
		}
	};

	useEffect(() => {
		if (id) {
			if (artists && artists?.length) {
				const artistData = artists?.filter((data) => id === data._id)[0];
				setUserData(artistData);
				if (artistData?.role === "artist") setArtistPage(true);
			} else artistSetter();
		}
		if (!(products && products?.length)) {
			dispatch(getProduct());
		}
	}, [id, artists, artistPage]);

	useEffect(() => {
		if (products && (id || userData)) {
			const _artworks = products?.filter((product) => {
				if (id) return product?.user === id;
				else if (userData) return product?.user === userData?._id;
			});
			setArtworks(_artworks);
		}
		if (userData) {
			setAvatar(userData?.avatar?.url);
		}
	}, [products, userData]);

	useEffect(() => {
		if (personalProfile && user) {
			setUserData(user?.user);
			if (user?.user?.role === "artist") setArtistPage(true);
		}
	}, [personalProfile, user]);

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{userData ? userData?.name : "Proile Page"}</title>
			</Helmet>
			<div className="mt-12 mb-6 flex align-center justify-between font-semibold  lg:text-3xl sm:text-2xl text-xl xl:px-0 px-4">
				ARTIST PROFILE
			</div>
			<div>
				<ProfileData
					user={userData}
					form={updateForm}
					artistPage={artistPage}
					personalProfile={personalProfile}
					actionMode={actionMode}
					avatarPreview={avatar}
					onSubmit={updateFormSubmit}
					registerProfileChange={registerProfileChange}
				/>
			</div>
			{artistPage ? (
				<div className="xl:px-0 px-4">
					<div className="flex mt-12 mb-6 items-center justify-between ">
						<span className="font-semibold  lg:text-3xl sm:text-2xl text-xl">
							ARTWORKS
						</span>
						<span>
							<button
								className="px-4 py-1 bg-maroonRed text-white  hover:bg-gray-800 hover:text-white shadow-xl rounded-full font-semibold md:text-xl text-md font-bold"
								onClick={() => navigate("/product/create")}
							>
								+
							</button>
						</span>
					</div>
					{artworks?.length ? (
						<div className="my-8">
							<ProductList productList={artworks} />
						</div>
					) : (
						<div className="w-fit m-auto text-5xl font-bold text-gray-200 my-24">
							No Artworks yet
						</div>
					)}
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export default ProfilePage;
