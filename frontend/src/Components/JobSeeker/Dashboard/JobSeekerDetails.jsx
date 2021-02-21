import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    maxWidth: 380,
  },
  media: {
    margin: "auto",
    height: 150,
    width: 150,
  },
});

export const JobSeekerDetails = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/150"
        />
        <CardContent>
          <Typography variant="h5">{user.name}</Typography>
          <Typography gutterBottom variant="h6">
            {user.title}
          </Typography>
          <Typography variant="subtitle2" style={{ textAlign: "left" }}>
            Experience: {user.experience}
          </Typography>
          <Typography variant="subtitle2" style={{ textAlign: "left" }}>
            Email: {user.email}
          </Typography>
          <Typography variant="subtitle2" style={{ textAlign: "left" }}>
            Phone no: {user.phone}
          </Typography>
          <Typography variant="subtitle2" style={{ textAlign: "left" }}>
            Location: {user.location}
          </Typography>
          <Typography variant="body2" style={{ textAlign: "left" }}>
            Job Description: {user.jobDescription}
          </Typography>
          <Typography variant="body1" style={{ textAlign: "left" }}>
            Key Skills: {user.skills}
          </Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "left" }}
          ></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
