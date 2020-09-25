import React from "react";
import { Carousel } from "react-responsive-carousel";
import pool from "./pool.jpg";
import room from "./room.png";
import bed from "./bed.png";
import bedroom from "./bed.jpg";
import "./Carousel.css";
//className="carouselImg__container"
export default () => (
	<Carousel autoPlay>
		<div>
			<img className="carouselImg" alt="" src={pool} />
		</div>
		<div>
			<img className="carouselImg" alt="" src={room} />
		</div>
		<div>
			<img className="carouselImg" alt="" src={bed} />
		</div>
		<div>
			<img className="carouselImg" alt="" src={bedroom} />
		</div>
	</Carousel>
);
