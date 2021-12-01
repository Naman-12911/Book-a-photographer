import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import React, { useState, useEffect } from "react";
import ai from "../Apis";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Cards from "./PhotographerMainCard";
import Main_navbar from "./MainNavbar";
// import { Redirect } from 'react-router';

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
        .get("api/img/")
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
    <>
    <Main_navbar/>
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
            <Grid item xs={12} sm={6} md={4.5}>
              <Cards photo={photo} key={key} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
    </>
  );
}
