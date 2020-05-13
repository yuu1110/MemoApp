import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appber from './src/components/Appber';
import LoginScreen from './src/screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appber />
        <LoginScreen />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});
