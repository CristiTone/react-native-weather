import {initialState} from './store';

const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        currentCity: action.payload,
      };
    case 'GET_WEATHER':
      return {
        ...state,
        loading: true,
      };
    case 'WEATHER_SUCCESS':
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };
    case 'FORECAST_SUCCESS':
      return {
        ...state,
        loading: false,
        forecast: action.payload,
      };
    case 'GET_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
