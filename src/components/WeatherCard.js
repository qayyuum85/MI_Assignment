import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import countryList from "country-list";
import Moment from "react-moment";
// import moment from "moment";
import "moment-timezone";

const styles = {
  root: {
    maxWidth: 500,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    padding: 10
  },
  item: {
    flexGrow: 1
  },
  title: {
    fontSize: 30
  }
};

const mapData = d => {
  const minTemp = `${d.main.temp_min.toFixed(0) + String.fromCharCode(176)}C`;
  const maxTemp = `${d.main.temp_max.toFixed(0) + String.fromCharCode(176)}C`;

  const date = d.dt_txt;
  const weather = d.weather[0].main;
  const temp = `${d.main.temp.toFixed(0) + String.fromCharCode(176)}C`;

  return {
    date: date,
    minTemp: minTemp,
    maxTemp: maxTemp,
    temp: temp,
    weather: weather
  };
};

function WeatherPaper(props) {
  const { classes, currentWeather, city } = props;
  const data = mapData(currentWeather);
  const countryName = countryList.getName(city.country);
  return (
    <Paper className={classes.root}>
      <Grid container spacing={3}>
        <Grid item className={classes.item}>
          <Typography variant="h1">{data.temp}</Typography>
        </Grid>
        <Grid item className={classes.item}>
          <Typography variant="subtitle1" gutterBottom>{`${
            city.name
          }, ${countryName}`}</Typography>
          <Typography variant="subtitle1" gutterBottom>
            <Moment format="ddd">{data.date}</Moment>
            {", "}
            <Moment format="D MMM YYYY h:mma">{data.date}</Moment>
            {" MYT"}{" "}
            {/** Unable to find out how to get Malaysia Time abbreviation*/}
          </Typography>
          <Typography variant="subtitle1">{data.weather}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

WeatherPaper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeatherPaper);
