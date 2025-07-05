import Select from "react-select";
import Pageheader from "../components/common/pageheader/pageheader"

const deliveryComanies = [
  { value: "1", label: "Delivery company (1)" },
  { value: "2", label: "Delivery company (2)" },
  { value: "3", label: "Delivery company (3)" },
  { value: "4", label: "Delivery company (4)" },
];

export default function NotificationAPI() {
  return (
    <>
      <Pageheader currentpage="DeliveryAPI" activepage="APIs" mainpage="Delivery API" />
      <div className="grid grid-cols-12 gap-6 mb-[3rem]">
        <div className="xl:col-span-12 col-span-12">
          <div className="box !mb-8">
            <div className="box-body">
              <h5 className="text-[1.25rem] text-defaulttextcolor dark:text-defaulttextcolor/70 font-medium mb-2">
                Delivery API
              </h5>
              <p className="text-[#8c9097] dark:text-white/50 text-[.875rem]">
                Select your delivery company and complete the API configuration to benifit from the advantage of generating delivery slips and even send your confirmed orders from our platform
              </p>
            </div>
          </div>
          <div className="box">
            <form>
              <div className="box p-4 w-auto xl:p-0">
                <div className="box-header p-0 m-0">
                  <h6 className="box-title">Delivery Companies</h6>
                </div>
                <div className="box-body">
                  <div className="!flex !justify-between items-center gap-2 flex-wrap mb-4 w-full">
                    <div className="w-full max-w-[500px]">
                      <Select
                        name="delivery-company"
                        className="w-full !rounded-md"
                        options={deliveryComanies}
                        isSearchable
                        id="delivery-company-select"
                        menuPlacement='auto'
                        classNamePrefix="Select2"
                        placeholder="Select the delivery company"
                      />
                    </div>
                    <button className="ti-btn ti-btn-primary" type="button">Confirm</button>
                  </div>
                </div>
              </div>
            </form>
            <form>
              <div className="box p-4 w-auto xl:p-0">
                <div className="box-header p-0 m-0">
                  <h6 className="box-title">API configuration</h6>
                </div>
                <div className="box-body">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div className="w-full max-w-[500px]">
                      <div className="mb-4">
                        <label htmlFor="form-text" className="form-label !text-[.875rem] text-black">Delivery company (x) API</label>
                        <input type="text" className="form-control" placeholder="API id" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="form-text" className="form-label !text-[.875rem] text-black">Delivery company (x) username</label>
                        <input type="text" className="form-control" placeholder="Username" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="form-text" className="form-label !text-[.875rem] text-black">Delivery company (x) password</label>
                        <input type="text" className="form-control" placeholder="Paswword" />
                      </div>
                      <div className="flex justify-end">
                        <a href="https://www.youtube.com/@riwam_service" target="_blank" rel="noopener noreferrer">
                        <button className="ti-btn ti-btn-primary" type="button">Watch Tuto</button>
                        </a>
                      </div>
                    </div>
                    <button className="ti-btn ti-btn-primary" type="button">Verify</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
