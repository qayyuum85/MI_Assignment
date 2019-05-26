const requestWeather = () => dispatch => {
  dispatch({ type: "REQUEST_WEATHER_PENDING" });
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?id=1733046&APPID=f3b6e817d153f3b8a6015c7baba48a51&units=metric"
  )
    .then(response => response.json())
    .then(data => dispatch({ type: "REQUEST_WEATHER_SUCCESS", payload: data }))
    .catch(error =>
      dispatch({ type: "REQUEST_WEATHER_FAILED", payload: error })
    );
};

export default requestWeather;
