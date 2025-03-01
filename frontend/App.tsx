import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';

const App = () => {
  useEffect(() => {
    console.log('hello world');
  }, []);

  return (
    <SafeAreaView style={styles.wrap}>
      <View>
        <Text style={styles.test}>test</Text>
        <TouchableOpacity />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  test: {
    color: 'red',
  },
  wrap: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default App;
