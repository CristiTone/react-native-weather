import React, {createContext} from 'react';
import {useGetWeather} from '../network/weather';

export const initialState = {
  currentCity: '',
  loading: false,
  weather: null,
  forecast: null,
  error: null,
};

export const Context = createContext(initialState);

const Store = ({children}) => {
  const [
    state,
    getWeather,
    getForecast,
    getWeatherByLocation,
  ] = useGetWeather();
  return (
    <Context.Provider
      value={[state, getWeather, getForecast, getWeatherByLocation]}>
      {children}
    </Context.Provider>
  );
};

export default Store;
