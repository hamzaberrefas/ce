import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Pageheader from '../../src/components/common/pageheader/pageheader';
import ecommerceimg1 from "../../src/assets/images/ecommerce/png/1.png";
import ecommerceimg2 from "../../src/assets/images/ecommerce/png/2.png";
import ecommerceimg3 from "../../src/assets/images/ecommerce/png/3.png";
import ecommerceimg4 from "../../src/assets/images/ecommerce/png/4.png";
import ecommerceimg7 from "../../src/assets/images/ecommerce/png/7.png";
import ecommerceimg8 from "../../src/assets/images/ecommerce/png/8.png";
import ecommerceimg9 from "../../src/assets/images/ecommerce/png/9.png";
import ecommerceimg10 from "../../src/assets/images/ecommerce/png/10.png";
import ecommerceimg11 from "../../src/assets/images/ecommerce/png/11.png";
import ecommerceimg13 from "../../src/assets/images/ecommerce/png/13.png";
import ecommerceimg14 from "../../src/assets/images/ecommerce/png/14.png";
import ecommerceimg16 from "../../src/assets/images/ecommerce/png/16.png";
import ensemble1 from "../../src/assets/images/1080/ensemble 1.jpg";
import ensemble2 from "../../src/assets/images/1080/ensemble 2.jpg";
import robe1 from "../../src/assets/images/1080/robe 1.jpg";
import robe2 from "../../src/assets/images/1080/robe 2.jpg";
import costume1 from "../../src/assets/images/1080/costume 1.jpg";
import costume2 from "../../src/assets/images/1080/costume 2.jpg";
import costume3 from "../../src/assets/images/1080/costume 3.jpg";
import trench1 from "../../src/assets/images/1080/trench 1.jpg";
import trench2 from "../../src/assets/images/1080/trench 2.jpg";
import trench3 from "../../src/assets/images/1080/trench 3.jpg";
import jupe1 from "../../src/assets/images/1080/jupe 1.jpg";
import jupe2 from "../../src/assets/images/1080/jupe 2.jpg";
import excel from "../assets/images/apps/excel.png";
import pdf from "../assets/images/apps/pdf.png";






