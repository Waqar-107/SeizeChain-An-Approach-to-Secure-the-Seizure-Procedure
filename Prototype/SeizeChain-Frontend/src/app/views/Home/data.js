import faker from "faker";

const optionsForCurrentYear = {
	labels: ["January", "February", "March", "April", "May"],
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Seized Goods in the Current Year",
			},
		},
	},
};

const dataForCurrentYear = {
	labels: optionsForCurrentYear.labels,
	datasets: [
		{
			label: "Amount",
			data: optionsForCurrentYear.labels.map(() =>
				faker.datatype.number({ min: 100000, max: 1000000 })
			),
			backgroundColor: "#C85250",
		},
	],
};

const optionsForAvgYear = {
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Monthly Avg Seized Goods over the Years",
			},
		},
	},
};

const dataForAvgYear = {
	labels: optionsForAvgYear.labels,
	datasets: [
		{
			label: "Average Amount",
			data: optionsForAvgYear.labels.map(() =>
				faker.datatype.number({ min: 1000000, max: 5000000 })
			),
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

const distributionOfSeizedData = {
	labels: ["Cattle", "Phensedyl", "Clothes", "Yaba", "Weed", "Cell phone"],
	datasets: [
		{
			label: "Seized Goods in the Current Year",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(255, 159, 64, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)",
			],
			borderWidth: 1,
		},
	],
};

const optionsForLineChart = {
	labels: [
		2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
		2016, 2017, 2018, 2019, 2020, 2021,
	],
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Drugs vs Cattle seized over the years",
			},
		},
	},
};

const lineData = {
	labels: optionsForLineChart.labels,
	datasets: [
		{
			label: "Drugs",
			data: optionsForLineChart.labels.map(() =>
				faker.datatype.number({ min: 10000000, max: 30000000 })
			),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Cattle",
			data: optionsForLineChart.labels.map(() =>
				faker.datatype.number({ min: 10000000, max: 20000000 })
			),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

const plotData = {
	currentYear: {
		options: optionsForCurrentYear.options,
		data: dataForCurrentYear,
	},

	avgPerYear: {
		options: optionsForAvgYear.options,
		data: dataForAvgYear,
	},

	distributionOfSeizedData,
	lineData: {
		options: optionsForLineChart.options,
		data: lineData,
	},
};

export default plotData;
