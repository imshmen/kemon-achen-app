import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '../../config';
import { H6Bold } from '../../styles';

function ScreenTitleComponent({ screenName }) {
  return (
    <View style={styles.container}>
      <H6Bold>{screenName}</H6Bold>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.white,
    flexDirection: 'row',
    height: 64,
    padding: 16,
  },
});

export default ScreenTitleComponent;
