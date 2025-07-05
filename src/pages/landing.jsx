import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import togglelogo from "../../src/assets/images/brand-logos/toggle-logo.png";
import toggledark from "../../src/assets/images/brand-logos/toggle-dark.png";
import desktopdark from "../../src/assets/images/brand-logos/desktop-dark.png";
import desktoplogo from "../../src/assets/images/brand-logos/desktop-logo.png";
import desktopwhitelogo from "../../src/assets/images/brand-logos/desktop-white.png";
import landingpage1 from "../../src/assets/images/media/landing/1.png";
import landingpage3 from "../../src/assets/images/media/landing/3.png";
import face1 from "../../src/assets/images/faces/1.jpg";
import f from "../../src/assets/images/faces/f.jpg";
import f1 from "../../src/assets/images/faces/f1.jpg";
import f2 from "../../src/assets/images/faces/f2.jpg";
import f3 from "../../src/assets/images/faces/f3.jpg";
import f4 from "../../src/assets/images/faces/f4.jpg";
import f5 from "../../src/assets/images/faces/f5.jpg";
import f6 from "../../src/assets/images/faces/f6.jpg";
import face5 from "../../src/assets/images/faces/5.jpg";
import face12 from "../../src/assets/images/faces/12.jpg";
import face15 from "../../src/assets/images/faces/15.jpg";
import manpc from "../../src/assets/images/faces/manpc.png";
import bg from "../../src/assets/images/faces/bg.png";
import verifiedIcon from "../assets/images/faces/verified-badge-fill.svg"; // Adjust path if needed
import Apk from "../../src/assets/images/faces/Apk.png";
// Import Swiper styles
import Select from "react-select";
import { orderVolumes, businessesType, softwareTypes, usersNumber, softwareLanguages } from "./landingdata.js";

import 'swiper/css';
import 'swiper/css/pagination';
import store from '../../src/redux/store.jsx';
import { ThemeChanger } from '../../src/redux/action.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar1 from './navbar.jsx';
import { connect } from 'react-redux';
import phone from "../assets/images/apps/riwam-app.png";
import googleDrive from "../assets/images/apps/google-drive.png";

