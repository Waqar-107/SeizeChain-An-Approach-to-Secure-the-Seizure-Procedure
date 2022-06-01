import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		minHeight: "100vh",
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

	btn: {
		width: 100,
		height: 50,
		border: 0,
		color: theme.palette.colors.iconGrey,
	},

	saveBtn: {
		backgroundColor: theme.palette.colors.iconYellow,
		"&:hover": {
			backgroundColor: theme.palette.colors.iconYellow,
		},
	},

	cancelBtn: {
		backgroundColor: theme.palette.colors.iconRed,
		"&:hover": {
			backgroundColor: theme.palette.colors.iconRed,
		},
	},
}));

export default styles;
