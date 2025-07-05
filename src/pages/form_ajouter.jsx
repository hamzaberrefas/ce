import { Fragment, useState, } from 'react';
import { Link } from 'react-router-dom';
import desktoplogo from "../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../assets/images/brand-logos/desktop-dark.png";



const FormAjouter = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
    return (
        <Fragment>
              <div className="my-[2rem] container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
            <div className="grid grid-cols-12">
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
                    <div className="box">
                        <div className="box-body !p-[3rem]">
                            <div className="my-[1.5rem] flex justify-center">
                                                   <Link to={`${import.meta.env.BASE_URL}`} >
                        <img 
                          src={desktoplogo} 
                          alt="logo" 
                          className="desktop-logo" 
                          style={{ width: '180px', height: 'auto' }} // Set width in px
                        />
                        <img 
                          src={desktopdarklogo} 
                          alt="logo" 
                          className="desktop-dark" 
                          style={{ width: '180px', height: 'auto' }} // Set width in px
                        />
                                                  </Link>
                                                </div>
                            <p className="h5 font-semibold mb-2 text-center">Ajoutez un fournisseur ou rejoignez-nous?</p>
                           {/* <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome &amp; Join us by
                                creating a free account !</p>*/}
                            <div className="grid grid-cols-12 gap-y-4">
                                {/*<div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-firstname" className="form-label text-default">First Name</label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-firstname" placeholder="first name"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Last Name</label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-lastname" placeholder="last name"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-password" className="form-label text-default">Password</label>
                                    <div className="input-group">
                                        <input type={(passwordshow1) ? 'text' : "password"}
                                            className="form-control form-control-lg !rounded-e-none"
                                            id="signup-password" placeholder="password"/>
                                        <button onClick={()=>setpasswordshow1(!passwordshow1)} aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                                           
                                            id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 mb-2">
                                    <label htmlFor="signup-confirmpassword" className="form-label text-default">Confirm
                                        Password</label>
                                    <div className="input-group">
                                        <input type={(passwordshow2) ? 'text' : "password"}
                                            className="form-control form-control-lg !rounded-e-none"
                                            id="signup-confirmpassword" placeholder="confirm password"/>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                                           onClick={()=>setpasswordshow2(!passwordshow2)}
                                            id="button-addon21"><i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                                    </div>
                                    <div className="mt-4">
                                        <div className="form-check !flex !ps-0">
                                            <input className="form-check-input me-1" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="ps-2 form-check-label text-[#8c9097] dark:text-white/50 font-normal block" htmlFor="defaultCheck1">
                                                By creating a account you agree to our <Link to="#!"
                                                className="text-success"><u>Terms &amp; Conditions</u></Link> and <Link to="#!"
                                                className="text-success"><u>Privacy Policy</u></Link>
                                            </label>
                                        </div>
                                    </div>
                                </div>*/}
                                <div className="xl:col-span-12 col-span-12 grid mt-2">
                                    <Link to={`${import.meta.env.BASE_URL}fournisseur`} className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">je suis un fournisseur</Link>
                                </div>

                                <div className="xl:col-span-12 col-span-12 grid mt-2">
                                    <Link to={`${import.meta.env.BASE_URL}client`} className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">je veux ajouter un fournisseur </Link>
                                </div>
                            </div>
                            {/*<div className="text-center">
                                <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Already have an account? <Link
                                        to={`${import.meta.env.BASE_URL}signin`} className="text-primary">Sign In</Link></p>
                            </div>*/}
                            
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            </div>
        </div>
    </div>
        </Fragment>
    );
};
export default FormAjouter;

