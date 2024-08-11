import PageOne from "./pageone.jsx";
import PageTwo from "./pagetwo.jsx";
import Home from './home.jsx'
import App from "./demo.jsx"

import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<App />} />
    </Routes>
  );
}
export default HomePage;
