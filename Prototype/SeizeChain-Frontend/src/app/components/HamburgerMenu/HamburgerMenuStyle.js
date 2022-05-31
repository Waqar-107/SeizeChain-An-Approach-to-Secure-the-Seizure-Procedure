import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	/* MENU STYLES */
	menu_wrap: {
		position: "absolute",
		top: 10,
		right: -5,
		zIndex: 6,
	},

	menu_wrap_toggler: {
		position: "absolute",
		top: 0,
		right: 0,
		zIndex: 10,

		cursor: "pointer",
		width: "40px",
		height: "40px",

		userSelect: "none",
		opacity: "0",

		"&:checked": {
			menu_wrap_hamburger_div: {
				transform: "rotate(135deg)",
			},
		},
	},

	menu_wrap_hamburger: {
		position: "absolute",
		top: 0,
		right: 0,
		zIndex: 5,
		width: "40px",
		height: "40px",
		backgroundColor: "transparent",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},

	/* Hamburger Line */
	menu_wrap_hamburger_div: {
		position: "relative",
		flex: "none",
		width: "70%",
		height: "2px",
		backgroundColor: "#C85250",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all 0.4s ease",

		"&:before": {
			content: "''",
			position: "absolute",
			zIndex: 5,
			top: "10px",
			width: "100%",
			height: "2px",
			backgroundColor: "#C85250",
		},

		"&:after": {
			content: "''",
			position: "absolute",
			zIndex: 5,
			top: "-10px",
			width: "100%",
			height: "2px",
			backgroundColor: "#C85250",
		},
	},

	//use this when checked
	menu_wrap_hamburger_div_ifChecked: {
		position: "relative",
		flex: "none",
		width: "70%",
		height: "2px",
		backgroundColor: "#C85250",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all 0.4s ease",
		transform: "rotate(135deg)",

		"&:before": {
			content: "''",
			position: "absolute",
			zIndex: 5,
			width: "100%",
			height: "2px",
			backgroundColor: "#C85250",
			top: 0,
			transform: "rotate(90deg)",
		},

		"&:after": {
			content: "''",
			position: "absolute",
			zIndex: 5,
			width: "100%",
			height: "2px",
			backgroundColor: "#C85250",
			top: 0,
			transform: "rotate(90deg)",
		},
	},

	menu: {
		position: "fixed",
		top: "0",
		zIndex: 3,

		height: "100%",
		width: "75vw",
		transition: "all 0.4s ease-in",

		backgroundColor: "white",

		display: "flex",
		flexDirection: "column",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},

	hamItem: {
		cursor: "pointer",
		marginBottom: "20px",
		color: theme.palette.colors.iconGrey,
	},

	activeLink: {
		textDecoration: "underline",
		textDecorationColor: theme.palette.colors.iconRed,
		textDecorationThickness: 3,
		textUnderlineOffset: "5px",
	},
}));

export default styles;
