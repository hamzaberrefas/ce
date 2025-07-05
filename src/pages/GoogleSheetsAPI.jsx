import Pageheader from "../components/common/pageheader/pageheader"
import googlesheets from "../assets/images/apps/googlesheets.svg";

export default function GoogleSheetsAPI() {
  return (
    <>
      <Pageheader currentpage="Google Sheets API" activepage="APIs" mainpage="Google Sheets API" />
      <div className="grid grid-cols-12 gap-6 mb-[3rem]">
        <div className="xl:col-span-12 col-span-12">
          <div className="box !mb-8">
            <div className="box-body">
              <div className="flex gap-2 items-center mb-2">
                <div>
                  <img className="w-[1.7rem]" src={googlesheets} alt="google-sheets-logo" />
                </div>
                <h5 className="text-[1.25rem] text-defaulttextcolor dark:text-defaulttextcolor/70 font-medium">
                  Google Sheets API
                </h5>
              </div>
              <p className="text-[#8c9097] dark:text-white/50 text-[.875rem]">
                Effortlessly export and synchronize your orders information with Google Sheetss by integrating your store with the Google Sheetss API at the push of a button.
              </p>
            </div>
          </div>
          <div className="box">
            <form>
              <div className="box p-4 w-auto xl:p-0">
                <div className="box-header p-0 m-0">
                  <h6 className="box-title">API configuration</h6>
                </div>
                <div className="box-body">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div>
                      <div className="mb-4">
                        <label htmlFor="form-text" className="form-label !text-[.875rem] text-black">Google App client id</label>
                        <input type="text" className="form-control" placeholder="1426641879087" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="form-text" className="form-label !text-[.875rem] text-black">Google App client secret</label>
                        <input type="text" className="form-control" placeholder="87691487914" />
                      </div>
                       <div className="flex justify-end">
  <a href="https://www.youtube.com/@riwam_service" target="_blank" rel="noopener noreferrer">
    <button className="ti-btn ti-btn-primary" type="button">
      Watch Tuto
    </button>
  </a>
</div>
                    </div>
                    <button className="ti-btn ti-btn-primary" type="button">Connect</button>
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
