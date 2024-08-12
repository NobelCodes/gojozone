import { StrictMode,React } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Demo from './demo.jsx'
import Home from './home.jsx'
import HomePage from './routerurl.jsx'
import ReactDOM from 'react-dom/client';
import PageOne from "./pageone.jsx"
import PageTwo from "./pagetwo.jsx"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
         <HomePage />
      </BrowserRouter>
   </StrictMode>
)
