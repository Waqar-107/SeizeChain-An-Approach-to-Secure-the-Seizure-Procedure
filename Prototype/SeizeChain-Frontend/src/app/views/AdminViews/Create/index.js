import React from "react";
import Navbar from "../../../components/Navbar";
import styles from "./styles";

const Create = () => {
	const classes = styles();
	return (
		<div id="create" className={classes.root}>
			<Navbar />
		</div>
	);
};

export default Create;
