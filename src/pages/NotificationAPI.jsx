import Pageheader from "../components/common/pageheader/pageheader";
import { Link } from "react-router-dom";
import media87 from "../assets/images/media/media-87.svg";

export default function NotificationAPI() {
  return (
    <>
      <Pageheader currentpage="Notification API" activepage="APIs" mainpage="Notification API" />
      <div className="grid grid-cols-12 gap-6 mb-[3rem]">
        <div className="xl:col-span-12 col-span-12">
          <div className="box">
            <div className="box-header sm:flex block !justify-start">
              <nav aria-label="Tabs" className="md:flex block !justify-start whitespace-nowrap">
                <Link to="#" className="m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 flex-grow  text-[0.75rem] font-medium rounded-md hover:text-primary active" id="telegram-item" data-hs-tab="#telegram" aria-controls="telegram-api">
                  Telegram
                </Link>
                <Link to="#" className="m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary" id="whatsapp-item" data-hs-tab="#whatsapp" aria-controls="whatsapp-api">
                  WhatsApp
                </Link>
              </nav>
            </div>
            <div className="box-body">
              <div className="tab-content">
                <div className="tab-pane show active" id="telegram" aria-labelledby="telegram-api">
                  <div className="mb-8">
                    <div className="flex gap-2 items-center mb-2">
                      <div>
                        <img className="w-[1.7rem]" src="/telegram.svg" alt="telegram-logo" />
                      </div>
                      <h5 className="text-[1.25rem] text-defaulttextcolor dark:text-defaulttextcolor/70 font-medium">
                        Telegram Bot
                      </h5>
                    </div>
                    <p className="text-[#8c9097] dark:text-white/50 text-[.875rem]">
                      Connect to Telegram account to our Telegram Bot and complete the configuration to be able to receive instant notification on your mobile device as soon as there is a new order
                    </p>
                  </div>
                  <form>
                    <div className="box p-4 w-auto xl:p-0">
                      <div className="box-header p-0 m-0 !border-0">
                        <div className="!flex !justify-between items-center gap-2 flex-wrap mb-4 w-full">
                          <h6 className="box-title">RIWAM SERVICE Telegram Bot</h6>
                          <a href="https://t.me/riwamservice_bot" target="_blank" rel="noopener noreferrer">
                          <button className="ti-btn ti-btn-primary" type="button">Go To</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="box p-4 w-auto xl:p-0">
                      <div className="box-header p-0 m-0">
                        <h6 className="box-title">Telegram account configuration</h6>
                      </div>
                      <div className="box-body">
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <div>
                            <label htmlFor="form-text" className="form-label !text-[.875rem] text-black">Your account telegram chat id</label>
                            <input type="text" className="form-control" id="form-text" placeholder="Chat id" />
                            <div className="flex justify-end mt-4">
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
                    <div className="flex justify-end">
                      <button className="ti-btn ti-btn-primary" type="button">Save</button>
                    </div>
                  </form>
                </div>
                <div className="tab-pane hidden" id="whatsapp" aria-labelledby="whatsapp-api">
                  <div>
                    <img src={media87} alt="" className="imig-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
