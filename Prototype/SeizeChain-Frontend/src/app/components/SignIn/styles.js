import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
	},

	txtField: {
		marginBottom: "15px",
		width: "50%",
	},

	content: {
		height: "100%",
		width: "100%",
	},

	centered: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	btn: {
		background: theme.palette.colors.iconRed,
		color: "white",
		width: "150px",
		height: "50px",

		marginTop: "30px",
		borderRadius: "5px",
		cursor: "pointer",
	},
}));

export default styles;
