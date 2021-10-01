import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

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
}));

function Cards({ photo, key }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [increment, setIncrement] = useState(0); // usestate for increment the likes
  // random color genertor for avtar tag.
  function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);

    return color;
  }
  return (
    <div className="mx-4">
      <Card className={classes.root}>
        <div key={photo.id}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                id="av"
                // className={classes.orangeAvatar}
                style={{
                  backgroundColor: randomColor(),
                }}
              >
                {photo.name.charAt(0).toUpperCase()}
              </Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title={photo.name}
          />
          <CardMedia className={classes.media} image={photo.image1} />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <h6>speaclizations</h6>
              {/* style={{ display: "block", textAlign: "right" }} */}
              {photo.speaclization}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* like button*/}
            <IconButton aria-label="add to favorites">
              {
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="checkedH"
                  onClick={() =>
                    increment >= 0 ? setIncrement(increment + 1) : ""
                  }
                />
              }
              {increment}
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
      </Card>
    </div>
  );
}

export default Cards;
