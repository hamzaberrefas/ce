import { Fragment } from "react";
import { domainsList, records, status, types } from "./domaindata";
import Select from 'react-select';
import { Link } from "react-router-dom";
import Dropdown from "../components/ui/dropdown";
import Pageheader from "../components/common/pageheader/pageheader";

const Domain = () => {

  return (
    <Fragment>
      <Pageheader currentpage="Domain" activepage="Dashboard" mainpage="Domain" />
      <div className="flex flex-col space-y-6 items-stretch w-full my-[1.5rem]">
        {/* Domain Settings */}
        {/*<span className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 ">Domain Settings</span>*/}
        {/* <div className="flex flex-col space-y-4 w-2/3 justify-center">
                    <div className="flex flex-row grow justify-center"> */}
        <div className="box p-4 w-auto xl:p-0">
          <div className="box-header p-0 m-0">
            <div className=" flex flex-col justify-start">
              <h5 className="box-title">Domain Settings</h5>
            </div>
          </div>
          <div className="box-body">
            <div className="table-responsive pt-4">
              <table className="table whitespace-nowrap min-w-full">
                <thead>
                  <tr className="border-b border-defaultborder">
                    <th scope="col" className="text-start">Domain</th>
                    <th scope="col" className="text-start">Status</th>
                    <th scope="col" className="text-start">Type</th>
                    <th scope="col" className="text-start">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {domainsList.map((domain, index) => (
                    <tr key={`domain-row-${index}`} className="border-b border-defaultborder">
                      <td>{domain.name}</td>
                      <td className="w-0">
                        <span className={`badge w-full min-w-[100px] !rounded-full bg-${status[domain.status].color} justify-center !py-2`}>{status[domain.status].content}</span>
                      </td>
                      <td><Dropdown options={types} initialOption={types[domain.type]} /></td>
                      <td>
                        <Link to="#" aria-label="anchor"
                          className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[2.2rem] !w-2.2rem] text-[1rem] text-danger hover:bg-danger hover:text-white hover:border-danger !border !border-danger !rounded-full"><i
																className="ri-delete-bin-line"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*
            <div className="grid grid-cols-8 gap-2 py-2 items-center px-2">
              <span key={`domain_list_name_header`} className="font-bold col-span-3">Domain</span>
              <span key={`domain_list_status_header`} className="font-bold">Status</span>
              <span key={`domain_list_type_header`} className="font-bold col-span-2">Type</span>
              <span key={`domain_list_delete_header`} className="font-bold col-span-1">Action</span>
              {domainsList.map((domain, index) => (<>
                <div className={`col-span-8 border-b dark:border-defaultborder/10 border-defaultborder`} />
                <span key={`domain_list_name_${index}`} className="col-span-3">{domain.name}</span>
                <span key={`domain_list_status_${index}`} className={`badge !rounded-full bg-${status[domain.status].color} justify-center !py-2`}>{status[domain.status].content}</span>
                <div className="col-span-2">
                  <Dropdown options={types} initialOption={types[domain.type]} />
                </div>
                <Link to="#" aria-label="anchor" key={`domain_list_delete_${index}`}
                  className="inline-flex flex-shrink-0 justify-center items-center gap-2 !rounded-full font-medium text-red dark:hover:bg-black/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                  <i className="ti ti-trash-x text-[1.5rem]" />
                </Link>
              </>
              ))}
            </div>
      */}
          </div>
        </div>
        {/* </div>
                </div> */}
        {/* Subdomain */}
        <div className="flex flex-col space-y-4 w-full">
          <div className="box p-4 w-auto xl:p-0">
            <div className="box-header p-0 m-0">
              <div className=" flex flex-col justify-start">
                <h5 className="box-title">Get a Free RIWAM Sub-domain</h5>
                <span className="text-sm text-gray-500">Connect up to 3 personalized sub-domains instantly for free! </span>
              </div>
            </div>
            <div className="box-body p-0 m-0">
              {/* <div> */}
              <label htmlFor="hs-inline-leading-pricing-select-label" className="ti-form-label">Sub-Domain</label>
              <div className="relative">
                <input type="text" id="hs-inline-leading-pricing-select-label" className="ti-form-input ps-9 pe-20 focus:z-10" placeholder="MyStore" />
                <div className="absolute inset-y-0 end-0 flex items-center text-gray-500 dark:text-[#8c9097] dark:text-white/50 pe-px">
                  <select id="hs-inline-leading-select-currency" name="hs-inline-leading-select-currency" className="block w-full border-x-0 border-defaultborder dark:border-defaultborder/10 focus:ring-primary focus:border-primary dark:focus:border-defaultborder/10 dark:bg-bodybg ps-2 pe-[2.25rem]">
                    <option>riwam.com</option>
                    <option>r.dz</option>
                  </select>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* Custom Domain */}
        <div className="flex flex-col space-y-4 w-full">
          <div className="box p-4 w-auto xl:p-0">
            <div className="box-header p-0 m-0">
              <div className=" flex flex-col justify-start">
                <h5 className="box-title">Connect a domain you own</h5>
                <span className="text-sm text-gray-500">Connect a domain purchased through a web hosting service </span>
              </div>
            </div>
            <div className="box-body p-0 m-0">
              <div className="flex rounded-sm">
                <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" className="ti-form-input rounded-none rounded-s-sm focus:z-10" placeholder="www.domain.xyz" />
                <button type="button" className="py-2 px-3 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-e-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                  <i className="ti ti-plus text-[1rem]" /> Add
                </button>
              </div>
              <span className="text-sm text-gray-500">Your DNS record must be setup with the following values.</span>
              <div className="table-responsive pt-4">
                <table className="table whitespace-nowrap min-w-full">
                  <thead>
                    <tr className="border-b border-defaultborder">
                      <th scope="col" className="text-start">Name</th>
                      <th scope="col" className="text-start">Created On</th>
                      <th scope="col" className="text-start">Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      records.map((element, index) => (
                        <tr key={`records-row-${index}`} className="border-b border-defaultborder">
                          <th scope="row" className="text-start">{element.name}</th>
                          <td>{element.type}</td>
                          <td>{element.value}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div >
    </Fragment >
  );
}

export default Domain;
