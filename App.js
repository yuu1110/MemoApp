import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appber from './src/components/Appber';
import MemoListScreen from './src/screens/MemoListScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appber />
        <MemoListScreen />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
