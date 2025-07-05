import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import ScrollToTop from './components/ui/scrolltotop.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Fragment>
		<BrowserRouter>
			<React.Suspense>
				<ScrollToTop />
				<App />
			</React.Suspense>
		</BrowserRouter>
	</React.Fragment>
)
