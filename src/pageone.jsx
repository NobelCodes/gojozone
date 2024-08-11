

import { NavLink } from "react-router-dom";

function PageOne(){
	return(
		<>
		<h1>I am page one</h1>
		
		<NavLink to="/pagetwo">About</NavLink>
		</>
	)
}
export default PageOne;