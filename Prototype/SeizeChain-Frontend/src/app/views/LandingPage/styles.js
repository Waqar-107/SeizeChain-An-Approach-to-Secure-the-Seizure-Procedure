import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		width: "100%",

		position: "relative",
	},

	particleContainer: {
		height: "100vh",
		width: "100%",
		position: "absolute",
	},

	contentContainer: {
		height: "100vh",
		width: "100%",
		position: "absolute",

		display: "flex",
		flexDirection: "row",
	},

	left: {
		width: "50%",
		height: "100vh",
	},

	right: {
		width: "50%",
		height: "100vh",
		background: "rgb(242, 242, 242, 0.7)",
	},

	logo: {
		height: 150,
		width: 150,
		marginRight: 10,
	},

	title: {
		fontSize: 60,
		fontWeight: "bold",
		color: theme.palette.colors.iconGrey,
	},

	centeredContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},
}));

export default styles;