const Orders = () => {
	return (
		<Fragment>
			<Pageheader currentpage="Orders" activepage="Ecommerce" mainpage="Orders" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xl:col-span-12 col-span-12">
					<div className="box">
						<div className="box-body flex items-center flex-wrap">
							<div className="flex-grow">
								<span className="mb-0 text-[0.875rem] text-[#8c9097] dark:text-white/50">Total number of orders placed upto now : <span className="font-semibold text-success">21</span></span>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<Link to="#"
									className="ti-btn ti-btn-light sm:!m-0 !mb-3 !gap-0 !font-medium dark:text-defaulttextcolor/70"
									aria-expanded="false">
									Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
								</Link>
								<ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
									<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
										to="#">Shipped orders</Link></li>
									<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
										to="#">Unconfirmed orders</Link></li>
									<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
										to="#">In confirmation process </Link></li>
									<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
										to="#">Confirmed orders </Link></li>
								</ul>
							</div>
							<div className="flex items-center ms-2" role="search">
								<input className="form-control !rounded-sm me-2 dark:text-defaulttextcolor/70" type="search" placeholder="Search" aria-label="Search" />
								<button className="ti-btn ti-btn-light dark:text-defaulttextcolor/70 !mb-0" type="submit">Search</button>
								<button type="button"
									className="ti-btn ti-btn-outline-secondary btn-wave !font-medium  !me-[0.375rem]  !ms-3 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] shadow-none mb-0" data-hs-overlay="#export-modal">
									<i className="ri-upload-cloud-line  inline-block"></i>Export
								</button>
								<div id="export-modal" className="hs-overlay hidden ti-modal">
									<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
										<div className="ti-modal-content">
											<div className="ti-modal-header">
												<h6 className="modal-title text-[1rem] font-semibold" id="mail-ComposeLabel">Export orders</h6>
												<button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#export-modal">
													<span className="sr-only">Done</span>
													<i className="ri-close-line"></i>
												</button>
											</div>
											<div className="ti-modal-body px-4">
												<p>Choose the format you prefer to download the orders.</p>
												<div className="mt-5 flex items-center justify-evenly">
    <div className="flex flex-col items-center gap-2">
        <img src={excel} alt="Excel" className="h-[80px]" />
        <a 
            href="https://riwam.com/download.php?f=Les-commandes-RIWAM-Service-EXEL.xlsx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ti-btn ti-btn-primary-full !rounded-full !gap-1 inline-flex"
        >
            <i className="ti ti-download text-[1.3rem] font-medium"></i>
            <span>Excel</span>
        </a>
    </div>
    <div className="flex flex-col items-center gap-2">
        <img src={pdf} alt="PDF" className="h-[80px]" />
        <a 
            href="https://riwam.com/download.php?f=Les-commandes-RIWAM-Service-PDF.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ti-btn ti-btn-primary-full !rounded-full !gap-1 inline-flex"
        >
            <i className="ti ti-download text-[1.3rem] font-medium"></i>
            <span>PDF</span>
        </a>
    </div>
</div>
											</div>
											<div className="ti-modal-footer">
												<button type="button"
													className="hs-dropdown-toggle ti-btn  ti-btn-secondary-full align-middle"
													data-hs-overlay="#export-modal">
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={robe1} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">ROBE 1</span>
									</Link>
									<span className="block text-success">12,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-1203</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Haifaa Chirine Serhane</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										Cité El Rimel,El Oued, 39000
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">02</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-success"
								>
									Shipped
								</button>

							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={costume3} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">COSTUME 3</span>
									</Link>
									<span className="block text-success">10,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-2936</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Rania Hammadi</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										Cité de la nouvelle,Djelfa, 17000
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">03</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary !me-4"
								>
									Confirm order
								</button>
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-orange"
								>
									Cancel Order
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={trench2} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">TRENCH 2</span>
									</Link>
									<span className="block text-success">7,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-5902</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Nassima Djeridi Bekadour</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										1 RUE MED BOUBZARI - ALGER: 16100
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">04</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-h"
								>
									Confirming...
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={jupe2} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">JUPE 2</span>
									</Link>
									<span className="block text-success">5,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-1855</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Nacer Chergui Souaad</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										AVE SAIM MOHAMED - ORAN : 31003
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">04</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary !me-4"
								>
									Confirm order
								</button>
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-orange"
								>
									Cancel Order
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={costume1} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">COSTUME 1</span>
									</Link>
									<span className="block text-success">10,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-1234</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Mimouna Belkhedim</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										AVE FANON - ARZEW : 31004
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">05</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-success2"
								>
									Confirmed
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={ensemble1} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">ENSEMBLE 1</span>
									</Link>
									<span className="block text-success">8,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-2903</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Saliha Mahmoud </p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										RUE LARBI BENMHIDI - ORAN, 31008
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">06</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary !me-4"
								>
									Confirm order
								</button>
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-orange"
								>
									Cancel Order
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={jupe1} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">JUPE 1</span>
									</Link>
									<span className="block text-success">5,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-5300</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Maria Belmiloud</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										Sidi Chahmi,Oran, 31038
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">06</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-h "
								>
									Confirming...
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={ensemble2} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">ENSEMBLE 2</span>
									</Link>
									<span className="block text-success">8,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-1345</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">F & F Berrefas</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										AV HAMMOU - ORAN : 31007
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">07</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-success2"
								>
									Confirmed
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={trench3} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">TRENCH 3</span>
									</Link>
									<span className="block text-success">7,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-8765</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Malek Rahef Serhane</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										Cité Bouameur, Laghouat: 03000
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">07</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-h "
								>
									Confirming...
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={robe1} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">ROBE 1</span>
									</Link>
									<span className="block text-success">12,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-1349</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Nabahat Amira Belbel</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										51 rue Hussein Dey,Algiers, 16008
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">08</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary !me-4"
								>
									Confirm order
								</button>
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-orange"
								>
									Cancel Order
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={ensemble1} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">ENSEMBLE 1</span>
									</Link>
									<span className="block text-success">8,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-2321</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Sarah Kacimi</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										RUE LARBI BENMHIDI - ORAN : 31008
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">09</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-success "
								>
									Shipped
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={costume3} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">COSTUME 3</span>
									</Link>
									<span className="block text-success">10,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-1376</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Khouloud Benali</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										El Mazounia Bougara,Larbaâ, 09300
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">10</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary !me-4"
								>
									Confirm order
								</button>
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-orange"
								>
									Cancel Order
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={ensemble2} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">ENSEMBLE 2</span>
									</Link>
									<span className="block text-success">8,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-1645</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Farida Abid </p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										Tounane BP 41,Souahlia 13420
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">11</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary !me-4"
								>
									Confirm order
								</button>
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-orange"
								>
									Cancel Order
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={costume2} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">COSTUME 2</span>
									</Link>
									<span className="block text-success">10,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-8765</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Sarah Belmiloud </p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										AADL Ain Beida,Oran 31000
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">12</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary !me-4"
								>
									Confirm order
								</button>
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-orange"
								>
									Cancel Order
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={robe2} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">ROBE 2</span>
									</Link>
									<span className="block text-success">12,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-1976</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Chaimaa Abid</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										51 cité CADAT,Blida 0900
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">13</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-success2"
								>
									Confirmed
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={trench2} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">TRENCH 2</span>
									</Link>
									<span className="block text-success">7,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-2903</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Amel Belmiloud</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										AVE FANON - ARZEW : 31004
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">14</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary !me-4"
								>
									Confirm order
								</button>
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-orange"
								>
									Cancel Order
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={jupe1} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">JUPE 1</span>
									</Link>
									<span className="block text-success">5,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-5300</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Sarah & Jouri Benali</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										AADL Ain Beida,Oran 31000
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">15</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-h "
								>
									Confirming...
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={jupe2} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">JUPE 2</span>
									</Link>
									<span className="block text-success">5,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-1423</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Amira Senouci SLAY</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										Cité Bouameur, Laghouat: 03000
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">16</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-success"
								>
									Shipped
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={costume3} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">COSTUME 3</span>
									</Link>
									<span className="block text-success">10,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-2903</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Chaima Djeziri</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										AVE FANON - ARZEW : 31004
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">17</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary !me-4"
								>
									Confirm order
								</button>
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-orange"
								>
									Cancel Order
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={trench2} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">TRENCH 2</span>
									</Link>
									<span className="block text-success">7,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-4023</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Safaa Serhane</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										Cité 200 LGTS N9, Alger, 16003
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">18</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-success2"
								>
									Confirmed
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<div className="box">
						<div className="box-header block !justify-start">
							<div className="sm:flex block items-center w-full">
								<div className="me-2">
									<span className="avatar bg-light avatar-md mb-1">
										<img src={trench3} alt="" />
									</span>
								</div>
								<div className="flex-grow">
									<Link to="#">
										<span className="text-[0.875rem] font-semibold">TRENCH 3</span>
									</Link>
									<span className="block text-success">10,000 DZD</span>
								</div>
								<div className="sm:text-center">
									<span className="text-[0.875rem] font-semibold">Order Id :</span>
									<span className="sm:block">#SPK-3705</span>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="orders-delivery-address">
									<p className="mb-1 font-semibold">Chahra Berrane</p>
									<p className="mb-1 font-medium">Delivery Address:</p>
									<p className="text-[#8c9097] dark:text-white/50 mb-0">
										El Mazounia Bougara,Larbaâ, 09300
									</p>
								</div>
								<div className="delivery-date text-center ms-auto">
									<span className="text-[1.125rem] text-primary font-bold">18</span>
									<span className="font-semibold">May</span>
								</div>
							</div>
						</div>
						<div className="box-footer sm:flex block items-center w-full justify-between">
							<div><span className="text-[#8c9097] dark:text-white/50me-2">Status :</span></div>
							<div className="sm:mt-0 mt-2">
								<button
									type="button"
									className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-h"
								>
									Confirming...
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment >
	);
}

export default Orders;
