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
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import naman from "../image/Naman Garg.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import ai from "../Apis";

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
    <div className="container my-4">
      <Card className={classes.root}>
        {photo.map((photo) => (
          <div key={photo.id}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {photo.name.charAt(0).toUpperCase()}
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title={photo.name}
            />
            <CardMedia
              className={classes.media}
              image={naman}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <h6>speaclizations</h6>
                {photo.speaclization}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon /> 12
              </IconButton>
              <div className="mx-3">
                <Link to={`/${photo.id}`}> Book Now</Link>
              </div>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <h6>Work Experience:</h6>
                </Typography>
                <Typography paragraph>
                  {photo.work_experience.slice(0, 150)}...{" "}
                  <Link to={`/${photo.id}`}> Read more</Link>
                </Typography>
              </CardContent>
            </Collapse>
          </div>
        ))}
      </Card>
    </div>
  );
}
