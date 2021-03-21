import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import RNLocation from 'react-native-location';
import Geolocation from '@react-native-community/geolocation';

RNLocation.configure({
  distanceFilter: 0,
});

const Location = ({getWeatherByLocation}) => {
  const permissionHandle = async () => {
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });

    if (permission) {
      getLocation();
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(position => {
      getWeatherByLocation(position.coords.latitude, position.coords.longitude);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={permissionHandle}>
        <Text style={styles.text}>
          Check the weather on your current location.
        </Text>
        <MIcon size={108} name="location-on" style={styles.locationIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
  },
  locationIcon: {
    alignSelf: 'center',
  },
});

export default Location;
