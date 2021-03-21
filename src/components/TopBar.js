import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, TextInput, View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const TopBar = ({getWeather, navigateToHistory}) => {
  const [city, setCity] = useState('');

  const handleChange = event => {
    setCity(event);
  };

  const handlePress = () => {
    getWeather(city);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <MIcon size={48} name="search" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={handleChange}
        placeholder="Search a city ..."
        clearTextOnFocus
      />
      <TouchableOpacity style={styles.button} onPress={navigateToHistory}>
        <MIcon size={48} name="history" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 24,
    padding: 8,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: 48,
    height: 48,
    margin: 10,
  },
});

export default TopBar;
