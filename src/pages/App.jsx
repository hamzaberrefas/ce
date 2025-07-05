
import { Fragment, useEffect, useState } from 'react';
import Loader from '../components/common/loader/loader';
import Switcher from '../components/common/switcher/switcher';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Tabtotop from '../components/common/tabtotop/tabtotop';
import Landing from "./landing"
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Signup from "./signup"
import FormVerifier from "./verification"
import FormFournisseur from "./form_ajouter_fournisseur"; // 
import FormAjouter from "./form_ajouter";
import Soumettre from "./soumettre";
import Soumettre1 from "./soumettre1";
import Soumettre2 from "./soumettre2";
import FormClient from "./form_ajouter_client";
import Login from "./login"


function App() {
	const [MyclassName, setMyClass] = useState("");

	useEffect(() => {
		import("preline");

	}, []);
	return (
		<Fragment>
			<Loader />
			<Provider store={store}>
				<HelmetProvider>
					<Helmet
						htmlAttributes={{
							lang: "en",
							dir: "ltr",
							"class": "light",
							"data-menu-styles": "light",
							"data-nav-layout": "vertical",
							"data-header-styles": "light",
							"data-vertical-style": "overlay",
							"loader": "disable",
							"data-icon-text": MyclassName,
						}}
					/>
					<Switcher />
					<Routes>
						<Route path={`${import.meta.env.BASE_URL}`} element={<Landing />} />
						{/*<Route path={`${import.meta.env.BASE_URL}/signup`} element={<Signup />} />
						<Route path={`${import.meta.env.BASE_URL}/signin`} element={<Login />} />*/}
						<Route path="/ajouter" element={<FormAjouter />} /> {/* 👈 New Route */}
						<Route path="/soumettre" element={<Soumettre />} /> {/* 👈 New Route */}
						<Route path="/soumettre1" element={<Soumettre1 />} /> {/* 👈 New Route */}
						<Route path="/soumettre2" element={<Soumettre2 />} /> {/* 👈 New Route */}
						<Route path="/fournisseur" element={<FormFournisseur />} /> {/* 👈 New Route */}
						<Route path="/client" element={<FormClient />} /> {/* 👈 New Route */}
						<Route path="/verification" element={<FormVerifier />} /> {/* 👈 New Route */}
						{/*<Route path={`${import.meta.env.BASE_URL}*`} element={<Dashboard />} /> 👈 New Route */}
					</Routes>
					<Tabtotop />
				</HelmetProvider>
			</Provider>
		</Fragment >
	);
}

export default App;
