import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  }
};

function WeatherBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <ToolBar>
          <Typography variant="h6" color="inherit">
            Weather
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
}

WeatherBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeatherBar);
