import React from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
// import HomePeople from "./home-people";
// import HomePlanets from "./home-planets";
// import HomeVehicles from "./home-vehicles";

const HomePeople = loadable(() => import("./home-people"));
const HomePlanets = loadable(() => import("./home-planets"));
const HomeVehicles = loadable(() => import("./home-vehicles"));

export const Home = () => {
	return (
		<div className="container">
			<h2 className="text-center">PEOPLE</h2>
			<HomePeople />

			<div className="mt-5 mb-5" />
			<h2 className="text-center">PLANETS</h2>

			<HomePlanets />

			<div className="mt-5 mb-5" />
			<h2 className="text-center">VEHICLES</h2>

			<HomeVehicles />

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
