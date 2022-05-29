import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: 70,
		width: "100%",
		background: theme.palette.colors.iconRed,
		padding: "10px 30px",

		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		alignContent: "center",
	},

	logoContainer: {
		width: "fit-content",
		height: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		cursor: "pointer",
	},

	logo: {
		height: 30,
		width: 30,
		marginRight: 10,
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: theme.palette.colors.iconGrey,
	},

	linkContainer: {
		display: "flex",

		"&:nth-child(0)": {},

		fontWeight: "bold",
		cursor: "pointer",
	},

	midChild: {
		marginRight: 20,
		marginLeft: 20,
	},
}));

export default styles;