const Landing = ({ local_varaiable, ThemeChanger }) => {

	function handleClick() {
		const theme = store.getState();
		ThemeChanger({ ...theme, "toggled": "close", "dataNavLayout": "horizontal" });
		if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
			document.querySelector(".offcanvas-end")?.classList.remove("show");
		}
	}
	useEffect(() => {
		const rootDiv = document.getElementById('root');
		if (rootDiv) {
		}
		return () => {
			if (rootDiv) {

				rootDiv.className = ''; // Remove the className when component unmounts
			}
		};
	}, []);
	const Topup = () => {
		if (window.scrollY > 30 && document.querySelector(".landing-body")) {
			const Scolls = document.querySelectorAll(".sticky");
			Scolls.forEach((e) => {
				e.classList.add("sticky-pin");
			});
		} else {
			const Scolls = document.querySelectorAll(".sticky");
			Scolls.forEach((e) => {
				e.classList.remove("sticky-pin");
			});
		}
	};

	window.addEventListener("scroll", Topup);

	// Toggle dark mode
	const ToggleDark = () => {
		const t = store.getState();
		ThemeChanger({
			...local_varaiable,
			"class": local_varaiable.class == 'dark' ? 'light' : 'dark',
			"dataHeaderStyles": local_varaiable.class == 'dark' ? 'light' : 'dark',
			"dataMenuStyles": local_varaiable.class == 'dark' ? 'light' : 'dark',

		});
		const theme = store.getState();

		if (theme.class != 'dark') {

			ThemeChanger({
				...theme,
				"bodyBg": '',
				"Light": '',
				"darkBg": '',
				"inputBorder": '',
			});
			localStorage.setItem("ynexlighttheme", "light");
			localStorage.removeItem("ynexdarktheme");
			localStorage.removeItem("ynexMenu");
			localStorage.removeItem("ynexHeader");
		}
		else {
			localStorage.setItem("ynexdarktheme", "dark");
			localStorage.removeItem("ynexlighttheme");
			localStorage.removeItem("ynexMenu");
			localStorage.removeItem("ynexHeader");
		}

	};

	// Local state for the navigation menu to not overlap with the dashboard one
	const [navToggled, setNavToggled] = useState("close");

	// Open the menu
	function toggleNavigation() {
		if (window.innerWidth <= 992) {
			setNavToggled("open");
		}
	}

	// Close the menu
	function menuClose() {
		if (window.innerWidth <= 992) {
			setNavToggled("close");
		}
	}

	// Reset the nav state when leaving the page
	const theme = store.getState();
	useEffect(() => {
		const { dataNavLayout, toggled } = theme;
		console.log(dataNavLayout);

		return () => {
			const theme = store.getState();
			ThemeChanger({ ...theme, toggled, dataNavLayout })
		};
	}, []);

	return (
		<Fragment>
			<HelmetProvider>
				<Helmet htmlAttributes={{ "data-nav-layout": "horizontal", "data-toggled": navToggled }}>
					<body className="landing-body"></body>
				</Helmet>
			</HelmetProvider>
			<header className="app-header">
				<div className="main-header-container container-fluid grid grid-cols-3 items-center">
					{/*<div className="header-content-left">

						<div className="header-element">
							<Link aria-label="anchor" to="#" className="sidemenu-toggle header-link" onClick={toggleNavigation}>
								<span className="open-toggle">
									<i className="ri-menu-line text-xl"></i>
								</span>
							</Link>
						</div>

					</div>*/}
					{/* LEFT - Logo */}
					<div className="flex justify-start">
						<div className="horizontal-logo max-w-[180px]">
							<Link to={`${import.meta.env.BASE_URL}`} className="header-logo">
								<img src={desktoplogo} alt="logo" className="h-auto toggle-logo" />
								<img src={desktopdark} alt="logo" className="h-auto toggle-dark" />
							</Link>
						</div>
					</div>

					{/* MIDDLE - empty to center buttons and logo apart */}
					<div></div>

					{/* RIGHT - Buttons */}
					<div className="flex justify-end items-center">
						<div className="flex space-x-2 rtl:space-x-reverse">
							<Link to={`${import.meta.env.BASE_URL}verification`} className="ti-btn ti-btn-primary m-0">
								Vérifier
							</Link>
							<Link to={`${import.meta.env.BASE_URL}ajouter`} className="ti-btn ti-btn-primary m-0">
								Ajouter
							</Link>
						</div>
					</div>

				</div>
			</header>

			<div id="responsive-overlay" onClick={() => menuClose()} ></div>
			<aside className="app-sidebar sticky !topacity-0" id="sidebar">
				<div className="container-xl xl:!p-0">
					<div className="main-sidebar mx-0">
						<nav className="main-menu-container nav nav-pills flex-column sub-open">
							<div className="landing-logo-container my-auto hidden lg:block">
								<div className="responsive-logo">
									<Link className="responsive-logo-light" to={`${import.meta.env.BASE_URL}`} aria-label="Brand"><img
										src={desktoplogo} alt="logo" className="w-[90px] mx-auto" /></Link>
									<Link className="responsive-logo-dark" to={`${import.meta.env.BASE_URL}`} aria-label="Brand"><img
										src={desktopwhitelogo} alt="logo" className="w-[90px] mx-auto" /></Link>
								</div>
							</div>
							<div className="slide-left hidden" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" onClick={() => toggleNavigation()}
								width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
							</div>
							<Navbar1 />
							<div className="slide-right hidden" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
								width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
							</svg></div>
							<div className="lg:flex hidden space-x-4 rtl:space-x-reverse">
								<Link to={`${import.meta.env.BASE_URL}verification`} className="ti-btn focus-visible:outline-none w-[6.375rem] ti-btn-primary-full m-0 p-2">Vérifier</Link>
								<Link to={`${import.meta.env.BASE_URL}ajouter`} className="ti-btn focus-visible:outline-none w-[6.375rem] ti-btn-primary-full m-0 p-2">Ajouter</Link>
							</div>

						</nav>
					</div>
				</div>
			</aside>
			<div className="main-content !p-0 landing-main dark:text-default-text-color" onClick={handleClick}>
				<div className="landing-banner !h-auto" id="accueil">
					<section className="section !pt-20 pb-30 text-[0.813rem]  ">
						<div className="container main-banner-container px-4 md:px-10 lg:px-20 max-w-screen-xl mx-auto">
							<div className="grid grid-cols-12 justify-center text-center">
								<div className="col-span-12">
									<div className="">
										<h5
											className="landing-banner-heading mb-3 !text-[2.4rem]"
											style={{ color: '#333335' }}
										>
											Le premier répertoire 100% algérien <br />
											des fournisseurs certifiés NESDA
										</h5>

										<p
											className="text-[1.125rem] mb-[3rem] opacity-[0.8] font-normal"
											style={{ color: '#ffffff' }}
										>
											Recherchez par secteur d’activité et wilaya, comparez les profils, et contactez-les en quelques clics.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<section className="section section-bg text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]" id="rechercher">
					<div className="container text-center">
						<p className="text-[0.75rem] font-semibold text-primary mb-1"><span className="landing-section-heading">RECHERCHER</span></p>
						<h3 className="font-semibold mb-2">Recherchez un fournisseur adapté à votre besoin</h3>
						<div>
							<div className="xl:col-span-7 col-span-12">
								<p className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] mb-12 font-normal">Utilisez notre moteur de recherche pour filtrer les fournisseurs certifiés par NESDA,<br />
									selon leur activité commerciale et leur localisation géographique (wilaya).</p>
							</div>
						</div>
						<div className="box bg-white shadow rounded-md mx-4 lg:mx-20 px-4 lg:px-10">
							<div className="box-body">
								<div className="p-6">
									<form className="text-center">
										<div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-6 space-y-4 lg:space-y-0">

											{/* First Select */}
											<div className="w-[260px]">
												<label className="form-label !text-[.875rem] text-black block text-left">
													Choisissez votre activité commerciale:
												</label>
												<Select
													className="w-full !rounded-md"
													options={softwareTypes}
													isSearchable
													menuPlacement="auto"
													classNamePrefix="Select2"
													placeholder="Sélectionner"
													styles={{
														singleValue: (provided) => ({
															...provided,
															textAlign: 'left',
														}),
														placeholder: (provided) => ({
															...provided,
															textAlign: 'left',
														}),
														input: (provided) => ({
															...provided,
															textAlign: 'left',
														}),
													}}
												/>
											</div>

											{/* Second Select */}
											<div className="w-[260px]">
												<label className="form-label !text-[.875rem] text-black block text-left">
													Sélectionnez la wilaya:
												</label>
												<Select
													className="w-full !rounded-md"
													options={usersNumber}
													isSearchable
													menuPlacement="auto"
													classNamePrefix="Select2"
													placeholder="Sélectionner"
													styles={{
														singleValue: (provided) => ({
															...provided,
															textAlign: 'left',
														}),
														placeholder: (provided) => ({
															...provided,
															textAlign: 'left',
														}),
														input: (provided) => ({
															...provided,
															textAlign: 'left',
														}),
													}}
												/>
											</div>

											{/* Submit Button */}
											<div className="mt-2">
												{/* Trigger Button */}
												<button
													className="ti-btn ti-btn-primary"
													type="button"
													data-hs-overlay="#todo-compose"
												>
													Rechercher
												</button>

												{/* Modal */}
												<div
													id="todo-compose"
													className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:scale-100 fixed inset-0 z-[80] overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out bg-black/50 hidden"
												>
													<div className="flex items-center justify-center min-h-screen px-4 py-8">
														<div className="bg-white rounded-lg shadow-lg w-full max-w-md">
															{/* Modal Content */}
															<div className="p-6">
																{/* Header */}
																<div className="flex justify-between items-center border-b pb-2 mb-4">
																	<h6 className="text-[1rem] font-semibold">
																		🔧 Le module de filtrage est actuellement en phase de développement.
																	</h6>
																	<button
																		type="button"
																		className="text-gray-600 hover:text-gray-900"
																		data-hs-overlay="#todo-compose"
																	>
																		<i className="ri-close-line text-xl"></i>
																	</button>
																</div>

																{/* Body */}
																<div className="text-gray-700 mb-4">
																	Nous travaillons activement pour vous offrir une meilleure expérience.<br />
																	Restez connectés, cette fonctionnalité sera disponible très prochainement.
																</div>

																{/* Footer */}
																<div className="text-right">
																	<button
																		type="button"
																		className="ti-btn ti-btn-primary"
																		data-hs-overlay="#todo-compose"
																	>
																		Fermer
																	</button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section section-bg text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]" id="fournisseurs">
					<div className="container text-center">
						<p className="text-[0.75rem] font-semibold text-primary mb-1"><span className="landing-section-heading">Fournisseurs sélectionnés</span></p>
						<h3 className="font-semibold mb-2">Quelques fournisseurs recommandés pour démarrer</h3>
						<div>
							<div className="xl:col-span-7 col-span-12">
								<p className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] mb-12 font-normal">Voici une sélection de fournisseurs partenaires déjà actifs avec NESDA,<br />choisis pour la diversité de leurs domaines d'activité et leur couverture géographique.</p>
							</div>
						</div>
						{/* List des fournisseurs */}
						<div className="grid grid-cols-12 gap-6">
							{/* Fournisseurs 1 */}
							<div className="xl:col-span-3 col-span-12">
								<div className="box">
									<div className="box-header">
										<div className="flex items-center w-full">
											{/* Avatar and Text Block */}
											<div className="flex items-center grow">
												<img
													src={f1}
													alt="img"
													className="avatar avatar-rounded me-2 !mb-0"
												/>
												<div className="my-auto">
													<div className="text-[.9375rem] font-semibold text-left">Forma Tech</div>
													<p className="mb-0 text-primary dark:text-white/50 text-[.6875rem] text-left">
														Setif, Algerie
													</p>
												</div>
											</div>

											{/* Verified Icon Button */}
											<div>
												<button type="button" className="m-2 px-2">
													<div className="flex items-center justify-center">
														<img
															src={verifiedIcon}
															alt="Verified Badge"
															className="w-5 h-5"
														/>
													</div>
												</button>
											</div>
										</div>
									</div>

									<div className="box-body text-left">
										<div>
											<span className="font-semibold text-black">Secteur d’activité:</span>
											<span className="text-[#8c9097]"> Machines à bois pour professionnels</span>
										</div>
									</div>

									<div className="box-footer">
										<div className="flex justify-center">
											<div className="flex gap-2">

												{/* Call Button (opens dialer) */}
												<a
													href="tel:+213770590533"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>

												{/* Map Button (opens in new tab) */}
												<a
													href="https://www.google.com/maps/place/FORMA+TECH/@36.2024182,5.4296011,17z/data=!4m19!1m12!4m11!1m6!1m2!1s0x12f315899ecc09dd:0xd85f3fd1acb33c9d!2sFORMA+TECH,+Cit%C3%A9+Hachemi+6%C3%A9me+tranche,+S%C3%A9tif+19000,+Alg%C3%A9rie,+19000!2m2!1d5.4321645!2d36.2024083!1m3!2m2!1d0.1963806!2d-0.0496745!3m5!1s0x12f315899ecc09dd:0xd85f3fd1acb33c9d!8m2!3d36.2024139!4d5.432176!16s%2Fg%2F11h56htdwd?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-map-2-line"></i>
												</a>

												{/* Facebook Button (opens in new tab) */}
												<a
													href="https://www.facebook.com/Forma.Tech.Officielle"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-facebook-fill"></i>
												</a>

												{/* Web Site Button (opens in new tab) 
												<a
													href="https://www.facebook.com/Forma.Tech.Officielle"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-link-m"></i>
												</a>*/}

												{/* Whatsap Button (opens in new tab) */}
												<a
													href="https://wa.me/213542184174"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-whatsapp-fill"></i>
												</a>

												{/* Mail Button (opens email client) 
												<a
													href="mailto:sarl.badaoui.et.cie@gmail.com?"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-mail-line"></i>
												</a>*/}

											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Fournisseurs 1 */}

							{/* Fournisseurs 2 */}
							<div className="xl:col-span-3 col-span-12">
								<div className="box">
									<div className="box-header">
										<div className="flex items-center w-full">
											{/* Avatar and Text Block */}
											<div className="flex items-center grow">
												<img
													src={f2}
													alt="img"
													className="avatar avatar-rounded me-2 !mb-0"
												/>
												<div className="my-auto">
													<div className="text-[.9375rem] font-semibold text-left">Projet Nouha</div>
													<p className="mb-0 text-primary dark:text-white/50 text-[.6875rem] text-left">
														Tlemcen, Algerie
													</p>
												</div>
											</div>

											{/* Verified Icon Button */}
											<div>
												<button type="button" className="m-2 px-2">
													<div className="flex items-center justify-center">
														<img
															src={verifiedIcon}
															alt="Verified Badge"
															className="w-5 h-5"
														/>
													</div>
												</button>
											</div>
										</div>
									</div>

									<div className="box-body text-left">
										<div>
											<span className="font-semibold text-black">Secteur d’activité:</span>
											<span className="text-[#8c9097]"> Machine industrielle</span>
										</div>
									</div>

									<div className="box-footer">
										<div className="flex justify-center">
											<div className="flex gap-2">

												{/* Call Button (opens dialer) */}
												<a
													href="tel:+213770201652"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>

												{/* Map Button (opens in new tab) 
												<a
													href="https://maps.google.com"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-map-2-line"></i>
												</a>*/}

												{/* Facebook Button (opens in new tab) */}
												<a
													href="https://www.facebook.com/fournisseur.projet.nouha"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-facebook-fill"></i>
												</a>
												{/* Web Site Button (opens in new tab)*/}
												<a
													href="https://www.nouha.net/fr"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-link-m"></i>
												</a>

												{/* Mail Button (opens email client) 
												<a
													href="mailto:contact@riwam.com?subject=Hamza&body=Hi%20hamza"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-mail-line"></i>
												</a>*/}

											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Fournisseurs 2 */}

							{/* Fournisseurs 1 */}
							<div className="xl:col-span-3 col-span-12">
								<div className="box">
									<div className="box-header">
										<div className="flex items-center w-full">
											{/* Avatar and Text Block */}
											<div className="flex items-center grow">
												<img
													src={f3}
													alt="img"
													className="avatar avatar-rounded me-2 !mb-0"
												/>
												<div className="my-auto">
													<div className="text-[.9375rem] font-semibold text-left">SARL ODT</div>
													<p className="mb-0 text-primary dark:text-white/50 text-[.6875rem] text-left">
														Algerie
													</p>
												</div>
											</div>

											{/* Verified Icon Button */}
											<div>
												<button type="button" className="m-2 px-2">
													<div className="flex items-center justify-center">
														<img
															src={verifiedIcon}
															alt="Verified Badge"
															className="w-5 h-5"
														/>
													</div>
												</button>
											</div>
										</div>
									</div>

									<div className="box-body text-left">
										<div>
											<span className="font-semibold text-black">Secteur d’activité:</span>
											<span className="text-[#8c9097]"> Mecanique générale</span>
										</div>
									</div>

									<div className="box-footer">
										<div className="flex justify-center">
											<div className="flex gap-2">

												{/* Call Button (opens dialer) */}
												<a
													href="tel:+213771339827"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>

												{/* Map Button (opens in new tab) 
												<a
													href="https://maps.google.com"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-map-2-line"></i>
												</a>*/}

												{/* Facebook Button (opens in new tab) */}
												<a
													href="https://www.facebook.com/omar.pariziane"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-facebook-fill"></i>
												</a>

												{/* Mail Button (opens email client) 
												<a
													href="mailto:contact@riwam.com?subject=Hamza&body=Hi%20hamza"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-mail-line"></i>
												</a>*/}

											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Fournisseurs 3 */}

							{/* Fournisseurs 4 */}
							<div className="xl:col-span-3 col-span-12">
								<div className="box">
									<div className="box-header">
										<div className="flex items-center w-full">
											{/* Avatar and Text Block */}
											<div className="flex items-center grow">
												<img
													src={f4}
													alt="img"
													className="avatar avatar-rounded me-2 !mb-0"
												/>
												<div className="my-auto">
													<div className="text-[.9375rem] font-semibold text-left">EURL SUNPACK </div>
													<p className="mb-0 text-primary dark:text-white/50 text-[.6875rem] text-left">
														Blida, Algerie
													</p>
												</div>
											</div>

											{/* Verified Icon Button */}
											<div>
												<button type="button" className="m-2 px-2">
													<div className="flex items-center justify-center">
														<img
															src={verifiedIcon}
															alt="Verified Badge"
															className="w-5 h-5"
														/>
													</div>
												</button>
											</div>
										</div>
									</div>

									<div className="box-body text-left">
										<div>
											<span className="font-semibold text-black">Secteur d’activité:</span>
											<span className="text-[#8c9097]"> Machine industrielle</span>
										</div>
									</div>

									<div className="box-footer">
										<div className="flex justify-center">
											<div className="flex gap-2">

												{/* Call Button (opens dialer) */}
												<a
													href="tel:+213561805855"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>

												{/* Map Button (opens in new tab) */}
												<a
													href="https://maps.app.goo.gl/k3T8erpUVeVMEeq7A"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-map-2-line"></i>
												</a>

												{/* Facebook Button (opens in new tab) */}
												<a
													href="https://www.facebook.com/EURLSUNPACK"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-facebook-fill"></i>
												</a>

												{/* Whatsap Button (opens in new tab) */}
												<a
													href="https://wa.me/213561655857"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-whatsapp-fill"></i>
												</a>

												{/* Mail Button (opens email client) 
												<a
													href="mailto:contact@riwam.com?subject=Hamza&body=Hi%20hamza"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-mail-line"></i>
												</a>*/}

											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Fournisseurs 4 */}

							{/* Fournisseurs 5 */}
							<div className="xl:col-span-3 col-span-12">
								<div className="box">
									<div className="box-header">
										<div className="flex items-center w-full">
											{/* Avatar and Text Block */}
											<div className="flex items-center grow">
												<img
													src={f5}
													alt="img"
													className="avatar avatar-rounded me-2 !mb-0"
												/>
												<div className="my-auto">
													<div className="text-[.9375rem] font-semibold text-left">Afraa Tools</div>
													<p className="mb-0 text-primary dark:text-white/50 text-[.6875rem] text-left">
														Algerie
													</p>
												</div>
											</div>

											{/* Verified Icon Button 
											<div>
												<button type="button" className="m-2 px-2">
													<div className="flex items-center justify-center">
														<img
															src={verifiedIcon}
															alt="Verified Badge"
															className="w-5 h-5"
														/>
													</div>
												</button>
											</div>*/}
										</div>
									</div>

									<div className="box-body text-left">
										<div>
											<span className="font-semibold text-black">Secteur d’activité:</span>
											<span className="text-[#8c9097]"> Mecanique générale</span>
										</div>
									</div>

									<div className="box-footer">
										<div className="flex justify-center">
											<div className="flex gap-2">

												{/* Call Button (opens dialer) 
												<a
													href="tel:+213668540070"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>*/}

												{/* Call Button (opens dialer) */}
												<a
													href="tel:+213560907822"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>

												{/* Call Button (opens dialer) */}
												<a
													href="tel:+213550473377"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>

												{/* Map Button (opens in new tab) 
												<a
													href="https://maps.google.com"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-map-2-line"></i>
												</a>*/}

												{/* Facebook Button (opens in new tab) */}
												<a
													href="https://www.facebook.com/dm.rjcoutillage"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-facebook-fill"></i>
												</a>

												{/* Mail Button (opens email client) 
												<a
													href="mailto:contact@riwam.com?subject=Hamza&body=Hi%20hamza"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-mail-line"></i>
												</a>*/}

											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Fournisseurs 5 */}

							{/* Fournisseurs 6 */}
							<div className="xl:col-span-3 col-span-12">
								<div className="box">
									<div className="box-header">
										<div className="flex items-center w-full">
											{/* Avatar and Text Block */}
											<div className="flex items-center grow">
												<img
													src={f6}
													alt="img"
													className="avatar avatar-rounded me-2 !mb-0"
												/>
												<div className="my-auto">
													<div className="text-[.9375rem] font-semibold text-left">Fournisseur Industrial</div>
													<p className="mb-0 text-primary dark:text-white/50 text-[.6875rem] text-left">
														Oran, Algerie
													</p>
												</div>
											</div>

											{/* Verified Icon Button
											<div>
												<button type="button" className="m-2 px-2">
													<div className="flex items-center justify-center">
														<img
															src={verifiedIcon}
															alt="Verified Badge"
															className="w-5 h-5"
														/>
													</div>
												</button>
											</div> */}
										</div>
									</div>

									<div className="box-body text-left">
										<div>
											<span className="font-semibold text-black">Secteur d’activité:</span>
											<span className="text-[#8c9097]"> Machine industriellen</span>
										</div>
									</div>

									<div className="box-footer">
										<div className="flex justify-center">
											<div className="flex gap-2">

												{/* Call Button (opens dialer) 
												<a
													href="tel:+213668540070"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>*/}

												{/* Map Button (opens in new tab) 
												<a
													href="https://maps.google.com"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-map-2-line"></i>
												</a>*/}

												{/* Facebook Button (opens in new tab) */}
												<a
													href="https://www.facebook.com/fournisseur.industrial"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-facebook-fill"></i>
												</a>

												{/* Mail Button (opens email client)
												<a
													href="mailto:contact@riwam.com?subject=Hamza&body=Hi%20hamza"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-mail-line"></i>
												</a> */}

											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Fournisseurs 6 */}

							{/* Fournisseurs 7 */}
							<div className="xl:col-span-3 col-span-12">
								<div className="box">
									<div className="box-header">
										<div className="flex items-center w-full">
											{/* Avatar and Text Block */}
											<div className="flex items-center grow">
												<img
													src={f}
													alt="img"
													className="avatar avatar-rounded me-2 !mb-0"
												/>
												<div className="my-auto">
													<div className="text-[.85rem] font-semibold text-left">Fornisseurs Restaurations </div>
													<p className="mb-0 text-primary dark:text-white/50 text-[.6875rem] text-left">
														Algerie
													</p>
												</div>
											</div>

											{/* Verified Icon Button 
											<div>
												<button type="button" className="m-2 px-2">
													<div className="flex items-center justify-center">
														<img
															src={verifiedIcon}
															alt="Verified Badge"
															className="w-5 h-5"
														/>
													</div>
												</button>
											</div>*/}
										</div>
									</div>

									<div className="box-body text-left">
										<div>
											<span className="font-semibold text-black">Secteur d’activité:</span>
											<span className="text-[#8c9097]"> Restaurations</span>
										</div>
									</div>

									<div className="box-footer">
										<div className="flex justify-center">
											<div className="flex gap-2">

												{/* Call Button (opens dialer) */}
												<a
													href="tel:+213541018229 "
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>

												{/* Call Button (opens dialer) */}
												<a
													href="tel:+213562627840 "
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>

												{/* Map Button (opens in new tab) 
												<a
													href="https://maps.google.com"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-map-2-line"></i>
												</a>

												{/* Facebook Button (opens in new tab) 
												<a
													href="https://facebook.com"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-facebook-fill"></i>
												</a>

												{/* Mail Button (opens email client) 
												<a
													href="mailto:contact@riwam.com?subject=Hamza&body=Hi%20hamza"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-mail-line"></i>
												</a>*/}

											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Fournisseurs 7 */}

							{/* Fournisseurs 8 */}
							<div className="xl:col-span-3 col-span-12">
								<div className="box">
									<div className="box-header">
										<div className="flex items-center w-full">
											{/* Avatar and Text Block */}
											<div className="flex items-center grow">
												<img
													src={f}
													alt="img"
													className="avatar avatar-rounded me-2 !mb-0"
												/>
												<div className="my-auto">
													<div className="text-[.85rem] font-semibold text-left">Fornisseurs Cosmétique</div>
													<p className="mb-0 text-primary dark:text-white/50 text-[.6875rem] text-left">
														Algerie
													</p>
												</div>
											</div>

											{/* Verified Icon Button 
											<div>
												<button type="button" className="m-2 px-2">
													<div className="flex items-center justify-center">
														<img
															src={verifiedIcon}
															alt="Verified Badge"
															className="w-5 h-5"
														/>
													</div>
												</button>
											</div>*/}
										</div>
									</div>

									<div className="box-body text-left">
										<div>
											<span className="font-semibold text-black">Secteur d’activité:</span>
											<span className="text-[#8c9097]"> Cosmétique et esthétique</span>
										</div>
									</div>

									<div className="box-footer">
										<div className="flex justify-center">
											<div className="flex gap-2">

												{/* Call Button (opens dialer) */}
												<a
													href="tel:+213562627840 "
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-phone-line"></i>
												</a>

												{/* Map Button (opens in new tab) 
												<a
													href="https://maps.google.com"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-map-2-line"></i>
												</a>

												{/* Facebook Button (opens in new tab) 
												<a
													href="https://facebook.com"
													target="_blank"
													rel="noopener noreferrer"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-facebook-fill"></i>
												</a>

												{/* Mail Button (opens email client) 
												<a
													href="mailto:contact@riwam.com?subject=Hamza&body=Hi%20hamza"
													className="ti-btn ti-btn-light !font-medium"
												>
													<i className="ri-mail-line"></i>
												</a>*/}

											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Fournisseurs 8 */}


						</div>
					</div>
				</section>

				<section className="section bg-banner-2 text-white !py-0" id="rejoindre">
					<div className="container">
						<div className="grid grid-cols-12 gap-6 items-center justify-center">
							<div className="md:col-span-5 xl:col-span-4 col-span-12 text-center mt-6 lg:block hidden">
								<img src={manpc} width="350" alt="" />
							</div>
							<div className="md:col-span-7 xl:col-span-8 col-span-12">
								<div className="my-6">
									<h2 className="font-semibold mb-4 text-[2rem]">Rejoignez les fournisseurs que les clients choisissent</h2>
									<p className="mb-6 text-[0.9375rem] opacity-[0.8] font-normal">Rejoignez notre répertoire national et faites partie des fournisseurs algériens reconnus, visibles par des milliers d’entrepreneurs à la recherche de partenaires fiables.</p>
									<Link to="/ajouter" className="ti-btn ti-btn-light ti-btn-lg dark:border-defaultborder/10 !font-medium">
										<i className="bi bi-box-arrow-up-right"></i> Je veux plus de clients
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section section-bg text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]" id="faq">
					<div className="container text-center">
						<p className="text-[0.75rem] font-semibold text-primary mb-1"><span className="landing-section-heading">FAQ</span></p>
						<h3 className="font-semibold mb-2">Frequently asked questions</h3>
						<div className="grid grid-cols-12 justify-center">
							<div className="col-span-12">
								<p className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] mb-12 font-normal">Nous avons regroupé certaines des questions les plus fréquemment posées pour vous aider.</p>
							</div>
						</div>
						<div className="grid grid-cols-12 gap-6 text-start">
							<div className="xl:col-span-12 col-span-12">
								<div className="grid grid-cols-12 gap-6">
									<div className="xl:col-span-6 col-span-12">
										<div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate" id="accordionFAQ1">
											<div className="hs-accordion-group">
												<div className="hs-accordion active bg-white dark:bg-bodybg  border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm  dark:border dark:border-defaultborder/10-white/10"
													id="faq-one">
													<button type="button"
														className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
														aria-controls="faq-collapse-one">
														Qu’est-ce que RFDZ ?
														<svg
															className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
															<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
														</svg>
														<svg
															className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
														</svg>
													</button>
													<div id="faq-collapse-one"
														className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
														aria-labelledby="faq-one">
														<div className="p-5">
															<p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
																RFDZ est une plateforme en ligne qui regroupe des fournisseurs algériens ayant déjà collaboré ou été validés par NESDA. Elle facilite la recherche de partenaires fiables pour les entrepreneurs.
															</p>
														</div>
													</div>
												</div>

												<div className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border-defaultborder/10-white/10"
													id="faq-thirty">
													<button type="button"
														className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
														aria-controls="faq-collapse-four">
														Puis-je proposer l’ajout d’un fournisseur ?
														<svg
															className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
															<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
														</svg>
														<svg
															className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
														</svg>
													</button>
													<div id="faq-collapse-four"
														className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
														aria-labelledby="faq-thiery">
														<div className="p-5">
															<p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
																Oui, vous pouvez proposer un fournisseur via notre formulaire de contact ou une future section “Ajouter”. Nous vérifions chaque demande avant publication.
															</p>
														</div>
													</div>
												</div>
												<div className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border-defaultborder/10-white/10"
													id="faq-two">
													<button type="button"
														className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
														aria-controls="faq-collapse-two">
														Qui peut utiliser ce site ?
														<svg
															className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
															<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
														</svg>
														<svg
															className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
														</svg>
													</button>
													<div id="faq-collapse-two"
														className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
														aria-labelledby="faq-two">
														<div className="p-5">
															<p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
																Tout le monde peut consulter le site gratuitement : porteurs de projets, start-ups, jeunes entrepreneurs, incubateurs ou entreprises à la recherche de fournisseurs de confiance.
															</p>
														</div>
													</div>
												</div>
												{/*<div className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border-defaultborder/10-white/10"
													id="faq-three">
													<button type="button"
														className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
														aria-controls="faq-collapse-five">
														Est-ce que l'utilisation de la plateforme est gratuite ?
														<svg
															className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
															<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
														</svg>
														<svg
															className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
														</svg>
													</button>
													<div id="faq-collapse-five"
														className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
														aria-labelledby="faq-three">
														<div className="p-5">
															<p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
																Oui, l'accès à toutes les fonctionnalités de recherche et de consultation des fournisseurs est entièrement gratuit.
															</p>
														</div>
													</div>
												</div>
												 <div className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border-defaultborder/10-white/10"
                                                    id="faq-four">
                                                    <button type="button"
                                                        className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                                                        aria-controls="faq-collapse-six">
                                                        Do I need to create an account to make an order?
                                                        <svg
                                                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round" />
                                                            <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                        <svg
                                                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div id="faq-collapse-six"
                                                        className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                                                        aria-labelledby="faq-four">
                                                        <div className="p-5">
                                                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                                default, until the collapse plugin adds the appropriate classes that we
                                                                use to style each element. These classes control the overall appearance,
                                                                as well as the showing and hiding via CSS transitions. You can modify
                                                                any of this with custom CSS or overriding our default variables. It's
                                                                also worth noting that just about any HTML can go within the
                                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> */}
											</div>
										</div>
									</div>
									<div className="xl:col-span-6 col-span-12">
										<div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate" id="accordionFAQ2">
											<div className="hs-accordion-group">
												<div className="hs-accordion active bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
													id="faq-five">
													<button type="button"
														className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
														aria-controls="faq-collapse-seven">
														Les fournisseurs listés sont-ils tous validés par NESDA ?
														<svg
															className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
															<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
														</svg>
														<svg
															className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
														</svg>
													</button>
													<div id="faq-collapse-seven"
														className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
														aria-labelledby="faq-five">
														<div className="p-5">
															<p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
																Oui, tous les fournisseurs présents sur la plateforme ont un historique ou une validation avec NESDA, garantissant leur sérieux et leur fiabilité.
															</p>
														</div>
													</div>
												</div>
												<div className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
													id="faq-six">
													<button type="button"
														className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
														aria-controls="faq-collapse-eight">
														Comment puis-je contacter un fournisseur ?
														<svg
															className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
															<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
														</svg>
														<svg
															className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
														</svg>
													</button>
													<div id="faq-collapse-three"
														className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
														aria-labelledby="faq-twenty">
														<div className="p-5">
															<p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
																Chaque fiche fournisseur contient ses coordonnées (email, téléphone, localisation..). Vous pouvez le contacter directement depuis la plateforme ou en cliquant sur “Voir plus”.
															</p>
														</div>
													</div>
												</div>
												<div className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
													id="faq-seven">
													<button type="button"
														className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
														aria-controls="faq-collapse-nine">
														Est-ce que l'utilisation de la plateforme est gratuite ?
														<svg
															className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
															<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
														</svg>
														<svg
															className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
														</svg>
													</button>
													<div id="faq-collapse-nine"
														className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
														aria-labelledby="faq-seven">
														<div className="p-5">
															<p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
																Oui, l'accès à toutes les fonctionnalités de recherche et de consultation des fournisseurs est entièrement gratuit.
															</p>
														</div>
													</div>
												</div>
												{/*<div className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
													id="faq-eight">
													<button type="button"
														className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
														aria-controls="faq-collapse-ten">
														Can I manage multiple businesses with RIWAM?
														<svg
															className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
															<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
														</svg>
														<svg
															className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
														</svg>
													</button>
													<div id="faq-collapse-ten"
														className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
														aria-labelledby="faq-eight">
														<div className="p-5">
															<p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
																Yes, RIWAM allows you to manage multiple businesses—whether it's shops, restaurants, or
																warehouses—from a single profile. You can easily switch between different projects, provided you
																use RIWAM for all your software and online store needs.
															</p>
														</div>
													</div>
												</div>
												<div className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
													id="faq-nine">
													<button type="button"
														className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
														aria-controls="faq-collapse-eleven">
														How is RIWAM different from other platforms?
														<svg
															className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
															<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
														</svg>
														<svg
															className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
															width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
																strokeLinecap="round" />
														</svg>
													</button>
													<div id="faq-collapse-eleven"
														className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
														aria-labelledby="faq-nine">
														<div className="p-5">
															<p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
																RIWAM stands out with its all-in-one integrated system, professional order confirmation service,
																customization options, secure cloud synchronization, and dedicated customer support. It's
																designed to simplify your business operations and help you grow efficiently
															</p>
														</div>
													</div>
												</div>
												{/* <div className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
                                                    id="faq-ten">
                                                    <button type="button"
                                                        className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                                                        aria-controls="faq-collapse-twelve">
                                                        Do I have the right to return an item?
                                                        <svg
                                                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round" />
                                                            <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                        <svg
                                                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div id="faq-collapse-twelve"
                                                        className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                                                        aria-labelledby="faq-ten">
                                                        <div className="p-5">
                                                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                                default, until the collapse plugin adds the appropriate classes that we
                                                                use to style each element. These classes control the overall appearance,
                                                                as well as the showing and hiding via CSS transitions. You can modify
                                                                any of this with custom CSS or overriding our default variables. It's
                                                                also worth noting that just about any HTML can go within the
                                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]" id="contact">
					<div className="container text-center">
						<p className="text-[0.75rem] font-semibold text-primary mb-1"><span className="landing-section-heading">CONTACTEZ-NOUS</span></p>
						<h3 className="font-semibold mb-2">Vous avez des questions ? Nous serions ravis de vous entendre.</h3>
						<div className="grid grid-cols-12 justify-center">
							<div className="col-span-12">
								<p className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] mb-12 font-normal">Vous pouvez nous contacter à tout moment pour toute question ou offre.
									N’hésitez pas à dissiper vos doutes avant d’essayer notre produit.</p>
							</div>
						</div>
						<div className="grid grid-cols-12 gap-6 text-start">
							<div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-spam-12 col-span-12">
								<div className="box border dark:border-defaultborder/10 shadow-none">
									<div className="box-body !p-0">
										<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12622.037655007194!2d-0.5879071431136191!3d35.70453793831683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e628c55555555%3A0xef7ff1b0e92ef57f!2sUniversity%20of%20Science%20and%20Technology%20Mohamed%20Boudiaf!5e1!3m2!1sen!2sdz!4v1733702375650!5m2!1sen!2sdz" height="365" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
									</div>
								</div>
							</div>
							<div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
								<div className="box  overflow-hidden !bg-[#f9fafb] dark:!bg-bodybg border dark:border-defaultborder/10 shadow-none">
									<div className="box-body">
										<div className="grid grid-cols-12 gap-4 mt-2 px-4">
											<div className="xl:col-span-6 col-span-12">
												<div className="grid grid-cols-12 gap-4">
													<div className="xl:col-span-12 col-span-12">
														<label htmlFor="contact-address-name" className="form-label ">Nom complet :</label>
														<input type="text" className="form-control w-full !rounded-md" id="contact-address-name" placeholder="Entrez votre nom" />
													</div>
													<div className="xl:col-span-12 col-span-12">
														<label htmlFor="contact-address-phone" className="form-label ">N° de téléphone :</label>
														<input type="text" className="form-control w-full !rounded-md" id="contact-address-phone" placeholder="Entrez votre N° de téléphone" />
													</div>
													<div className="xl:col-span-12 col-span-12">
														<label htmlFor="contact-address-address" className="form-label ">Adresse :</label>
														<textarea className="form-control w-full !rounded-md" id="contact-address-address" rows={1}></textarea>
													</div>
												</div>
											</div>
											<div className="xl:col-span-6 col-span-12">
												<label htmlFor="contact-address-message" className="form-label ">Message :</label>
												<textarea className="form-control w-full !rounded-md" id="contact-address-message" rows={8}></textarea>
											</div>
											<div className="xl:col-span-12 col-span-12">
												<div className="flex  mt-6 ">
													<div className="ms-auto">
														<button type="button" className="ti-btn bg-primary  text-white !font-medium">Envoyer le message</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section landing-footer text-white text-[0.813rem] opacity-[0.87]">
					<div className="container">
						<div className="grid grid-cols-12 gap-6">
							<div className="xl:col-span-4 col-span-12">
								<div className="px-6">
									<p className="font-semibold mb-4">
										<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}`}>
											<img src={desktopdark} alt="RIWAM Logo" className="w-[150px] h-auto" />
										</Link>
									</p>
									<p className="mb-2 opacity-[0.6] font-normal">
										RFDZ est une plateforme algérienne en ligne qui répertorie les fournisseurs validés par NESDA,
										permettant aux entrepreneurs de rechercher facilement des partenaires fiables par activité
										commerciale et localisation géographique.
									</p>
								</div>
							</div>
							<div className="xl:col-span-2 col-span-12">
								<div className="px-6">
									<h6 className="font-semibold text-[1rem] mb-2">INFO</h6>
									<ul className="list-unstyled opacity-[0.6] font-normal landing-footer-list">
										<li>
											<a href="#accueil" className="text-white">Accueil</a>
										</li>
										<li>
											<a href="#rechercher" className="text-white">Rechercher</a>
										</li>
										<li>
											<a href="#fournisseurs" className="text-white">Fournisseurs</a>
										</li>
										<li>
											<a href="#rejoindre" className="text-white">Rejoindre</a>
										</li>
										<li>
											<a href="#faq" className="text-white">FAQ</a>
										</li>
										<li>
											<a href="#contact" className="text-white">Contact</a>
										</li>
										{/*<li>
											<a href="#contact" className="text-white">Contact</a>
										</li>*/}
									</ul>
								</div>
							</div>
							<div className="xl:col-span-4 col-span-12">
								<div className="px-6">
									<h6 className="font-semibold text-[1rem] mb-2">CONTACT</h6>
									<ul className="list-unstyled font-normal landing-footer-list">
										<li>
											<a
												href="https://maps.app.goo.gl/EVXXq1i8mpLi6KXh6"
												target="_blank"
												rel="noopener noreferrer"
												className="text-white opacity-[0.6]"
											>
												<i className="ri-home-4-line me-1 align-middle"></i> Incubator USTO-MB, Oran
											</a>
										</li>

										<li>
											<a href="mailto:contact@riwam.com" className="text-white opacity-[0.6]">
												<i className="ri-mail-line me-1 align-middle"></i> contact@riwam.com
											</a>
										</li>

										<li>
											<a href="tel:+213668540070" className="text-white opacity-[0.6]">
												<i className="ri-phone-line me-1 align-middle"></i> +213668540070
											</a>
										</li>
										{/*<li>
											<Link to="#" className="text-white opacity-[0.6]"><i className="ri-printer-line me-1 align-middle"></i> +213670727937</Link>
										</li>*/}
										<li className="mt-4 !mb-0">
											<p className="mb-2 font-semibold opacity-[0.8] text-[1rem]">FOLLOW US ON :</p>
											<div className="mb-0">
												<div className="btn-list">
													<Link to="https://www.facebook.com/share/19bqF1c6Kw/" className="ti-btn ti-btn-sm !mb-0 ti-btn-primary me-[0.365rem]">
														<i className="ri-facebook-line font-bold"></i>
													</Link>
													<Link to="https://www.instagram.com/rpdz_byriwam?igsh=bG1mMWtyNGZlZzdo" className="ti-btn ti-btn-sm !mb-0 ti-btn-primary me-[0.365rem]">
														<i className="ri-instagram-line font-bold"></i>
													</Link>
													{/*<Link to="https://tiktok.com/@riwam_service" className="ti-btn ti-btn-sm !mb-0 ti-btn-primary me-[0.365rem]">
														<i className="ti ti-brand-tiktok font-bold"></i>
													</Link>
													<Link to="https://www.youtube.com/@riwam_service" className="ti-btn ti-btn-sm !mb-0 ti-btn-primary me-[0.365rem]">
														<i className="ri-youtube-line font-bold"></i>
													</Link>*/}
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="text-center landing-main-footer py-4 opacity-[0.87]">
					{/*<span className="text-[#8c9097] dark:text-white/50 text-[0.9375rem]"> Copyright © <span id="year"> 2025</span> RIWAM.
						All
						rights
						reserved
					</span>*/}
					<span className="text-[#8c9097] dark:text-white/50 text-[0.9375rem]"> Copyright © <span id="year">2025</span> <a
						href="#" className="font-semibold text-primary dark:text-primary text-[0.9375rem] underline">RFNDZ</a>.
						Designed by <a href="https://riwam.com/">
							<span className="font-semibold text-primary dark:text-primary text-[0.9375rem] underline">RIWAM</span>
						</a> All
						rights
						reserved
					</span>
				</div>
			</div>
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landing);
// export default Landing;
