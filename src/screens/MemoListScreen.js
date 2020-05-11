import React from 'react';
import { View } from 'react-native';

import Appber from '../components/Appber';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render() {
    return (
      <View>
        <Appber />
        <MemoList />
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

export default MemoListScreen;
