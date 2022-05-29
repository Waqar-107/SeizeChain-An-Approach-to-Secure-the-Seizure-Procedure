import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import SignIn from "../../components/SignIn";
import styles from "./styles";
import Logo from "../../assets/nodeLogo.png";
import particlesOptions from "../../util/particles.json";

const particlesInit = async (main) => {
	await loadFull(main);
};

const LandingPage = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.particleContainer}>
				<Particles options={particlesOptions} init={particlesInit} />
			</div>
			<div className={classes.contentContainer}>
				<div className={`${classes.left} ${classes.centeredContainer}`}>
					<img src={Logo} alt="" className={classes.logo} />
					<span className={classes.title}>SeizeChain</span>
				</div>

				<div className={classes.right}>
					<SignIn />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
