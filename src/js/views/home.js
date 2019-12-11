import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const HomePeople = React.lazy(() => import("./home-people"));
const HomePlanets = React.lazy(() => import("./home-planets"));
const HomeVehicles = React.lazy(() => import("./home-vehicles"));

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
