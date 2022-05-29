import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useHistory } from "react-router-dom";
import styles from "./styles";
import Logo from "../../assets/nodeLogo.png";
import particlesOptions from "../../util/particles.json";

const particlesInit = async (main) => {
	console.log("loading particles", main);
	await loadFull(main);
};

const LandingPage = () => {
	const classes = styles();
	const history = useHistory();

	return (
		<div className={classes.root}>
			<div className={classes.left}>
				<div className={classes.particleContainer}>
					<Particles options={particlesOptions} init={particlesInit} />
				</div>
				<div className={`${classes.logoContainer} ${classes.centeredContainer}`}>
					<img src={Logo} alt="" className={classes.logo} />
					<span className={classes.title}>SeizeChain</span>
				</div>
			</div>
			<div className={classes.right}>right</div>
		</div>
	);
};

export default LandingPage;
