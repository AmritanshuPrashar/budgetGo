import React from "react";
import { useLoaderData, Outlet } from "react-router-dom";
// Helper functions :
import { fetchData } from "../helpers";

import wave from "../assets/wave.svg";
import Nav from "../components/Nav";

// Loader :

export function mainLoader() {
	const userName = fetchData("userName");
	return { userName };
}



const Main = () => {
	const { userName } = useLoaderData();
	return (
		<div className="layout">
			<Nav userName={userName} />
			<main>
				<Outlet />
			</main>
			<img src={wave} alt="wave" />
		</div>
	);
};

export default Main;
