import React from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Data from "./data";
import styles from "./styles";

const Records = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<div className={classes.root}>
				<Navbar viewName="records" />
				<div className={classes.contentContainer}>
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
		</div>
	);
};

export default Records;
