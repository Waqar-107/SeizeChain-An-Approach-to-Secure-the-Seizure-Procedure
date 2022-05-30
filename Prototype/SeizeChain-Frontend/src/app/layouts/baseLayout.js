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

// admin views
const Create = lazy(() => import("../views/AdminViews/Create"));

const theme = createTheme({
	palette: {
		colors: {
			primary: "grey",
			secondary: "",
			dark: "",
			background: "#f2f2f2",
			iconGrey: "#42434d",
			iconRed: "#C85250",
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

								<Route exact path="/admin/create" component={Create} />

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
