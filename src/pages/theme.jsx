import Switcher from "../components/switcher";
import { useEffect, useRef, useState } from "react";
import Pageheader from "../components/common/pageheader/pageheader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Select from "react-select";
import { templates, themeFonts } from "./themedata";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const ThemeSettings = () => {

  const colorPickerRef = useRef(null);

  const [swiperItems, setSwiperItems] = useState(4);
  const [headerLogo, setHeaderLogo] = useState([]);
  const [favicon, setFavicon] = useState([]);
  const [footerLogo, setFooterLogo] = useState([]);
  const [themeColor, setThemeColor] = useState("#845adf");
  const [themeTemplate, setThemeTemplate] = useState(0);

  const colorPickerClick = () => colorPickerRef.current.click();
  const colorPickerChange = (e) => setThemeColor(e.target.value);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setSwiperItems(1);
        return;
      }
      if (window.innerWidth <= 992) {
        setSwiperItems(2);
        return;
      }
      setSwiperItems(4);
    }

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Pageheader currentpage="Theme" activepage="Dashboard" mainpage="Theme" />
      <div className="box">
        <div className="box-header">
          <h5 className="box-title">
            Choose Template
          </h5>
        </div>
        <div className="box-body">
          <Swiper effect={'coverflow'}
            grabCursor={true}
            autoplay={{ delay: 1500, disableOnInteraction: false, }}
            slidesPerView={swiperItems}
            loop={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            onSlideChange={(s) => setThemeTemplate(s.realIndex)}
            className="templatesSwiper swiper swiper-overflow">
            {
              templates.map((template, idx) => {
                return <SwiperSlide key={idx}>
                  <div className="p-2 border dark:border-[#313335] dark:bg-[#252729] border-[#e9e9e9] rounded-md bg-[#f7f7f7]">
                    <img className="img-fluid" src={template.image} alt="img" />
                    <h6 className="font-kumbh text-center mt-3 text-[0.85rem] sm:text-[1.2rem]">{template.name}</h6>
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper>
          <div className='mt-[20px] flex grow justify-center items-center'>
            <a href={templates[themeTemplate].link} id="preview-btn" className="ti-btn ti-btn-primary-full" target="_blank">Preview template</a>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box-header">
          <h5 className="box-title">General Settings</h5>
        </div>
        <div className="box-body">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
              <div className="xl:col-span-12 col-span-12">
                <p className="font-semibold mb-2 text-[0.875rem]">Logo For Header:</p>
                <FilePond className="pw-full"
                  files={headerLogo}
                  onupdatefiles={setHeaderLogo}
                  allowMultiple={false}
                  name="theme-header-logo"
                  labelIdle='Drag & Drop your file here or click'
                />
              </div>
              <div className="xl:col-span-12 col-span-12">
                <p className="font-semibold mb-2 text-[0.875rem]">Favicon</p>
                <FilePond className="pw-full"
                  files={favicon}
                  onupdatefiles={setFavicon}
                  allowMultiple={false}
                  name="theme-favicon"
                  labelIdle='Drag & Drop your file here or click'
                />
              </div>
              <div className="xl:col-span-12 col-span-12">
                <p className="font-semibold mb-2 text-[0.875rem]">Choose your font</p>
                <Select
                  name="theme-font"
                  className="w-full !rounded-md"
                  options={themeFonts}
                  isSearchable
                  id="theme-font-select"
                  menuPlacement='auto'
                  classNamePrefix="Select2"
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
              <div className="xl:col-span-12 col-span-12">
                <p className="font-semibold mb-2 text-[0.875rem]">Logo For Footer:</p>
                <FilePond className="pw-full"
                  files={footerLogo}
                  onupdatefiles={setFooterLogo}
                  allowMultiple={false}
                  name="theme-footer-logo"
                  labelIdle='Drag & Drop your file here or click'
                />
              </div>
              <div className="xl:col-span-12 col-span-12">
                <p className="font-semibold mb-2 text-[0.875rem]">Theme Color</p>
                <button className="ti-btn !p-0 h-[25px] w-full" style={{ backgroundColor: themeColor }} onClick={colorPickerClick}></button>
                <input type="color" value={themeColor} onChange={colorPickerChange} ref={colorPickerRef} className="hidden" />
              </div>
              <div className="xl:col-span-12 col-span-12 flex justify-between flex-wrap gap-x-2">
                <p className="font-semibold mb-2 text-[0.875rem]">Activate Scroll To Top Option</p>
                <div className="custom-toggle-switch">
                  <input id="two-step" name="toggleswitchsize" type="checkbox" defaultChecked />
                  <label htmlFor="two-step" className="label-primary mb-1"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemeSettings;
