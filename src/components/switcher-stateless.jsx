import { Fragment } from 'react';
import { connect } from "react-redux";
import { ThemeChanger } from "../redux/action";
import { Link } from 'react-router-dom';



const Switcher = () => {

  return (
    <Fragment>
      <div className='box p-4 m-4'>
        <div className="box-body">
          <div className="ti-offcanvas-body !p-0 !border-b dark:border-white/10 z-10 relative !h-auto">
            <div className="flex rtl:space-x-reverse" aria-label="Tabs" role="tablist">
              <button type="button"
                className="hs-tab-active:bg-success/20 w-full !py-2 !px-4 hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-success dark:hs-tab-active:bg-success/20 dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-success -mb-px bg-white font-semibold text-center  text-defaulttextcolor dark:text-defaulttextcolor/70 rounded-none hover:text-gray-700 dark:bg-bodybg dark:border-white/10  active"
                id="switcher-item-1" data-hs-tab="#switcher-1" aria-controls="switcher-1" role="tab">
                Theme Style
              </button>
              <button type="button"
                className="hs-tab-active:bg-success/20 w-full !py-2 !px-4 hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-success dark:hs-tab-active:bg-success/20 dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-success -mb-px  bg-white font-semibold text-center  text-defaulttextcolor dark:text-defaulttextcolor/70 rounded-none hover:text-gray-700 dark:bg-bodybg dark:border-white/10  dark:hover:text-gray-300"
                id="switcher-item-2" data-hs-tab="#switcher-2" aria-controls="switcher-2" role="tab">
                Theme Colors
              </button>
            </div>
          </div>
          <div className="ti-offcanvas-body" id="switcher-body">
            <div id="switcher-1" role="tabpanel" aria-labelledby="switcher-item-1" className="">
              <div className="">
                <p className="switcher-style-head">Theme Color Mode:</p>
                <div className="grid grid-cols-3 switcher-style">
                  <div className="flex items-center">
                    <input type="radio" name="theme-style" className="ti-form-radio" id="switcher-light-theme"
                      onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-light-theme"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Light</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="theme-style" className="ti-form-radio" id="switcher-dark-theme" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-dark-theme"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Dark</label>
                  </div>
                </div>
              </div>
              <div>
                <p className="switcher-style-head">Directions:</p>
                <div className="grid grid-cols-3  switcher-style">
                  <div className="flex items-center">
                    <input type="radio" name="direction" className="ti-form-radio" id="switcher-ltr" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-ltr" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">LTR</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="direction" className="ti-form-radio" id="switcher-rtl" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-rtl" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">RTL</label>
                  </div>
                </div>
              </div>
              <div>
                <p className="switcher-style-head">Navigation Styles:</p>
                <div className="grid grid-cols-3  switcher-style">
                  <div className="flex items-center">
                    <input type="radio" name="navigation-style" className="ti-form-radio" id="switcher-vertical" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-vertical"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Vertical</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="navigation-style" className="ti-form-radio" id="switcher-horizontal" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-horizontal"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Horizontal</label>
                  </div>
                </div>
              </div>
              <div>
                <p className="switcher-style-head">Navigation Menu Style:</p>
                <div className="grid grid-cols-2 gap-2 switcher-style">
                  <div className="flex">
                    <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio" id="switcher-menu-click"
                      onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-menu-click" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Menu
                      Click</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio" id="switcher-menu-hover" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-menu-hover" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Menu
                      Hover</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio" id="switcher-icon-click" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-icon-click" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Icon
                      Click</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio" id="switcher-icon-hover"
                      onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-icon-hover" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Icon
                      Hover</label>
                  </div>
                </div>
                <div className="px-4 text-secondary text-xs"><b className="me-2 inline-flex">Note:</b>Works same for both Vertical and
                  Horizontal
                </div>
              </div>
              <div className=" sidemenu-layout-styles">
                <p className="switcher-style-head">Sidemenu Layout Syles:</p>
                <div className="grid grid-cols-2 gap-2 switcher-style">
                  <div className="flex">
                    <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio" id="switcher-default-menu"
                      defaultChecked
                      onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-default-menu"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Default
                      Menu</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio" id="switcher-closed-menu" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-closed-menu" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">
                      Closed
                      Menu</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio" id="switcher-icontext-menu" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-icontext-menu" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Icon
                      Text</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio" id="switcher-icon-overlay"
                      onClick={() => { }} />
                    <label htmlFor="switcher-icon-overlay" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Icon
                      Overlay</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio" id="switcher-detached" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-detached"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Detached</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio" id="switcher-double-menu" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-double-menu" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Double
                      Menu</label>
                  </div>
                </div>
                <div className="px-4 text-secondary text-xs"><b className="me-2 inline-flex">Note:</b>Navigation menu styles won't work
                  here.</div>
              </div>
              <div>
                <p className="switcher-style-head">Page Styles:</p>
                <div className="grid grid-cols-3  switcher-style">
                  <div className="flex">
                    <input type="radio" name="data-page-styles" className="ti-form-radio" id="switcher-regular" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-regular"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Regular</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="data-page-styles" className="ti-form-radio" id="switcher-classic" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-classic"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Classic</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="data-page-styles" className="ti-form-radio" id="switcher-modern" onChange={_e => { }} onClick={() => { }} />
                    <label htmlFor="switcher-modern"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold"> Modern</label>
                  </div>
                </div>
              </div>
              <div>
                <p className="switcher-style-head">Layout Width Styles:</p>
                <div className="grid grid-cols-3 switcher-style">
                  <div className="flex">
                    <input type="radio" name="layout-width" className="ti-form-radio" id="switcher-full-width" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-full-width"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">FullWidth</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="layout-width" className="ti-form-radio" id="switcher-boxed" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-boxed" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Boxed</label>
                  </div>
                </div>
              </div>
              <div>
                <p className="switcher-style-head">Menu Positions:</p>
                <div className="grid grid-cols-3  switcher-style">
                  <div className="flex">
                    <input type="radio" name="data-menu-positions" className="ti-form-radio" id="switcher-menu-fixed"
                      onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-menu-fixed"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Fixed</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="data-menu-positions" className="ti-form-radio" id="switcher-menu-scroll" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-menu-scroll"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Scrollable </label>
                  </div>
                </div>
              </div>
              <div>
                <p className="switcher-style-head">Header Positions:</p>
                <div className="grid grid-cols-3 switcher-style">
                  <div className="flex">
                    <input type="radio" name="data-header-positions" className="ti-form-radio" id="switcher-header-fixed" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-header-fixed" className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">
                      Fixed</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="data-header-positions" className="ti-form-radio" id="switcher-header-scroll" onChange={_e => { }}
                      onClick={() => { }} />
                    <label htmlFor="switcher-header-scroll"
                      className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Scrollable
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div id="switcher-2" className="hidden" role="tabpanel" aria-labelledby="switcher-item-2">
              <div className="theme-colors">
                <p className="switcher-style-head">Menu Colors:</p>
                <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                  <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                    <input className="hs-tooltip-toggle ti-form-radio color-input color-white" type="radio" name="menu-colors"
                      onChange={_e => { }}
                      id="switcher-menu-light" onClick={() => { }} />
                    <span
                      className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                      role="tooltip">
                      Light Menu
                    </span>
                  </div>
                  <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                    <input className="hs-tooltip-toggle ti-form-radio color-input color-dark" type="radio" name="menu-colors"
                      onChange={_e => { }}
                      id="switcher-menu-dark" onClick={() => { }} />
                    <span
                      className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                      role="tooltip">
                      Dark Menu
                    </span>
                  </div>
                  <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                    <input className="hs-tooltip-toggle ti-form-radio color-input color-primary" type="radio" name="menu-colors"
                      onChange={_e => { }}
                      id="switcher-menu-primary" onClick={() => { }} />
                    <span
                      className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                      role="tooltip">
                      Color Menu
                    </span>
                  </div>
                  <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                    <input className="hs-tooltip-toggle ti-form-radio color-input color-gradient" type="radio" name="menu-colors"
                      onChange={_e => { }}
                      id="switcher-menu-gradient" onClick={() => { }} />
                    <span
                      className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                      role="tooltip">
                      Gradient Menu
                    </span>
                  </div>
                  <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                    <input className="hs-tooltip-toggle ti-form-radio color-input color-transparent" type="radio" name="menu-colors"
                      onChange={_e => { }}
                      id="switcher-menu-transparent" onClick={() => { }} />
                    <span
                      className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                      role="tooltip">
                      Transparent Menu
                    </span>
                  </div>
                </div>
                <div className="px-4 text-[#8c9097] dark:text-white/50 text-[.6875rem]"><b className="me-2 inline-flex">Note:</b>If you want to change color Menu
                  dynamically
                  change from below Theme Primary color picker.</div>
              </div>
              <div className="theme-colors">
                <p className="switcher-style-head">Header Colors:</p>
                <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                  <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                    <input className="hs-tooltip-toggle ti-form-radio color-input color-white !border" type="radio" name="header-colors"
                      onChange={_e => { }}
                      id="switcher-header-light" onClick={() => { }} />
                    <span
                      className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                      role="tooltip">
                      Light Header
                    </span>
                  </div>
                  <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                    <input className="hs-tooltip-toggle ti-form-radio color-input color-dark" type="radio" name="header-colors"
                      onChange={_e => { }}
                      id="switcher-header-dark" onClick={() => { }} />
                    <span
                      className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                      role="tooltip">
                      Dark Header
                    </span>
                  </div>
                  <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                    <input className="hs-tooltip-toggle ti-form-radio color-input color-primary" type="radio" name="header-colors"
                      onChange={_e => { }}
                      id="switcher-header-primary" onClick={() => { }} />
                    <span
                      className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                      role="tooltip">
                      Color Header
                    </span>
                  </div>
                  <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                    <input className="hs-tooltip-toggle ti-form-radio color-input color-gradient" type="radio" name="header-colors"
                      onChange={_e => { }}
                      id="switcher-header-gradient" onClick={() => { }} />
                    <span
                      className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                      role="tooltip">
                      Gradient Header
                    </span>
                  </div>
                  <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                    <input className="hs-tooltip-toggle ti-form-radio color-input color-transparent" type="radio"
                      onChange={_e => { }}
                      name="header-colors" id="switcher-header-transparent" onClick={() => { }} />
                    <span
                      className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                      role="tooltip">
                      Transparent Header
                    </span>
                  </div>
                </div>
                <div className="px-4 text-[#8c9097] dark:text-white/50 text-[.6875rem]"><b className="me-2 inline-flex">Note:</b>If you want to change color
                  Header dynamically
                  change from below Theme Primary color picker.</div>
              </div>
              <div className="theme-colors">
                <p className="switcher-style-head">Theme Primary:</p>
                <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-primary-1" type="radio" name="theme-primary"
                      onChange={(_e) => { }}
                      id="switcher-primary" onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-primary-2" type="radio" name="theme-primary"
                      onChange={(_e) => { }}
                      id="switcher-primary1" onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-primary-3" type="radio" name="theme-primary"
                      onChange={(_e) => { }}
                      id="switcher-primary2" onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-primary-4" type="radio" name="theme-primary"
                      onChange={(_e) => { }}
                      id="switcher-primary3" onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-primary-5" type="radio" name="theme-primary"
                      onChange={(_e) => { }}
                      id="switcher-primary4" onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select ps-0 mt-1 color-primary-light">
                    <div className='theme-container-primary'>
                      <button className="">nano</button>
                    </div>
                    <div className='pickr-container-primary'>
                      <div className='pickr'>
                        <button className='pcr-button' onClick={(ele) => {
                          if (ele.target.querySelector("input")) {
                            ele.target.querySelector("input").click();
                          }
                        }}>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-colors">
                <p className="switcher-style-head">Theme Background:</p>
                <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-bg-1" type="radio" name="theme-background"
                      onChange={(_e) => { }}
                      id="switcher-background" onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-bg-2" type="radio" name="theme-background"
                      onChange={(_e) => { }}
                      id="switcher-background1" onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-bg-3" type="radio" name="theme-background"
                      onChange={(_e) => { }}
                      id="switcher-background2" onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-bg-4" type="radio" name="theme-background"
                      onChange={(_e) => { }}
                      id="switcher-background3" onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-bg-5" type="radio" name="theme-background"
                      onChange={(_e) => { }}
                      id="switcher-background4" onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select ps-0 mt-1 color-bg-transparent">
                    <div className='theme-container-background' >
                      <button className="">nano</button>
                    </div>
                    <div className='pickr-container-background'>
                      <div className='pickr'>
                        <button className='pcr-button' onClick={(ele) => {
                          if (ele.target.querySelector("input")) {
                            ele.target.querySelector("input").click();
                          }
                        }}>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-image theme-colors">
                <p className="switcher-style-head">Menu With Background Image:</p>
                <div className="flex switcher-style space-x-3 rtl:space-x-reverse flex-wrap gap-3">
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio bgimage-input bg-img1" type="radio" name="theme-images" id="switcher-bg-img" onChange={(_e) => { }} onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio bgimage-input bg-img2" type="radio" name="theme-images" id="switcher-bg-img1" onChange={(_e) => { }} onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio bgimage-input bg-img3" type="radio" name="theme-images" id="switcher-bg-img2" onChange={(_e) => { }} onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio bgimage-input bg-img4" type="radio" name="theme-images" id="switcher-bg-img3" onChange={(_e) => { }} onClick={() => { }} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio bgimage-input bg-img5" type="radio" name="theme-images" id="switcher-bg-img4" onChange={(_e) => { }} onClick={() => { }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ti-offcanvas-footer sm:flex justify-between">
            <Link to="#" id="reset-all" className="w-full ti-btn ti-btn-danger-full m-1" onClick={() => { }}>Reset</Link>  </div>
        </div>
      </div>
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Switcher);

