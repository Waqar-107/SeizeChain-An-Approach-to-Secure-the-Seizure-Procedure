import React from "react";
import Logo from "../../assets/nodeLogo.png";
import styles from "./styles";

const Navbar = () => {
	const classes = styles();
	return (
		<div id="navbar" className={classes.root}>
			<div className={classes.logoContainer}>
				<img src={Logo} alt="" className={classes.logo} />
				<span className={classes.title}>SeizeChain</span>
			</div>
			<div className={classes.linkContainer}>
				<div>Records</div>
				<div className={classes.midChild}>Profile</div>
				<div>Logout</div>
			</div>
		</div>
	);
};

export default Navbar;
