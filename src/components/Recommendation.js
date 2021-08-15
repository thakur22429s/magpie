import React, { useState } from "react";
import Axios from "axios";
import { Link as RouteLink } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Stepper from "@material-ui/core/Stepper";
import { Step, StepLabel, StepConnector } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";
import { Form, Formik, useField } from "formik";
import { Grid } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import DateFnsUtils from "@date-io/date-fns";

const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "e5a142829dadd0a70108fbd4337b0088";

const MyCheckbox = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

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

const CustomConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#873e23",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#873e23",
    },
  },
  line: {
    borderColor: "#21130d",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#21130d",
    marginTop: theme.spacing(3),
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "2%",
    paddingBottom: "2%",
    rowGap: "2rem",
  },
  stepper: {
    backgroundColor: "#21130d",
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  formControl: {
    minWidth: 275,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  media: {
    height: 513,
  },
  root: {
    maxWidth: 342,
    backgroundColor: "#21130d",
  },
}));

export default function Recommendation() {
  const classes = useStyles();
  const [sort, setSort] = React.useState("");
  const [selectedDateAfter, handleDateChangeAfter] = useState(new Date());
  const [selectedDateBefore, handleDateChangeBefore] = useState(new Date());

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  var dateAfter =
    selectedDateAfter.getFullYear() +
    "-" +
    ("0" + (selectedDateAfter.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + selectedDateAfter.getDate()).slice(-2);
  var dateBefore =
    selectedDateBefore.getFullYear() +
    "-" +
    ("0" + (selectedDateBefore.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + selectedDateBefore.getDate()).slice(-2);

  const api = Axios.create({ baseURL: BASE_URL });
  const [movieData, setMovieData] = useState([]);

  const getMovieRec = (encodedGenreString) => {
    api
      .get("discover/movie", {
        params: {
          api_key: api_key,
          sort_by: sort,
          page: 1,
          "release_date.gte": dateAfter,
          "release_date.lte": dateBefore,
          with_genres: encodedGenreString,
        },
      })
      .then((response) => {
        setMovieData(response.data.results);
        console.log(response);
      });
  };

  const getImage = (path) => `https://image.tmdb.org/t/p/w342/${path}`;

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="secondary"
        >
          Get Your Movie Recommendation
        </Typography>

        <FormikStepper
          initialValues={{
            genresArray: [],
          }}
          onSubmit={(data) => {
            console.log(data);

            let encodedGenreString = data.genresArray.toString();

            getMovieRec(encodedGenreString);
          }}
        >
          <FormikStep label="Choose Genres">
            <Grid container spacing={2}>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="28"
                  label="Action"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="12"
                  label="Adventure"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="16"
                  label="Animation"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="35"
                  label="Comedy"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="80"
                  label="Crime"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="99"
                  label="Documentary"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="18"
                  label="Drama"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="10751"
                  label="Family"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="14"
                  label="Fantasy"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="36"
                  label="History"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="27"
                  label="Horror"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="10402"
                  label="Music"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="9648"
                  label="Mystery"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="10749"
                  label="Romance"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="878"
                  label="Science Fiction"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="10770"
                  label="TV Movie"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="53"
                  label="Thriller"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="10752"
                  label="War"
                />
              </Grid>
              <Grid item align="center" xs={12} sm={6} md={4} lg={3}>
                <MyCheckbox
                  name="genresArray"
                  type="checkbox"
                  value="37"
                  label="Western"
                />
              </Grid>
            </Grid>
          </FormikStep>

          <FormikStep label="Sort Parameter">
            <Grid container>
              <Grid item xs={12} align="center">
                <FormControl
                  color="secondary"
                  focused={true}
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel focused={true} id="select-sort-label">
                    Sort By
                  </InputLabel>
                  <Select
                    labelId="select-sort-label"
                    id="select-sort"
                    value={sort}
                    onChange={handleChange}
                    label="Sort By"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="popularity.asc">
                      Popularity <FontAwesomeIcon icon={faArrowCircleUp} />
                    </MenuItem>
                    <MenuItem value="popularity.desc">
                      Popularity <FontAwesomeIcon icon={faArrowCircleDown} />
                    </MenuItem>
                    <MenuItem value="release_date.asc">
                      Release Date <FontAwesomeIcon icon={faArrowCircleUp} />
                    </MenuItem>
                    <MenuItem value="release_date.desc">
                      Release Date <FontAwesomeIcon icon={faArrowCircleDown} />
                    </MenuItem>
                    <MenuItem value="revenue.asc">
                      Revenue <FontAwesomeIcon icon={faArrowCircleUp} />
                    </MenuItem>
                    <MenuItem value="revenue.desc">
                      Revenue <FontAwesomeIcon icon={faArrowCircleDown} />
                    </MenuItem>
                    <MenuItem value="vote_average.asc">
                      Average Votes <FontAwesomeIcon icon={faArrowCircleUp} />
                    </MenuItem>
                    <MenuItem value="vote_average.desc">
                      Average Votes <FontAwesomeIcon icon={faArrowCircleDown} />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </FormikStep>

          <FormikStep label="Release Dates">
            <Grid container spacing={6}>
              <Grid item xs={12} lg={6} align="center">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    variant="outline"
                    views={["year", "month"]}
                    label="Movies Released After"
                    maxDate={new Date(date)}
                    value={selectedDateAfter}
                    onChange={handleDateChangeAfter}
                  />
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid item xs={12} lg={6} align="center">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    views={["year", "month"]}
                    label="Movies Released Before"
                    minDate={new Date("1900-01-01")}
                    value={selectedDateBefore}
                    onChange={handleDateChangeBefore}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </FormikStep>

          <FormikStep label="Results">
            <Grid container spacing={6}>
              {movieData.map((movie) => (
                <Grid item align="center" xs={12} md={6} lg={4}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia className={classes.media}>
                        <img
                          src={getImage(movie.poster_path)}
                          alt="Movie Poster"
                        />
                      </CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {movie.original_title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {movie.overview}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </FormikStep>

          {/* <div>
                <p>{JSON.stringify(values, null, 2)}</p>
              </div> */}
        </FormikStepper>
        <Copyright />
      </Paper>
    </React.Fragment>
  );
}

export interface FormikStepProps {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <React.Fragment> {children} </React.Fragment>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const classes = useStyles();
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  function isPenultimateStep() {
    return step === childrenArray.length - 2;
  }

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (isPenultimateStep()) {
          await props.onSubmit(values, helpers);
          setStep((s) => s + 1);
        } else if (isLastStep()) {
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      <Form autoComplete="off">
        <Stepper
          className={classes.stepper}
          alternativeLabel
          activeStep={step}
          connector={<CustomConnector />}
        >
          {childrenArray.map((child) => (
            <Step key={child.props.label}>
              <StepLabel>{child.props.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {isLastStep() ? (
          <Grid container justifyContent="center">
            <Grid item align="center">
              <Button
                className={classes.button}
                size="large"
                variant="contained"
                color="secondary"
                onClick={() => setStep(0)}
              >
                Start Over
              </Button>
            </Grid>
            <Grid item align="center">
              <Button
                className={classes.button}
                size="large"
                variant="contained"
                color="secondary"
              >
                <Link
                  color="inherit"
                  component={RouteLink}
                  to="/"
                  variant="body1"
                  underline="none"
                  style={{ textDecoration: "none" }}
                >
                  {"Back to Dashboard"}
                </Link>
              </Button>
            </Grid>
          </Grid>
        ) : null}
        {currentChild}
        <Grid container>
          {step > 0 && !isLastStep() ? (
            <Grid item xs={6} align="center">
              <Button
                className={classes.button}
                size="large"
                variant="contained"
                color="secondary"
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </Button>
            </Grid>
          ) : null}

          {!isLastStep() ? (
            step > 0 ? (
              <Grid item xs={6} align="center">
                <Button
                  className={classes.button}
                  size="large"
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  {isPenultimateStep() ? "Submit" : "Next"}
                </Button>
              </Grid>
            ) : (
              <Grid item xs={12} align="center">
                <Button
                  className={classes.button}
                  size="large"
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  {isPenultimateStep() ? "Submit" : "Next"}
                </Button>
              </Grid>
            )
          ) : null}
        </Grid>
      </Form>
    </Formik>
  );
}
