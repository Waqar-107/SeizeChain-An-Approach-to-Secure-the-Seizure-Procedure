import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: 70,
		width: "100%",
		background: "white",
		boxShadow: "0px 11px 11px -15px #000000",
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
		width: "25%",
		height: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",

		fontWeight: "bold",
		cursor: "pointer",
	},

	activeLink: {
		textDecoration: "underline",
		textDecorationColor: theme.palette.colors.iconRed,
		textDecorationThickness: 3,
		textUnderlineOffset: "5px",
	},
}));

export default styles;
