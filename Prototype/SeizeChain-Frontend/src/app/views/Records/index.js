import { Button, Dialog } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Data from "./data";
import Form from "./form";
import styles from "./styles";

const Records = () => {
	const classes = styles();
	const [open, setOpen] = useState(false);
	const [mockData, setMockData] = useState(Data);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		console.log("opening");
		setOpen(true);
	};

	const insertNew = (newData) => {
		let temp = [...mockData];
		temp.push(newData);
		setMockData(temp);
	};

	return (
		<div className={classes.root}>
			<Navbar viewName="records" />
			<div className={classes.contentContainer}>
				<Dialog open={open} onClose={handleClose} maxWidth={false}>
					<Form handleClose={handleClose} insertNew={insertNew} />
				</Dialog>

				<Button className={classes.createBtn} onClick={handleOpen}>
					Create a new record
				</Button>
				<Table
					total={Data.length}
					data={Data}
					handleLimitChange={() => {}}
					handlePageChange={() => {}}
					page={1}
					limit={100}
					widthList={[150, 100, 120, 130, 150, 150, 150]}
					columns={[
						{
							Header: "Date of Seizure",
							accessor: (row) => row,
							Cell: ({ cell: { value } }) => value.dateOfSeizure,
						},

						{
							Header: "Type of Goods",
							accessor: (row) => row,
							Cell: ({ cell: { value } }) => value.goodsType,
						},

						{
							Header: "Quantity",
							accessor: (row) => row,
							Cell: ({ cell: { value } }) => value.quantity + " " + value.unit,
						},

						{
							Header: "Seized At",
							accessor: (row) => row,
							Cell: ({ cell: { value } }) => value.seizedAt,
						},

						{
							Header: "Seized By",
							accessor: (row) => row,
							Cell: ({ cell: { value } }) => value.seizedBy,
						},

						{
							Header: "Current Owner",
							accessor: (row) => row,
							Cell: ({ cell: { value } }) => value.currentOwner,
						},

						{
							Header: "Smuggler Status",
							accessor: (row) => row,
							Cell: ({ cell: { value } }) => (value.smugglerCaught ? "Apprehended" : "At large"),
						},
					]}
				/>
			</div>
		</div>
	);
};

export default Records;
