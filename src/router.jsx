import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'
import FormPage from './form'
import Upload from './upload'
import Home from './home'

function Url(){
	return(
		<Routes>
		<Route path="/" element={<Home/>} />
		
		<Route path="/form/:id" element={<FormPage/>}/>
		<Route path='/upload' element={<Upload/>}/>
		<Route path="/buy/:id" element={<App />} />
        
		</Routes>
	)
}
export default Url;
