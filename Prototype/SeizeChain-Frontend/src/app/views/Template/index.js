import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const Template = () => {
	const classes = styles();
	return <div className={classes.root}>template page</div>;
};

Template.propTypes = {};

export default Template;
