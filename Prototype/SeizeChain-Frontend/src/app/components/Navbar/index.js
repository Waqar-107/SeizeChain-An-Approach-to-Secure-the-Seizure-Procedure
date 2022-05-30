import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "../../assets/nodeLogo.png";
import styles from "./styles";

const Navbar = (props) => {
	const classes = styles();
	const history = useHistory();

	return (
		<div id="navbar" className={classes.root}>
			<div className={classes.logoContainer}>
				<img
					src={Logo}
					alt=""
					className={classes.logo}
					onClick={() => history.push("/dashboard")}
				/>
				<span className={classes.title}>SeizeChain</span>
			</div>
			<div className={classes.linkContainer}>
				<div
					className={props.viewName === "dashboard" ? classes.activeLink : ""}
					onClick={() => history.push("/dashboard")}>
					Dashboard
				</div>
				<div
					className={props.viewName === "records" ? classes.activeLink : ""}
					onClick={() => history.push("/records")}>
					Records
				</div>
				<div className={props.viewName === "profile" ? classes.activeLink : ""}>Profile</div>
				<div onClick={() => history.push("/")}>Logout</div>
			</div>
		</div>
	);
};

Navbar.propTypes = {
	viewName: PropTypes.string.isRequired,
};

export default Navbar;
