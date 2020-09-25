import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";
import logo2 from "./logo2.png";

function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img className="header__logo" src={logo2} alt="" />
			</Link>

			<div className="header__links">
				<Link to="/management">
					<h1>Management</h1>
				</Link>
				<Link to="/login">
					<h1>Tennant Login</h1>
				</Link>
			</div>
		</div>
	);
}

export default Header;
