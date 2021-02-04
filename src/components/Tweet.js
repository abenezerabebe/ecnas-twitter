import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Share } from "react-twitter-widgets";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 16
  },
  media: {
    height: 140
  },
  actions: {
    marginLeft: 8
  }
});

export default function Tweet({
  blok: { image, title, text, link, hashtags, name }
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component="a" href={link.url}>
        <CardMedia className={classes.media} image={image.url} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Share url={link.url.length && link.url} options={{ hashtags, text, size: "large" }} />
        {name}
      </CardActions>
    </Card>
  );
}
