import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';
import Loading from './Loading';

const Weather = ({
  loading,
  weather,
  currentCity,
  getForecast,
  navigateToForecast,
}) => {
  const {
    main: {temp, feels_like, humidity, pressure, temp_max, temp_min},
    wind: {speed},
    weather: weatherDescription,
  } = weather;
  const {main, icon} = weatherDescription[0];

  const handleForecast = () => {
    getForecast();
    navigateToForecast();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{currentCity}</Text>
      <Text style={styles.text}>{Math.round(temp)}&#8451;</Text>
      <Image
        style={styles.weatherIcon}
        source={{
          uri: `https://openweathermap.org/img/w/${icon}.png`,
        }}
      />
      <Text style={styles.text}>{main}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.detailsText}>
            Feels like: {Math.round(feels_like)}&#8451;
          </Text>
          <Text style={styles.detailsText}>
            Max temperature: {Math.round(temp_max)}&#8451;
          </Text>
          <Text style={styles.detailsText}>
            Min temperature: {Math.round(temp_min)}&#8451;
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsText}>Humidity: {humidity}%</Text>
          <Text style={styles.detailsText}>Pressure: {pressure}mbar</Text>
          <Text style={styles.detailsText}>Wind speed: {speed}km/h</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleForecast} style={styles.forecastButton}>
        <Text style={styles.buttonText}>4-day forecast</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    marginTop: 32,
  },
  text: {
    fontSize: 64,
    textAlign: 'center',
  },
  weatherIcon: {
    height: 64,
    width: 64,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 32,
    width: '95%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 20,
    opacity: 0.7,
  },
  details: {
    padding: 8,
  },
  detailsText: {
    padding: 16,
    fontWeight: '600',
  },
  forecastButton: {
    backgroundColor: 'lightgrey',
    height: 48,
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
  city: {
    fontSize: 32,
    marginBottom: 32,
  },
});

export default Weather;
