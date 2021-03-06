import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { TextField, IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { validateLogin } from "../../validators/auth";

import styles from "./styles";

const SignIn = () => {
	const classes = styles();
	const [field, setField] = useState({ phone: "", password: "", showPassword: "" });
	const [errors, setErrors] = useState({});
	const history = useHistory();

	const handleChange = (name) => (event) => {
		setField({ ...field, [name]: event.target.value });
	};

	const handleLogin = () => {
		let data = {
			phone: field.phone,
			password: field.password,
		};

		let { errors, isValid } = validateLogin(data);

		if (!isValid) {
			setErrors(errors);
			return;
		}

		history.push("/dashboard");
	};

	return (
		<div className={`${classes.root} ${classes.centered}`}>
			<div className={`${classes.content} ${classes.centered}`}>
				<TextField
					required
					onChange={handleChange("phone")}
					value={field.phone}
					name="phone"
					label="phone"
					className={classes.txtField}
					error={errors.phone ? true : false}
					helperText={errors.phone ? errors.phone : ""}
					type="text"
				/>

				<TextField
					required
					className={classes.txtField}
					value={field.password}
					type={field.showPassword ? "text" : "password"}
					label="password"
					name="password"
					error={errors.password ? true : false}
					helperText={errors.password ? errors.password : ""}
					onChange={handleChange("password")}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									edge="end"
									aria-label="Toggle password visibility"
									onClick={() => setField({ ...field, showPassword: !field.showPassword })}>
									{field.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>

				<div className={`${classes.btn} ${classes.centered}`} onClick={() => handleLogin()}>
					Sign in
				</div>
			</div>
		</div>
	);
};

export default SignIn;
