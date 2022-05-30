import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		width: "100%",
	},

	contentContainer: {
		width: "100%",
		padding: "5%",
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
}));

export default styles;
