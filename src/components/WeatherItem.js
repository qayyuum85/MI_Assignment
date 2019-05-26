import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  item: {
    maxWidth: 500
  },
  right: {
    textAlign: "right"
  }
});

const mapData = d => {
  const minTemp = `${d.main.temp_min.toFixed(0) + String.fromCharCode(176)}C`;
  const maxTemp = `${d.main.temp_max.toFixed(0) + String.fromCharCode(176)}C`;

  const date = d.dt_txt;
  const weather = d.weather[0].main;

  return {
    date: date,
    minTemp: minTemp,
    maxTemp: maxTemp,
    weather: weather
  };
};

function WeatherItem(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {props.weather.map((d, i) => {
          const data = mapData(d);
          return (
            <React.Fragment key={i}>
              <ListItem className={classes.item} button>
                <ListItemText>
                  <Typography variant="subtitle1">
                    <Moment format="DD MMM YYYY">{data.date}</Moment>
                    {", "}
                    <Moment format="dddd">{data.date}</Moment>
                  </Typography>
                  <Typography variant="caption">{data.weather}</Typography>
                </ListItemText>
                <ListItemText>
                  <Typography className={classes.right} variant="subtitle1">
                    {data.minTemp} - {data.maxTemp}
                  </Typography>
                  <Typography variant="caption">&nbsp;&nbsp;</Typography>
                </ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
}

WeatherItem.propTypes = {
  classes: PropTypes.object.isRequired,
  weather: PropTypes.array.isRequired
};

export default withStyles(styles)(WeatherItem);
