import React from "react";
import Header from "./Header";
import "./Home.css";
import Button from "@material-ui/core/Button";
import Carousel from "./Carousel";
import map from "./map.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
	return (
		<div className="home">
			<Header />

			<div className="carousel__container">
				<Carousel />
				<div className="carousel__containerInfo">
					<p>Your Next Home.</p>
					<div className="carousel__containerInfoButtons">
						<Button variant="outlined">Rent Application</Button>
						<Button variant="outlined">Renew Lease</Button>
					</div>
				</div>
			</div>

			<div className="map__container">
				<p>
					Benchmark West Apartments is located in the heart of Tallahassee.
					Whatever Direction you're headed, you'll be there in no time.
				</p>
				<img src={map} alt="" />
			</div>
		</div>
	);
}

export default Home;
