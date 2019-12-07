import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h2 className="text-center">PEOPLE</h2>

			<div className="card-columns">
				{store.people.map((item, index) => {
					return (
						<div className="card" key={index}>
							<img
								className="card-img-top"
								src="https://picsum.photos/180/100?random=5"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									<span>Birth Year: {item.birth_year}</span> <br />
									<span>Gender: {item.gender}</span> <br />
									<span>Height: {item.height}</span> <br />
									<span>Mass: {item.mass}</span> <br />
									<span>Skin: {item.skin_color}</span> <br />
									<span>Eye Color: {item.eye_color}</span>
								</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className="mt-5 mb-5" />
			<h2 className="text-center">PLANETS</h2>

			<div className="card-columns">
				{store.planets.map((item, index) => {
					return (
						<div className="card" key={index}>
							<img
								className="card-img-top"
								src="https://picsum.photos/200/100?random=2"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									<span>Population: {item.population}</span> <br />
									<span>Climate: {item.climate}</span> <br />
									<span>Terrain: {item.terrain}</span> <br />
									<span>Diameter: {item.diameter}</span> <br />
									<span>Gravity: {item.gravity}</span> <br />
									<span>Orbital Period: {item.orbital_period}</span>
								</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className="mt-5 mb-5" />
			<h2 className="text-center">VEHICLES</h2>

			<div className="card-columns">
				{store.vehicles.map((item, index) => {
					return (
						<div className="card" key={index}>
							<img
								className="card-img-top"
								src="https://picsum.photos/200/100?random=7"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									<span>Cargo Capacity: {item.cargo_capacity}</span> <br />
									<span>Crew: {item.crew}</span> <br />
									<span>Passengers: {item.passengers}</span> <br />
									<span>Manufacturer: {item.manufacturer}</span> <br />
									<span>Consumables: {item.consumables}</span> <br />
									<span>Cost in Credits: {item.cost_in_credits}</span>
								</p>
							</div>
						</div>
					);
				})}
			</div>

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
