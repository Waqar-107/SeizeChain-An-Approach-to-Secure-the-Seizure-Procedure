import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Navbar from "../../../components/Navbar";
import { Button } from "@material-ui/core";
import styles from "./styles";
import Loading from "../../../components/Loading";

const Scan = () => {
	const classes = styles();
	const history = useHistory();
	const [loading, setLoading] = useState(false);

	const handleTakePhoto = (dataUri) => {
		setLoading(true);
		setTimeout(() => {
			history.push("/sector-commander/verify");
		}, 3000);
	};

	return (
		<div className={classes.root}>
			<Navbar viewName="scan" />
			<div className={classes.contentContainer}>
				{loading ? (
					<Loading />
				) : (
					<>
						<div className={classes.cameraContainer}>
							<Camera
								idealFacingMode={FACING_MODES.ENVIRONMENT}
								isImageMirror={false}
								onTakePhoto={(dataUri) => {
									handleTakePhoto(dataUri);
								}}
							/>
						</div>

						{/* <img src={Blockchain} alt="" className={classes.img} /> */}
						<Button className={classes.createBtn}>Scan QR Code</Button>
					</>
				)}
			</div>
		</div>
	);
};

export default Scan;
