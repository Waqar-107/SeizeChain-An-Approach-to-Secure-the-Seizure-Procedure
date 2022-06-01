import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../../components/Navbar";
import styles from "./styles";
import { Button } from "@material-ui/core";
import QRImg from "../../../assets/qr.png";

const Verify = () => {
	const classes = styles();
	const data = {
		dateOfSeizure: "2019-01-01",
		goodsType: "Cattle",
		quantity: "100",
		unit: "pieces",
		seizedAt: "Benapole",
		seizedBy: "Patrol team S2",
		currentOwner: "BGB Sector 2",
		smugglerCaught: false,
	};

	return (
		<div className={classes.root}>
			<Navbar viewName="qr" />
			<div className={classes.contentContainer}>
				<div className={classes.row}>
					<span className={classes.head}>Date of Seizure</span>
					<span className={classes.val}>{data.dateOfSeizure}</span>
				</div>
				<div className={classes.row}>
					<span className={classes.head}>Goods Type</span>
					<span className={classes.val}>{data.goodsType}</span>
				</div>
				<div className={classes.row}>
					<span className={classes.head}>Quantity</span>
					<span className={classes.val}>{data.quantity}</span>
				</div>
				<div className={classes.row}>
					<span className={classes.head}>Unit</span>
					<span className={classes.val}>{data.unit}</span>
				</div>
				<div className={classes.row}>
					<span className={classes.head}>Seized at</span>
					<span className={classes.val}>{data.seizedAt}</span>
				</div>
				<div className={classes.row}>
					<span className={classes.head}>Seized by</span>
					<span className={classes.val}>{data.seizedBy}</span>
				</div>
				<div className={classes.row}>
					<span className={classes.head}>Current Owner</span>
					<span className={classes.val}>{data.currentOwner}</span>
				</div>
				<div className={classes.row}>
					<span className={classes.head}>Smuggler Status</span>
					<span className={classes.val}>{data.smugglerCaught ? "Apprehended" : "At large"}</span>
				</div>
				<img src={QRImg} alt="" className={classes.img} />

				<div style={{ display: "flex", marginBottom: 50 }}>
					<Button variant="contained" className={`${classes.btn} ${classes.saveBtn}`}>
						Verify
					</Button>
					<Button
						variant="contained"
						style={{ marginLeft: 20 }}
						className={`${classes.btn} ${classes.cancelBtn}`}>
						Reject
					</Button>
				</div>
			</div>
		</div>
	);
};

Verify.propTypes = {};

export default Verify;
