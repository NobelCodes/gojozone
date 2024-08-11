
import PageOne from "./pageone.jsx"
import PageTwo from "./pagetwo.jsx"
import ReactDOM from 'react-dom/client';
import { StrictMode,React } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route } from 'react-router-dom';

function HomePage(){

	return(
	 <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/pagetwo" element={<PageTwo />} />
            
         </Routes>
	)
}
export default HomePage;