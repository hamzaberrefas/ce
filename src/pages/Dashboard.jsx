import { Route, Routes } from "react-router-dom";
import Header from "../components/common/header/header";
import Sidebar from "../components/common/sidebar/sidebar";
import Crm from "./crm"
import Domain from './domain'
import Addproducts from './addproducts'
import Productlist from './productlist'
import Orders from './orders'
import Invoicelist from './invoicelist'
import Filemanager from './filemanager'
import ThemeSettings from './theme'
import Comingsoon from './comingsoon'
import Editproducts from './editproducts'
import Pricing from './pricing'
import Mailsettings from './mailsettings'
import Contactus from './contactus'
import { ThemeChanger } from "../redux/action";
import { connect } from "react-redux";
import Footer from "../components/common/footer/footer";
import NotificationAPI from "./NotificationAPI";
import DeliveryAPI from "./DeliveryAPI";
import GoogleSheetsAPI from "./GoogleSheetsAPI";
import EmailBox from "./EmailBox";
import RiwamApp from "./RiwamApp";

function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='content main-index'>
        <div className='main-content'
        // onClick={Bodyclickk}
        >
          <Routes>
            <Route path={`${import.meta.env.BASE_URL}dashboard/analytics`} element={<Crm />} />
            <Route path={`${import.meta.env.BASE_URL}comingsoon`} element={<Comingsoon />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/domain`} element={<Domain />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/theme`} element={<ThemeSettings />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/products/new`} element={<Addproducts />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/products/list`} element={<Productlist />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/products/edit`} element={<Editproducts />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/products/orders`} element={<Orders />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/products/track`} element={<Invoicelist />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/products/files`} element={<Filemanager />} />
            <Route path={`${import.meta.env.BASE_URL}profile/settings`} element={<Mailsettings />} />
            <Route path={`${import.meta.env.BASE_URL}profile/plan`} element={<Pricing />} />
            <Route path={`${import.meta.env.BASE_URL}profile/contactus`} element={<Contactus />} />
            <Route path={`${import.meta.env.BASE_URL}login`} element={<Comingsoon />} />
            <Route path={`${import.meta.env.BASE_URL}api/notification`} element={<NotificationAPI />} />
            <Route path={`${import.meta.env.BASE_URL}api/delivery`} element={<DeliveryAPI />} />
            <Route path={`${import.meta.env.BASE_URL}api/google-sheets`} element={<GoogleSheetsAPI />} />
            <Route path={`${import.meta.env.BASE_URL}extra/email`} element={<EmailBox />} />
            <Route path={`${import.meta.env.BASE_URL}extra/riwam-app`} element={<RiwamApp />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Dashboard);
