import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { strings } from "@material/textfield";

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
  const [genresReq, setGenresReq ] = useState([]);
  let genreArray = [];

  const handleToggle = (e) => {
    genreArray = genresReq;
    var index = genreArray.indexOf(e.target.value);

    console.warn(genreArray);

    if (index == -1 && e.target.checked) {
      genreArray.push(e.target.value);
      setGenresReq(genreArray);
      //console.log("Entered checked and not already added!");
    } else if (! e.target.checked && index !== -1) {
      genreArray.splice(index, 1);
      //console.log("Entered unchecked and already added!");
    } else {
      /*console.log("Entered last condition!");*/
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Genres
      </Typography>
      <Typography variant="h6" gutterBottom>
        Please select the genres you are interested in:
      </Typography>

      <List>
        {genres.map((item) => (
          <ListItem key={item.name}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                value={item.id}
                onChange={(e) => handleToggle(e)}
              />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
