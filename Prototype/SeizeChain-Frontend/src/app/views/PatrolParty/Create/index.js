import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Form from "../Form";
import Blockchain from "../../../assets/blockchain.png";
import { Button, Dialog } from "@material-ui/core";
import styles from "./styles";

const Create = () => {
	const classes = styles();
	const history = useHistory();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const insertNew = (newData) => {
		history.push("/patrol-party/qr");
	};

	return (
		<div className={classes.root}>
			<Navbar viewName="create" />
			<div className={classes.contentContainer}>
				<Dialog open={open} onClose={handleClose} maxWidth={false}>
					<Form handleClose={handleClose} insertNew={insertNew} />
				</Dialog>

				<img src={Blockchain} alt="" className={classes.img} />
				<Button className={classes.createBtn} onClick={handleOpen}>
					Create a new record
				</Button>
			</div>
		</div>
	);
};

export default Create;
