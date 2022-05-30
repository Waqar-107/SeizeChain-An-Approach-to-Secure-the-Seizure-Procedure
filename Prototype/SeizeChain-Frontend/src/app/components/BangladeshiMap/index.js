import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataBagladesh from "./mapData";
import styles from "./styles";

// Load Highcharts modules
require("highcharts/modules/map")(Highcharts);

const data = [
	["bd-da", 10],
	["bd-kh", 11],
	["bd-ba", 12],
	["bd-cg", 25],
	["bd-sy", 14],
	["bd-rj", 15],
	["bd-rp", 16],
];

const mapOptions = {
	title: {
		text: "Seized goods in Bangladeshi divisions",
	},

	colorAxis: {
		min: 0,
		stops: [
			[0.4, "#c97675"],
			[0.65, "#c96261"],
			[1, "#C85250"],
		],
	},

	series: [
		{
			mapData: mapDataBagladesh,
			name: "Bangladesh",
			data: data,
		},
	],
};

const BangladeshiMap = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<HighchartsReact options={mapOptions} constructorType={"mapChart"} highcharts={Highcharts} />
		</div>
	);
};

export default BangladeshiMap;
