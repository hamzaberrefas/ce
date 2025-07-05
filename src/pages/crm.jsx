import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Conversionratio, Dealsstatistics, Profit, Profitearned, Revenueanalytics, Sourcedata, Totalcustomers, Totaldeals, Totalrevenue } from './crmdata';
import face10 from "../../src/assets/images/faces/10.jpg";
import face12 from "../../src/assets/images/faces/12.jpg";


const Crm = () => {
	// for User search function
	const [Data, setData] = useState(Dealsstatistics);

	const userdata = [];

	const myfunction = (idx) => {
		let Data;
		for (Data of Dealsstatistics) {
			if (Data.name[0] == " ") {
				Data.name = Data.name.trim();
			}
			if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
				if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
					userdata.push(Data);
				}
			}

		}
		setData(userdata);
	};
	return (
		<Fragment>
			<div className="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
				<div className="pt-6">
					<p className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 ">Welcome back, RIWAM User !</p>
					<p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem]">Track your sales activity, leads and deals here.</p>
				</div>
				{/*<div className="btn-list md:mt-0 mt-2">
					 <button type="button"
              className="ti-btn bg-primary text-white btn-wave !font-medium !me-[0.375rem] !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] shadow-none mb-0">
              <i className="ri-filter-3-fill  inline-block"></i>Filters
             </button> 
					
				</div>*/}
			</div>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-9 xl:col-span-12  col-span-12">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="xxl:col-span-4 xl:col-span-4  col-span-12">
							<div className="xxl:col-span-12 xl:col-span-12 col-span-12">
								<div className="box crm-highlight-card">
									<div className="box-body">
										<div className="flex items-center justify-between">
											<div>
												<div className="font-semibold text-[1.125rem] text-white mb-2">Your target is incomplete</div>
												<span className="block text-[0.75rem] text-white"><span className="opacity-[0.7]">You have
													completed</span> <span className="font-semibold text-warning">48%</span> <span className="opacity-[0.7]">of the given
														target, you can also check your status</span>.</span>
												<span className="block font-semibold mt-[0.125rem]"><Link className="text-white text-[0.813rem]"
													to="#"><u>Click
														here</u></Link></span>
											</div>
											<div>
												<div id="crm-main">
													<Profit />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="xxl:col-span-12 xl:col-span-12 col-span-12">
								<div className="box">
									<div className="box-header justify-between">
										<div className="box-title">Profit Earned</div>
										<div className="hs-dropdown ti-dropdown">
											<Link to="#" className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
												aria-expanded="false">
												View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
											</Link>
											<ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
												<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
													to="#">Today</Link></li>
												<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
													to="#">This Week</Link></li>
												<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
													to="#">Last Week</Link></li>
											</ul>
										</div>
									</div>
									<div className="box-body !py-0 !ps-0">
										<div id="crm-profits-earned">
											<Profitearned />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="xxl:col-span-8  xl:col-span-8  col-span-12">
							<div className="grid grid-cols-12 gap-x-6">
								<div className="xxl:col-span-6 xl:col-span-6 col-span-12">
									<div className="box overflow-hidden">
										<div className="box-body">
											<div className="flex items-top justify-between">
												<div>
													<span
														className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-primary">
														<i className="ti ti-users text-[1rem] text-white"></i>
													</span>
												</div>
												<div className="flex-grow ms-4">
													<div className="flex items-center justify-between flex-wrap">
														<div>
															<p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Customers</p>
															<h4 className="font-semibold  text-[1.5rem] !mb-2 ">12,890</h4>
														</div>
														<div id="crm-total-customers">
															<Totalcustomers />
														</div>
													</div>
													<div className="flex items-center justify-between !mt-1">
														<div>
															<Link className="text-primary text-[0.813rem] border border-primary rounded-full p-2" to="#">Refrech<i
																className="ti ti-rotate ms-2 font-semibold inline-block rotate-180"></i></Link>
														</div>
														<div className="text-end">
															<p className="mb-0 text-success text-[0.813rem] font-semibold">+40%</p>
															<p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="xxl:col-span-6 xl:col-span-6 col-span-12">
									<div className="box overflow-hidden">
										<div className="box-body">
											<div className="flex items-top justify-between">
												<div>
													<span
														className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-secondary">
														<i className="ti ti-wallet text-[1rem] text-white"></i>
													</span>
												</div>
												<div className="flex-grow ms-4">
													<div className="flex items-center justify-between flex-wrap">
														<div>
															<p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Revenue</p>
															<h4 className="font-semibold text-[1.5rem] !mb-2 ">156,562 DZD</h4>
														</div>
														<div id="crm-total-revenue">
															<Totalrevenue />
														</div>
													</div>
													<div className="flex items-center justify-between mt-1">
														<div>
															<Link className="text-primary text-[0.813rem] border border-primary rounded-full p-2" to="#">Refrech<i
																className="ti ti-rotate ms-2 font-semibold inline-block rotate-180"></i></Link>
														</div>
														<div className="text-end">
															<p className="mb-0 text-success text-[0.813rem] font-semibold">+25%</p>
															<p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="xxl:col-span-6 xl:col-span-6 col-span-12">
									<div className="box overflow-hidden">
										<div className="box-body">
											<div className="flex items-top justify-between">
												<div>
													<span
														className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-success">
														<i className="ti ti-wave-square text-[1rem] text-white"></i>
													</span>
												</div>
												<div className="flex-grow ms-4">
													<div className="flex items-center justify-between flex-wrap">
														<div>
															<p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Conversion Ratio</p>
															<h4 className="font-semibold text-[1.5rem] !mb-2 ">12.08%</h4>
														</div>
														<div id="crm-conversion-ratio">
															<Conversionratio />
														</div>
													</div>
													<div className="flex items-center justify-between mt-1">
														<div>
															<Link className="text-primary text-[0.813rem] border border-primary rounded-full p-2" to="#">Refrech<i
																className="ti ti-rotate ms-2 font-semibold inline-block rotate-180"></i></Link>
														</div>
														<div className="text-end">
															<p className="mb-0 text-danger text-[0.813rem] font-semibold">-12%</p>
															<p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="xxl:col-span-6 xl:col-span-6 col-span-12">
									<div className="box overflow-hidden">
										<div className="box-body">
											<div className="flex items-top justify-between">
												<div>
													<span
														className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-warning">
														<i className="ti ti-briefcase text-[1rem] text-white"></i>
													</span>
												</div>
												<div className="flex-grow ms-4">
													<div className="flex items-center justify-between flex-wrap">
														<div>
															<p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Deals</p>
															<h4 className="font-semibold text-[1.5rem] !mb-2 ">2,543</h4>
														</div>
														<div id="crm-total-deals">
															<Totaldeals />
														</div>
													</div>
													<div className="flex items-center justify-between mt-1">
														<div>
															<Link className="text-primary text-[0.813rem] border border-primary rounded-full p-2" to="#">Refrech<i
																className="ti ti-rotate ms-2 font-semibold inline-block rotate-180"></i></Link>
														</div>
														<div className="text-end">
															<p className="mb-0 text-success text-[0.813rem] font-semibold">+19%</p>
															<p className="text-[#8c9097] dark:text-white/50  opacity-[0.7] text-[0.6875rem]">this month</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="xxl:col-span-12 xl:col-span-12 col-span-12">
									<div className="box">
										<div className="box-header !gap-0 !m-0 justify-between">
											<div className="box-title">
												Revenue Analytics
											</div>
											<div className="hs-dropdown ti-dropdown">
												<Link to="#" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
													aria-expanded="false">
													View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
												</Link>
												<ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
													<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
														to="#">Today</Link></li>
													<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
														to="#">This Week</Link></li>
													<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
														to="#">Last Week</Link></li>
												</ul>
											</div>
										</div>
										<div className="box-body !py-5">
											<div id="crm-revenue-analytics">
												<Revenueanalytics />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 xl:col-span-12 col-span-12 max-xxl:hidden">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="xxl:col-span-12 xl:col-span-6 col-span-12">
							<div className="box">
								<div className="box-header justify-between">
									<div className="box-title">Recent Activity</div>
									<div className="hs-dropdown ti-dropdown">
										<Link to="#" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50" aria-expanded="false">
											View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
										</Link>
										<ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
											<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Today</Link></li>
											<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">This Week</Link></li>
											<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Last Week</Link></li>
										</ul>
									</div>
								</div>
								<div className="box-body">
									<div>
										<ul className="list-none mb-0 crm-recent-activity">
											<li className="crm-recent-activity-content">
												<div className="flex items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] inline-flex items-center justify-center font-medium leading-[1.25rem] text-[0.65rem] text-primary bg-primary/10 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content text-defaultsize">
														<span className="font-semibold ">The product 'Stylish Leather Wallet' has been shipped.</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">2 hrs</span>
													</div>
												</div>
											</li>
											{/* <li className="crm-recent-activity-content">
                            <div className="flex items-start text-defaultsize">
                              <div className="me-4">
                                <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-secondary bg-secondary/10 rounded-full">
                                  <i className="bi bi-circle-fill text-[0.5rem]"></i>
                                </span>
                              </div>
                              <div className="crm-timeline-content">
                                <span>Your order #12345 has been successfully placed.</span>
                              </div>
                              <div className="flex-grow text-end">
                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">1 hr</span>
                              </div>
                            </div>
                          </li> */}
											<li className="crm-recent-activity-content text-defaultsize">
												<div className="flex items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-success bg-success/10 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content">
														<span>Your order #12345 has been delivered.</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">30 mins</span>
													</div>
												</div>
											</li>
											<li className="crm-recent-activity-content text-defaultsize">
												<div className="flex items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-pink bg-pink/10 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content">
														<span>The admin has verified your account. You can now start selling!</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">Today</span>
													</div>
												</div>
											</li>
											<li className="crm-recent-activity-content text-defaultsize">
												<div className="flex items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-[#232323] dark:text-white bg-[#232323]/10 dark:bg-white/20 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content">
														<span>Your account details have been updated successfully.</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">4 hrs</span>
													</div>
												</div>
											</li>
											<li className="crm-recent-activity-content text-defaultsize">
												<div className="flex items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-warning bg-warning/10 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content">
														<span>Your account has been suspended due to suspicious activity. Please contact support.</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">2 days</span>
													</div>
												</div>
											</li>
											<li className="crm-recent-activity-content text-defaultsize">
												<div className="flex items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-info bg-info/10 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content">
														<span>The product 'Elegant Watch' has been added to your store.</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">3 hrs</span>
													</div>
												</div>
											</li>
											<li className="crm-recent-activity-content text-defaultsize">
												<div className="flex items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-[#232323] dark:text-white bg-[#232323]/10 dark:bg-white/20 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content">
														<span>The product 'Comfortable Sneakers' is out of stock.</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">5 hrs</span>
													</div>
												</div>
											</li>
											<li className="crm-recent-activity-content text-defaultsize">
												<div className="flex
            items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-purple bg-purple/10 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content">
														<span>A new promotional offer of '50% off on all electronics' has been added.</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">6 hrs</span>
													</div>
												</div>
											</li>
											<li className="crm-recent-activity-content text-defaultsize">
												<div className="flex items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-primary bg-primary/10 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content">
														<span>Your product 'Wireless Headphones' has received a new review.</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">8 hrs</span>
													</div>
												</div>
											</li>
											<li className="crm-recent-activity-content text-defaultsize">
												<div className="flex items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-secondary bg-secondary/10 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content">
														<span>A new blog post 'Top 10 Fashion Trends of 2024' has been published.</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">10 hrs</span>
													</div>
												</div>
											</li>
											<li className="crm-recent-activity-content text-defaultsize">
												<div className="flex items-start">
													<div className="me-4">
														<span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-pink bg-pink/10 rounded-full">
															<i className="bi bi-circle-fill text-[0.5rem]"></i>
														</span>
													</div>
													<div className="crm-timeline-content">
														<span>A new feature 'Product Recommendations' has been activated in your account.</span>
													</div>
													<div className="flex-grow text-end">
														<span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">2 days</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Crm;
