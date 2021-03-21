import React, {useContext} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import History from '../components/History';
import {Context} from '../context/store';

const HistoryScreen = ({navigation}) => {
  const [{forecast, loading}] = useContext(Context);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}>
        <MIcon size={48} name="arrow-back" />
      </TouchableOpacity>
      <History />
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

export default HistoryScreen;
