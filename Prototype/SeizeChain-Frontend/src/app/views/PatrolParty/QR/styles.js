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
		alignItems: "flex-start",
	},

	row: {
		marginBottom: 15,
	},

	head: {
		fontWeight: "bold",
		marginRight: 10,
		color: theme.palette.colors.iconRed,
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
		width: 100,
		height: 100,
		marginTop: 35,
		marginBottom: 50,
	},
}));

export default styles;
