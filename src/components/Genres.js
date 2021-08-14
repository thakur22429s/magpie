import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Form, Formik, useField } from "formik";
import { Grid } from "@material-ui/core";
import { object, array } from "yup";

const MyCheckbox = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

const genres = [
  {
    id: 28,
    name: "Action",
    alias: "action",
  },
  {
    id: 12,
    name: "Adventure",
    alias: "adventure",
  },
  {
    id: 16,
    name: "Animation",
    alias: "animation",
  },
  {
    id: 35,
    name: "Comedy",
    alias: "comedy",
  },
  {
    id: 80,
    name: "Crime",
    alias: "crime",
  },
  {
    id: 99,
    name: "Documentary",
    alias: "documentary",
  },
  {
    id: 18,
    name: "Drama",
    alias: "drama",
  },
  {
    id: 10751,
    name: "Family",
    alias: "family",
  },
  {
    id: 14,
    name: "Fantasy",
    alias: "fantasy",
  },
  {
    id: 36,
    name: "History",
    alias: "history",
  },
  {
    id: 27,
    name: "Horror",
    alias: "horror",
  },
  {
    id: 10402,
    name: "Music",
    alias: "music",
  },
  {
    id: 9648,
    name: "Mystery",
    alias: "mystery",
  },
  {
    id: 10749,
    name: "Romance",
    alias: "romance",
  },
  {
    id: 878,
    name: "Science Fiction",
    alias: "scifi",
  },
  {
    id: 10770,
    name: "TV Movie",
    alias: "tv",
  },
  {
    id: 53,
    name: "Thriller",
    alias: "thriller",
  },
  {
    id: 10752,
    name: "War",
    alias: "war",
  },
  {
    id: 37,
    name: "Western",
    alias: "western",
  },
];

export default function Genres() {
  return (
    <div>
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
        {({ values, handleChange, handleBlur, handleSubmit }) => (
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
            </Grid>

            <div>
              <p>{JSON.stringify(values, null, 2)}</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
