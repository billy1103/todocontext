import React from "react";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {

	return (
		<div>
			<Navbar/>
			<Home/>
			<Footer/>
		</div>
	);
};

export default injectContext(Layout);
