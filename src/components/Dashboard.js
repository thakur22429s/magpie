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

const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "e5a142829dadd0a70108fbd4337b0088";

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
  //const [movieRec, setMovieRec] = useState("");
  const classes = useStyles();
  const api = Axios.create({ baseURL: BASE_URL });
  const [data, setData] = useState([]);

  const getUpcoming = () => {
    api.get("movie/upcoming", { params: { api_key } }).then((response) => {
      setData(response.data.results);
    });
  };

  const getTrendingDaily = () => {
    api.get("trending/all/day", { params: { api_key } }).then((response) => {
      setData(response.data.results);
    });
  };

  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

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
            <strong>Email:</strong>
            &nbsp;
            {currentUser.email}
          </Typography>
          <br />
          <br />
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
          onClick={getUpcoming}
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Get Upcoming Movies
        </Button>
        <Button
          size="large"
          onClick={getTrendingDaily}
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Get Daily Trending
        </Button>
        {data.map((movie) => (
          <div>
            <img
              src={getImage(movie.poster_path)}
              alt="Movie poster goes here"
            />
            <p>{movie.original_title}</p>
          </div>
        ))}
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
