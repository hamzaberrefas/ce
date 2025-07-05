import phone from "../assets/images/apps/riwam-app.png";
import googleDrive from "../assets/images/apps/google-drive.png";
import { Helmet, HelmetData, HelmetProvider } from "react-helmet-async";

export default function RIWAMApp() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <body class="RIWAM-app-page"></body>
        </Helmet>
        <div className="box !m-0 !border-none !rounded-none">
          <div className="box-body">
            <h3 className="md:hidden font-bold text-center text-primary text-[1.2rem] mb-4">Track Store &amp; Orders Activities</h3>
            <div className="flex max-md:flex-col max-md:items-center gap-[4rem] max-w-[850px] m-auto">

              <div className="max-w-[195px] flex flex-col items-center gap-4">
                <img src={phone} className="img-fluid" />
                <a href="https://drive.google.com/drive/folders/1PuHB7XrZQWpidK3Mm120S4zq8revOHkQ?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="ti-btn ti-btn-primary-full !rounded-md">
                  <img src={googleDrive} className="w-[30px]" alt="Google Drive logo" />
                  <span className="text-[0.8rem]">Download from<br />Google Drive</span>
                </button>
                </a>
              </div>

              <div>
                <h3 className="hidden md:block font-bold text-primary mb-4">Track Store &amp; Orders Activities</h3>
                <h1 className="font-bold max-md:text-[1.4rem]">Track Your Online Store Activities</h1>
                <p className="my-[3rem]">
                  Schedule and manage your store operations when your audience is most active.<br />
                  RIWAM helps you track visits, sales and performance&mdash;while making order confirmationsmooth and professional.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <div className="min-w-[25px] min-h-[25px] sm:min-w-[50px] sm:min-h-[50px] flex items-center justify-center border border-primary rounded-[400px]">
                      <h3 className="max-sm:text-[1.1rem]">1</h3>
                    </div>
                    <div>
                      <h6 className="font-bold">Smart Order Confirmation</h6>
                      <p>Easily confirm orders through RIWAM's integrated system or let our call center team handle it for you.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="min-w-[25px] min-h-[25px] sm:min-w-[50px] sm:min-h-[50px] flex items-center justify-center border border-primary rounded-[400px]">
                      <h3 className="max-sm:text-[1.1rem]">2</h3>
                    </div>
                    <div>
                      <h6 className="font-bold">Real-Time Store Insights</h6>
                      <p>Monitor your online store's performance, visitor, traffic, and sales anytime, anywhere.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
}
