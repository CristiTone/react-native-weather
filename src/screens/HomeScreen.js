import React, {useContext, useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Context} from '../context/store';
import Location from '../components/Location';
import TopBar from '../components/TopBar';
import Weather from '../components/Weather';
import {weatherConditions} from '../components/WeatherConditions';

const HomeScreen = ({navigation}) => {
  const [
    {weather, currentCity, loading, error},
    getWeather,
    getForecast,
    getWeatherByLocation,
  ] = useContext(Context);

  useEffect(() => {
    if (error) {
      Alert.alert('Something went wrong', error.message);
    }
  }, [error]);

  return (
    <View
      style={
        (styles.container,
        {
          backgroundColor: weather
            ? weatherConditions[weather.weather[0].main].color
            : '#d8dce6',
        })
      }>
      <TopBar
        getWeather={getWeather}
        navigateToHistory={() => navigation.navigate('History')}
      />
      {weather ? (
        <Weather
          currentCity={currentCity}
          loading={loading}
          weather={weather}
          getForecast={() => getForecast(currentCity)}
          navigateToForecast={() => navigation.navigate('Forecast')}
        />
      ) : (
        <Location getWeatherByLocation={getWeatherByLocation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default HomeScreen;
