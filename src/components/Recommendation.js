import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import { FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";
import { Form, Formik, useField } from "formik";
import { Grid } from "@material-ui/core";
import { object, array } from "yup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { date } from "yup/lib/locale";

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

        <Divider variant="middle" />

        <Formik
          validationSchema={object({
            genresArray: array().length(
              3,
              "You can only select the top 3 genres!"
            ),
          })}
          initialValues={{
            genresArray: [],
          }}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          {({ values, handleBlur, handleSubmit }) => (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="28"
                    label="Action"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="12"
                    label="Adventure"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="16"
                    label="Animation"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="35"
                    label="Comedy"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="80"
                    label="Crime"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="99"
                    label="Documentary"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="18"
                    label="Drama"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="10751"
                    label="Family"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="14"
                    label="Fantasy"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="36"
                    label="History"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="27"
                    label="Horror"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="10402"
                    label="Music"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="9648"
                    label="Mystery"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="10749"
                    label="Romance"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="878"
                    label="Science Fiction"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="10770"
                    label="TV Movie"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="53"
                    label="Thriller"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="10752"
                    label="War"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MyCheckbox
                    name="genresArray"
                    type="checkbox"
                    value="37"
                    label="Western"
                  />
                </Grid>

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
                        Release Date{" "}
                        <FontAwesomeIcon icon={faArrowCircleDown} />
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
                        Average Votes{" "}
                        <FontAwesomeIcon icon={faArrowCircleDown} />
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} align="center">
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

                <Grid item xs={12} align="center">
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

              {/* <div>
                <p>{JSON.stringify(values, null, 2)}</p>
              </div> */}
            </Form>
          )}
        </Formik>

        <Copyright />
      </Paper>
    </React.Fragment>
  );
}
