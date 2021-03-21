import axios from 'axios';
import {useReducer} from 'react';
import reducer from '../context/reducer';
import {initialState} from '../context/store';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '69518b1f8f16c35f8705550dc4161056';
const UNITS = 'metric';
let forecastCache = null;

const useGetWeather = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getWeather = async city => {
    dispatch({type: 'GET_WEATHER'});
    try {
      const {
        data: {main, weather, wind},
      } = await axios.get(WEATHER_URL, {
        params: {
          appid: API_KEY,
          units: UNITS,
          q: city,
        },
      });

      dispatch({type: 'SET_CITY', payload: city});

      dispatch({
        type: 'WEATHER_SUCCESS',
        payload: {main, weather, wind},
      });
    } catch (error) {
      dispatch({
        type: 'GET_FAIL',
        payload: error.response.data,
      });
    }
  };

  const getForecast = async city => {
    dispatch({type: 'GET_WEATHER'});

    try {
      if (!forecastCache || forecastCache.city.name !== city) {
        const {data} = await axios.get(FORECAST_URL, {
          params: {
            appid: API_KEY,
            units: UNITS,
            q: city,
          },
        });
        forecastCache = data;
      }

      dispatch({
        type: 'FORECAST_SUCCESS',
        payload: forecastCache.list,
      });
    } catch (error) {
      dispatch({
        type: 'GET_FAIL',
        payload: error.response.data,
      });
    }
  };

  const getWeatherByLocation = async (lat, lon) => {
    dispatch({type: 'GET_WEATHER'});

    try {
      const {
        data: {main, weather, wind, name},
      } = await axios.get(WEATHER_URL, {
        params: {
          appid: API_KEY,
          units: UNITS,
          lat,
          lon,
        },
      });

      dispatch({type: 'SET_CITY', payload: name});

      dispatch({
        type: 'WEATHER_SUCCESS',
        payload: {main, weather, wind},
      });
    } catch (error) {
      dispatch({
        type: 'GET_FAIL',
        payload: error.response.data,
      });
    }
  };
  return [state, getWeather, getForecast, getWeatherByLocation];
};

export {useGetWeather};
