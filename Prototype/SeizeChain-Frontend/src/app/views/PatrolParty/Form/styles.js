import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		padding: "50px 30px",
		background: theme.palette.colors.body,
		overflowY: "scroll",
		overflowX: "hidden",

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},

		[theme.breakpoints.up("md")]: {
			width: 700,
		},
	},

	fieldContainer: {
		width: "100%",
	},

	txtField: {
		width: "100%",
		height: 50,
		background: "white",

		display: "block",
		boxSizing: "border-box",
		borderRadius: 5,
		padding: "20px 10px",
		marginBottom: 5,
		marginTop: 5,
		border: `1px solid ${theme.palette.colors.iconRed}`,

		"&:focus": {
			//outline: "none",
		},
	},

	errorMsg: {
		color: theme.palette.colors.magenta,
		width: "100%",
	},

	label: {
		color: theme.palette.colors.iconRed,
		fontWeight: "bold",
		width: "100%",
	},

	formOuter: {
		flexGrow: 1,
		width: "100%",
	},

	btn: {
		width: "100%",
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

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	medicineRow: {
		width: "100%",
		marginTop: 10,

		display: "flex",
		flexDirection: "row",
	},

	medName: {
		color: "white",
	},

	medQuantity: {
		color: "white",
		marginLeft: 10,
	},

	cross: {
		marginLeft: 20,
		color: theme.palette.colors.violet,
		cursor: "pointer",
	},

	paidBtnContainer: {
		display: "flex",
	},
	paidBtn: {
		width: 30,
		height: 30,
		borderRadius: 10,
		background: theme.palette.colors.violet,
		color: "white",
		cursor: "pointer",

		display: "grid",
		placeContent: "center",

		"&:nth-child(1)": {
			marginRight: 10,
		},
	},

	radioContainer: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignContent: "center",

		marginTop: 20,
	},
}));

export default styles;
