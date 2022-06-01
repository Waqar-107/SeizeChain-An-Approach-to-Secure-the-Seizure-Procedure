import React from "react";
import QRImg from "../../assets/qr.png";

const QRDummy = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				alignContent: "center",
				height: "100vh",
				width: "100%",
			}}>
			<img src={QRImg} alt="" style={{ height: 300, width: 300 }} />
		</div>
	);
};

export default QRDummy;
