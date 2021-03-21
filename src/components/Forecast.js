import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import Loading from './Loading';

const Forecast = ({loading, forecast}) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {forecast.map((weather, index) => {
          const {
            dt_txt,
            main: {temp},
            weather: weatherDescription,
          } = weather;
          const {main, icon} = weatherDescription[0];
          const hour = dt_txt.substring(11, 16);
          const day = dt_txt.substring(5, 10).replace('-', '/');

          return (
            <View key={index} style={styles.forecastContainer}>
              <View style={styles.day}>
                <Image
                  style={styles.weatherIcon}
                  source={{
                    uri: `https://openweathermap.org/img/w/${icon}.png`,
                  }}
                />
                <Text style={styles.dayText}>{`${day} ${hour} - ${main}`}</Text>
              </View>
              <View style={styles.temperature}>
                <Text style={styles.dayText}>{Math.round(temp)}&#8451;</Text>
              </View>
            </View>
          );
        })}
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{height: 80}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  forecastContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-around',
    padding: 8,
  },
  weatherIcon: {
    height: 40,
    width: 40,
    marginRight: 8,
  },
  day: {
    flexDirection: 'row',
    flex: 5,
    alignItems: 'center',
  },
  temperature: {
    alignSelf: 'center',
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
  },
  dayText: {
    fontSize: 24,
  },
});

export default Forecast;
