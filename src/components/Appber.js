import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appber extends React.Component {
  render() {
    return (
      <View style={styles.appber}>
        <View>
          <Text style={styles.appberTitle}>MEMOT</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  appber: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 78,
    padding: 30,
    marginTop: 0,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { wudth: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appberTitle: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Appber;
