import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { onPress } = this.props
    return (
      <TouchableHighlight style={styles.container} onPress={onPress}>
        <View style={styles.circleButton}>
          <Text style={styles.circleButtonTitle}>
            {this.props.children}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 48,
    height: 48,
    bottom: 32,
    right: 32,
  },
  circleButton: {
    backgroundColor: '#E31676',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 24,
  },
});

export default CircleButton;
