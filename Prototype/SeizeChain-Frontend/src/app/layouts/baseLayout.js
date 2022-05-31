import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import { AuthProvider } from "../stateHandlers/authContext";
import PrivateWrapper from "./privateWrapper";
import ErrorBoundary from "../util/errorBoundary";

import Loading from "../components/Loading";
const LandingPage = lazy(() => import("../views/LandingPage"));
const Home = lazy(() => import("../views/Home"));
const NotFound = lazy(() => import("../views/NotFound"));
const Template = lazy(() => import("../views/Template"));
const Records = lazy(() => import("../views/Records"));

// patrol party
const createByPatrolParty = lazy(() => import("../views/PatrolParty/Create"));
const qrForPatrolParty = lazy(() => import("../views/PatrolParty/QR"));

const theme = createTheme({
	palette: {
		colors: {
			primary: "grey",
			secondary: "",
			dark: "",
			background: "#f2f2f2",
			iconGrey: "#42434d",
			iconRed: "#C85250",
			iconYellow: "#fed66b",
		},
	},
});

const BaseLayout = () => (
	<Router>
		<Suspense fallback={<Loading />}>
			<AuthProvider>
				<MuiThemeProvider theme={theme}>
					<ErrorBoundary>
						<div>
							<Switch>
								<Route exact path="/" component={LandingPage} />
								<Route exact path="/dashboard" component={Home} />
								<Route exact path="/records" component={Records} />

								<Route exact path="/patrol-party/create" component={createByPatrolParty} />
								<Route exact path="/patrol-party/qr" component={qrForPatrolParty} />

								<Route
									exact
									path="/template"
									render={(props) => <PrivateWrapper component={<Template {...props} />} />}
								/>

								<Route exact path="*" component={NotFound} />
							</Switch>
						</div>
					</ErrorBoundary>
				</MuiThemeProvider>
			</AuthProvider>
		</Suspense>
	</Router>
);

export default BaseLayout;
