const intialWeather = {
  weather: {},
  isPending: true,
  error: ""
};

const requestWeather = (state = intialWeather, action = {}) => {
  switch (action.type) {
    case "REQUEST_WEATHER_PENDING":
      return Object.assign({}, state, { isPending: true });
    case "REQUEST_WEATHER_SUCCESS":
      return Object.assign({}, state, {
        weather: action.payload,
        isPending: false
      });
    case "REQUEST_WEATHER_FAILED":
      return Object.assign({}, state, {
        isPending: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default requestWeather;
