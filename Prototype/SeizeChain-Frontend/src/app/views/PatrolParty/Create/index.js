import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Form from "../Form";
import { Button, Dialog } from "@material-ui/core";
import styles from "./styles";

const Create = () => {
	const classes = styles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div className={classes.root}>
			<Navbar />
			<div className={classes.contentContainer}>
				<Button className={classes.createBtn} onClick={handleOpen}>
					Create a new record
				</Button>
			</div>
		</div>
	);
};

export default Create;
