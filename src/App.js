import React, { Component } from "react";
import WeatherBar from "./components/TitleBar";
import WeatherItem from "./components/WeatherItem";
import WeatherCard from "./components/WeatherCard";
import requestWeather from "./action";
import { connect } from "react-redux";
import Progress from "./components/Progress";
import ErrorBoundary from "./components/ErrorBoundary";

const mapStateToProps = state => {
  let containDate = [];
  let filteredData = [];
  let city = {};
  if (state.weather.cod && state.weather.cod === "200") {
    filteredData = state.weather.list.filter(d => {
      const currentDate = d.dt_txt.split(" ")[0];
      if (containDate.includes(currentDate)) {
        return false;
      }
      containDate.push(currentDate);
      return true;
    });

    city = state.weather.city;
  }

  return {
    weather: filteredData,
    city: city,
    isPending: state.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestWeather: () => dispatch(requestWeather())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestWeather();
  }

  render() {
    const { weather, isPending, city } = this.props;
    if (isPending) {
      return (
        <div>
          <WeatherBar />
          <Progress />
        </div>
      );
    } else {
      return (
        <div>
          <WeatherBar />
          <ErrorBoundary>
            <WeatherCard currentWeather={weather[0]} city={city} />
            <WeatherItem weather={weather} />
          </ErrorBoundary>
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
