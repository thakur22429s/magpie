import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link as RouteLink, useHistory } from "react-router-dom";
import Axios from "axios";
import "@fontsource/roboto";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import CustomAppBar from "./CustomAppBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://thakur22429s.github.io/magpie/">
        Magpie
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [movieRec, setMovieRec] = useState("");
  const classes = useStyles();

  const getRec = () => {
    Axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e5a142829dadd0a70108fbd4337b0088&language=en-US&page=1"
    ).then((response) => {
      console.log(response);
      setMovieRec(response.data.results[1].original_title);
    });
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch (err) {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <CustomAppBar />
      <h2>{movieRec}</h2>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Typography
            component="h1"
            variant="h5"
            fontWeight="fontWeightBold"
            display="inline"
            noWrap
          >
            <strong>
            Email: 
            </strong>
            &nbsp;
            {currentUser.email}
          </Typography>
          <br/>
          <br/>
          <Link
            to="/update-profile"
            color="textSecondary"
            component={RouteLink}
          >
            Update Profile
          </Link>
        </div>
        <Button
          size="large"
          onClick={handleLogout}
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Log Out
        </Button>
        <Button
          size="large"
          onClick={getRec}
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Get API Data
        </Button>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

/*
<Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        <Button onClick={getRec}>
          Get API Data
        </Button>
      </div>
*/
