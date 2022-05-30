import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./formStyles";
import { Grid, Button, TextField } from "@material-ui/core";

const RecordForm = ({ handleClose, insertNew }) => {
	const classes = styles();
	const [newData, setNewData] = useState({});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			dateOfSeizure: "",
			dateOfDemolition: "",
			goodsType: "",
			quantity: "",
			unit: "",
			seizedAt: "",
			seizedBy: "",
			currentOwner: "",
			smugglerCaught: false,
		},
	});

	const onSubmit = (data) => {};

	return (
		<div id="formRoot" className={classes.root}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={classes.formOuter}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<div className={classes.fieldContainer}>
								<label className={classes.label}>Goods Type</label>
								<input
									type="text"
									{...register("goodsType", { required: true })}
									className={classes.txtField}
								/>
							</div>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<div className={classes.fieldContainer}>
								<label className={classes.label}>Date of Seizure</label>
								<input
									type="date"
									{...register("dateOfSeizure", { required: true })}
									className={classes.txtField}
								/>
							</div>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<div className={classes.fieldContainer}>
								<label className={classes.label}>Quantity</label>
								<input
									type="number"
									{...register("quantity", { required: true })}
									className={classes.txtField}
								/>
							</div>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<div className={classes.fieldContainer}>
								<label className={classes.label}>Unit</label>
								<input
									type="text"
									{...register("unit", { required: true })}
									className={classes.txtField}
								/>
							</div>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<div className={classes.fieldContainer}>
								<label className={classes.label}>Place of Seizure</label>
								<input
									type="text"
									{...register("seizedAt", { required: true })}
									className={classes.txtField}
								/>
							</div>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<div className={classes.fieldContainer}>
								<label className={classes.label}>Seized By</label>
								<input
									type="text"
									{...register("seizedeBy", { required: true })}
									className={classes.txtField}
								/>
							</div>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<div className={classes.fieldContainer}>
								<label className={classes.label}>Current Owner</label>
								<input
									type="text"
									{...register("currentOwner", { required: true })}
									className={classes.txtField}
								/>
							</div>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<div className={classes.fieldContainer}>
								<label className={classes.label}>Smuggler Status</label>
								<div className={classes.radioContainer}>
									<input
										{...register("smugglerCaught", { required: true })}
										type="radio"
										value="Apprehended"
										style={{ marginRight: "3px", marginTop: "3px" }}
									/>
									<span style={{ marginRight: "20px" }}>Apprehended</span>
									<input
										{...register("smugglerCaught", { required: true })}
										type="radio"
										value="At large"
										style={{ marginRight: "3px", marginTop: "3px" }}
									/>
									<span>At large</span>
								</div>
							</div>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<div className={classes.fieldContainer}>
								<label className={classes.label}>Date of Demolition</label>
								<input
									type="date"
									{...register("dateOfDemolition", { required: true })}
									className={classes.txtField}
								/>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}></Grid>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<Button className={`${classes.btn} ${classes.saveBtn}`}>Save</Button>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<Button
								onClick={() => handleClose()}
								className={`${classes.btn} ${classes.cancelBtn}`}>
								Cancel
							</Button>
						</Grid>
					</Grid>
				</div>
			</form>
		</div>
	);
};

RecordForm.propTypes = {};

export default RecordForm;
