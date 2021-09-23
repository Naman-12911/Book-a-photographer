import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import React, { useState, useEffect } from "react";
import ai from "../Apis";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Cards from "./Photographer_main_card";

// function for the style the card
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Photographer_card() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // get request for the photograhers
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = ai
        .get("account/photographer-account/")
        .then((res) => {
          console.log(res);
          setPhoto(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="container my-4" id="repeatcard">
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start center"
          alignItems="flex-start"
        >
          {photo.map((photo, key) => (
            <Grid item xs={12} sm={6} md={4}>
              <Cards photo={photo} key={key} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
