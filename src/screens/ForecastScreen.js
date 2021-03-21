import React, {useContext} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Forecast from '../components/Forecast';
import {Context} from '../context/store';

const ForecastScreen = ({navigation}) => {
  const [{forecast, loading}] = useContext(Context);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}>
        <MIcon size={48} name="arrow-back" />
      </TouchableOpacity>
      <Forecast forecast={forecast} loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d8dce6',
  },
  backButton: {
    margin: 16,
    width: 48,
  },
});

export default ForecastScreen;
