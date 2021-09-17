import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import naman from "../image/Naman Garg.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import ai from "../Apis";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Cards from "./Card";

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

  const [increment, setIncrement] = useState(0);

  return (
    <div className="container my-4" id="repeatcard">
      <Container>
        {/* <Grid  spacing={2}> */}
        {photo.map((photo, key) => (
          <Cards photo={photo} key={key} />
        ))}
        {/* </Grid> */}
      </Container>
    </div>
  );
}
