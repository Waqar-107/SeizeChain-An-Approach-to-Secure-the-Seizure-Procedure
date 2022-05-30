import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./styles";

const Records = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<div className={classes.root}>
				<Navbar viewName="records" />
				<div className={classes.contentContainer}></div>
			</div>
		</div>
	);
};

export default Records;
