import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		width: "100%",

		display: "flex",
	},

	left: {
		width: "50%",
		height: "100vh",

		background: "green",
		position: "relative",
	},

	right: {
		width: "50%",
		height: "100vh",
		background: "cyan",
	},

	particleContainer: {
		position: "absolute",
		height: "100vh",
		width: "100%",
	},

	logoContainer: {
		position: "absolute",
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
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

	authButton: {
		fontSize: 20,
		fontWeight: "bold",
		background: theme.palette.colors.iconRed,
		color: theme.palette.colors.iconGrey,
		borderRadius: 10,
		marginTop: 20,
		padding: "15px 35px",
		cursor: "pointer",
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
