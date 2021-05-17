import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../config';
import { Body1 } from '../../styles';

function BottomBar1({
  onLikePress = null,
  onCommentPress = null,
  onSharePress = null,
  likeCount,
  commentCount,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWithText}>
        <TouchableOpacity onPress={onLikePress}>
          <MaterialCommunityIcons
            name="arrow-up-bold-outline"
            size={28}
            color={theme.grey5}
          />
        </TouchableOpacity>
        <Body1 color="grey5" ml="4px">
          {likeCount}
        </Body1>
      </View>
      <View style={styles.iconWithText}>
        <TouchableOpacity onPress={onCommentPress}>
          <MaterialCommunityIcons
            name="comment-outline"
            size={28}
            color={theme.grey5}
          />
        </TouchableOpacity>
        <Body1 color="grey5" ml="4px">
          {commentCount}
        </Body1>
      </View>
      <View style={styles.iconWithText}>
        <TouchableOpacity onPress={onSharePress}>
          <MaterialCommunityIcons
            name="share-outline"
            size={28}
            color={theme.grey5}
          />
        </TouchableOpacity>
        <Body1 color="grey5" ml="4px">
          Share
        </Body1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.lightGrey,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 4,
    width: '100%',
  },
  iconWithText: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default BottomBar1;
