import { StrictMode,React } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App.jsx'
import Url from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Url/>
    </BrowserRouter>
  </StrictMode>,
)
