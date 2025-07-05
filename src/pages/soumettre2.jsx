import { Fragment, useState, } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import desktoplogo from "../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../assets/images/brand-logos/desktop-dark.png";
import { orderVolumes, businessesType, softwareTypes, usersNumber, softwareLanguages } from "./landingdata.js";



const Soumettre2 = () => {
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
                                    <p className="h5 font-semibold mb-2 text-center">Demande reçue pour vérification fournisseur. </p>
                                    <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Vos données seront traitées en toute confidentialité.
                                        Vous recevrez une réponse sous 48h ouvrées maximum.</p>
                                    <div className="grid grid-cols-12 gap-y-4">
                                        {/*<div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-firstname" className="form-label text-default">Votre Nom et prénom </label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-firstname" placeholder="Hamza Berrefas"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Nom de l'entreprise ou bien de fournisseur</label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-lastname" placeholder="RIWAM Service"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Numéro de Registre de Commerce (RC) </label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-lastname" placeholder="12 B 10054460 - 16/00"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Catégorie  </label>
                                    <Select
                                                    className="w-full !rounded-md"
                                                    options={softwareTypes}
                                                    isSearchable
                                                    menuPlacement="auto"
                                                    classNamePrefix="Select2"
                                                    placeholder="Sélectionner"
                                                    styles={{
                                                        singleValue: (provided) => ({
                                                            ...provided,
                                                            textAlign: 'left',
                                                        }),
                                                        placeholder: (provided) => ({
                                                            ...provided,
                                                            textAlign: 'left',
                                                        }),
                                                        input: (provided) => ({
                                                            ...provided,
                                                            textAlign: 'left',
                                                        }),
                                                    }}
                                                />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Wilaya de localisation  </label>
                                    <Select
                                                    className="w-full !rounded-md"
                                                    options={usersNumber}
                                                    isSearchable
                                                    menuPlacement="auto"
                                                    classNamePrefix="Select2"
                                                    placeholder="Sélectionner"
                                                    styles={{
                                                        singleValue: (provided) => ({
                                                            ...provided,
                                                            textAlign: 'left',
                                                        }),
                                                        placeholder: (provided) => ({
                                                            ...provided,
                                                            textAlign: 'left',
                                                        }),
                                                        input: (provided) => ({
                                                            ...provided,
                                                            textAlign: 'left',
                                                        }),
                                                    }}
                                                />
                                </div> 
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Numéro de téléphone  </label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-lastname" placeholder="0668540070"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Numéro de Whatsapp  </label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-lastname" placeholder="Optionnel"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default"> Page Facebook (Lien) </label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-lastname" placeholder="Optionnel"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Adresse Google Map (Lien)  </label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-lastname" placeholder="Optionnel"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Site web (Lien)</label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-lastname" placeholder="Optionnel"/>
                                </div>
                                
                                <div className="xl:col-span-12 col-span-12 mb-2">
                                    
                                    <div className="mt-4">
                                        <div className="form-check !flex !ps-0">
                                            <input className="form-check-input me-1" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="ps-2 form-check-label text-[#8c9097] dark:text-white/50 font-normal block" htmlFor="defaultCheck1">
                                                En soumettant ce formulaire, vous acceptez nos <Link to="#!"
                                                className="text-success"><u> Conditions générales</u></Link> et <Link to="#!"
                                                className="text-success"><u>Notre politique de confidentialité.</u></Link>  
                                            </label>
                                        </div>
                                    </div>
                                </div>*/}
                                        <div className="xl:col-span-12 col-span-12 grid mt-2">
                                            <Link to={`${import.meta.env.BASE_URL}`} className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">Accueil </Link>
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
export default Soumettre2;

