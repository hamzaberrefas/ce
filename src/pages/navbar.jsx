import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from '../redux/store';
import { ThemeChanger } from '../redux/action';
import { connect } from 'react-redux';

const Navbar1 = ({ local_varaiable, ThemeChanger }) => {
	///
	const onScroll = () => {
		const sections = document.querySelectorAll('.side-menu__item');
		const scrollPos =
			window.scrollY ||
			document.documentElement.scrollTop ||
			(document.querySelector('body')?.scrollTop || 0);

		sections.forEach((elem) => {
			const value = elem.getAttribute('href') ?? '';
			const refElement = document.querySelector(value); // Cast to HTMLElement
			if (refElement) {
				const scrollTopMinus = scrollPos + 73;
				if (
					refElement.offsetTop <= scrollTopMinus &&
					refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
				) {
					elem.classList.add('active');
				} else {
					elem.classList.remove('active');
				}
			}
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		const target = e.currentTarget.getAttribute('href');
		const location = document.getElementById(target.substring(1))?.offsetTop;
		if (location !== undefined) {
			window.scrollTo({
				left: 0,
				top: location - 64,
				behavior: 'smooth',
			});
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	useEffect(() => {
		const pageLinks = document.querySelectorAll('.side-menu__item');
		pageLinks.forEach((elem) => {
			elem.addEventListener('click', handleClick);
		});

		return () => {
			// Clean up event listeners when the component unmounts
			pageLinks.forEach((elem) => {
				elem.removeEventListener('click', handleClick);
			});
		};
	}, []);

	const ToggleDark = () => {
		ThemeChanger({
			...local_varaiable,
			"class": local_varaiable.class == 'dark' ? 'light' : 'dark',
			"dataHeaderStyles": local_varaiable.class == 'dark' ? 'light' : 'dark',
			"dataMenuStyles": local_varaiable.class == 'dark' ? 'light' : 'dark',

		});
		const theme = store.getState();

		if (theme.class != 'dark') {

			ThemeChanger({
				...theme,
				"bodyBg": '',
				"Light": '',
				"darkBg": '',
				"inputBorder": '',
			});
			localStorage.setItem("ynexlighttheme", "light");
			localStorage.removeItem("ynexdarktheme");
			localStorage.removeItem("ynexMenu");
			localStorage.removeItem("ynexHeader");
		}
		else {
			localStorage.setItem("ynexdarktheme", "dark");
			localStorage.removeItem("ynexlighttheme");
			localStorage.removeItem("ynexMenu");
			localStorage.removeItem("ynexHeader");
		}

	};

	return (
		<>
			<ul className="main-menu">
				<li className="slide">
					<a className="side-menu__item" href="#accueil">
						<span className="side-menu__label">Accueil</span>
					</a>
				</li>
				<li className="slide">
					<a href="#rechercher" className="side-menu__item">
						<span className="side-menu__label">Rechercher</span>
					</a>
				</li>
				<li className="slide">
					<a href="#fournisseurs" className="side-menu__item">
						<span className="side-menu__label">Fournisseurs</span>
					</a>
				</li> 

				<li className="slide">
					<a href="#rejoindre" className="side-menu__item">
						<span className="side-menu__label">Rejoindre</span>
					</a>
				</li>

				<li className="slide">
					<a href="#faq" className="side-menu__item">
						<span className="side-menu__label">FAQ</span>
					</a>
				</li>

				<li className="slide">
					<a href="#contact" className="side-menu__item">
						<span className="side-menu__label">Contact</span>
					</a>
				</li>
			</ul>
			<div className="flex justify-center mt-4 lg:hidden" onClick={ToggleDark}>
				<Link to="#" className="hs-dark-mode-active:!block !hidden ti-btn ti-btn-light !m-0 p-2 !px-[2.2rem]" data-hs-theme-click-value="light">
					<i className="bx bx-sun"></i>
				</Link>
				<Link to="#" className="hs-dark-mode-active:!hidden !block ti-btn ti-btn-light !m-0 p-2 !px-[2.2rem]" data-hs-theme-click-value="dark">
					<i className="bx bx-moon"></i>
				</Link>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Navbar1);
