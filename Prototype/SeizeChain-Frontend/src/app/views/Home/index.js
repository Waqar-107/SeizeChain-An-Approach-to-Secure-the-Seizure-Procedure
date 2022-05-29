import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./styles";

const Home = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<Navbar viewName="dashboard" />
			<div className={classes.contentContainer}></div>
		</div>
	);
};

export default Home;
