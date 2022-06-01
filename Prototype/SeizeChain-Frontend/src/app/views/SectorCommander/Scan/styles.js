import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		width: "100%",
	},

	contentContainer: {
		padding: "5%",
		width: "100%",
		height: "calc(100vh - 70px)",

		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		alignItems: "center",
	},

	createBtn: {
		padding: 10,
		background: theme.palette.colors.iconYellow,
		color: "white",
		marginBottom: 50,
		cursor: "pointer",

		"&:hover": {
			background: theme.palette.colors.iconYellow,
		},
	},

	img: {
		marginBottom: 20,
		[theme.breakpoints.down("md")]: {
			width: "50%",
			height: "auto",
		},

		[theme.breakpoints.up("md")]: {
			width: 200,
			height: "auto",
		},
	},

	cameraContainer: {
		width: 300,
		height: 300,
	},
}));

export default styles;
