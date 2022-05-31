import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./HamburgerMenuStyle";

const HamburgerMenu = (props) => {
	const classes = styles();
	const history = useHistory();

	const [checked, setChecked] = useState(false);

	const handleCheckBox = () => {
		setChecked(!checked);
	};

	return (
		<div className={classes.menu_wrap}>
			<input
				onChange={() => handleCheckBox()}
				type="checkbox"
				className={classes.menu_wrap_toggler}
			/>
			<div className={classes.menu_wrap_hamburger}>
				<div
					className={
						checked ? classes.menu_wrap_hamburger_div_ifChecked : classes.menu_wrap_hamburger_div
					}></div>
			</div>

			<div className={classes.menu} style={{ right: checked ? "0" : "-75vw" }}>
				<div
					className={`${classes.hamItem} ${
						props.viewName === "dashboard" ? classes.activeLink : ""
					}`}
					onClick={() => history.push("/dashboard")}>
					Dashboard
				</div>
				<div
					className={`${classes.hamItem} ${props.viewName === "records" ? classes.activeLink : ""}`}
					onClick={() => history.push("/records")}>
					Records
				</div>
				<div
					className={`${classes.hamItem} ${
						props.viewName === "profile" ? classes.activeLink : ""
					}`}>
					Profile
				</div>
				<div className={classes.hamItem} onClick={() => history.push("/")}>
					Logout
				</div>
			</div>
		</div>
	);
};

HamburgerMenu.propTypes = {
	viewName: PropTypes.string.isRequired,
};

export default HamburgerMenu;
