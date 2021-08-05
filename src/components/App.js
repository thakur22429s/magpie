import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Recommendation from "./Recommendation";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import { createTheme, CssBaseline, Grid, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      light: "#bb6a4c",
      main: "#873e23",
      dark: "#551300",
    },
    secondary: {
      light: "#ffe8a6",
      main: "#eab676",
      dark: "#b58649",
    },
    background: {
      default: "#21130d",
    },
    text: {
      primary: "#eab676",
      secondary: "#e28743",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        style={{ minHeight: "90vh" }}  
      >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/recommend" component={Recommendation} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
