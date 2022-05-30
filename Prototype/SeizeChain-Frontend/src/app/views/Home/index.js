import React from "react";
import Navbar from "../../components/Navbar";
import { Grid } from "@material-ui/core";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";
import data from "./data";
import BangladeshiMap from "../../components/BangladeshiMap";
import styles from "./styles";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
);
const Home = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<Navbar viewName="dashboard" />
			<div className={classes.contentContainer}>
				<div className={classes.gridroot}>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
							<div style={{ width: "100%" }}>
								<BangladeshiMap />
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
							<div style={{ width: "100%" }}>
								<Bar options={data.currentYear.options} data={data.currentYear.data} />
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
							<div style={{ width: "100%" }}>
								<Bar options={data.avgPerYear.options} data={data.avgPerYear.data} />
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
							<div style={{ width: "100%" }}>
								<Pie data={data.distributionOfSeizedData} />
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
							<div style={{ width: "100%" }}>
								<Line options={data.lineData.options} data={data.lineData.data} />
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default Home;
