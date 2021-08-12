import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { Field, Form, Formik, useField } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";

const MyCheckbox = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export default function Genres() {
  const [genresReq, setGenresReq] = useState([]);
  let genreArray = [];

  const handleToggle = (e) => {
    genreArray = genresReq;
    var index = genreArray.indexOf(e.target.value);

    console.warn(genreArray);

    if (index == -1 && e.target.checked) {
      genreArray.push(e.target.value);
      setGenresReq(genreArray);
      //console.log("Entered checked and not already added!");
    } else if (!e.target.checked && index !== -1) {
      genreArray.splice(index, 1);
      //console.log("Entered unchecked and already added!");
    } else {
      /*console.log("Entered last condition!");*/
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ genresArray: [] }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          //make async call

          console.log(data);

          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            {genres.map((item) => (
              <label>
                <Field
                  type="checkbox"
                  name="genresArray"
                  value={item.id}
                  as={Checkbox}
                />
                {item.name}
              </label>

              // <MyCheckbox
              //   name="genresArray"
              //   type="checkbox"
              //   value={item.id}
              //   label={item.name}
              // />
            ))}

            <div>
              <p>{JSON.stringify(values, null, 2)}</p>
            </div>

            <div>
              <Button disabled={isSubmitting} type="submit">
                SUBMIT PART 1
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>

    // <React.Fragment>
    //   <Typography variant="h4" gutterBottom>
    //     Genres
    //   </Typography>
    //   <Typography variant="h6" gutterBottom>
    //     Please select the genres you are interested in:
    //   </Typography>

    //   <GridList cols={5} cellHeight={50} style={{ paddingLeft: '5%' }}>
    //     {genres.map((item) => (
    //       <ListItem key={item.name}>
    //         <ListItemIcon>
    //           <Checkbox
    //             edge="start"
    //             value={item.id}
    //             onChange={(e) => handleToggle(e)}
    //           />
    //         </ListItemIcon>
    //         <ListItemText primary={item.name} />
    //       </ListItem>
    //     ))}
    //   </GridList>
    // </React.Fragment>
  );
}
