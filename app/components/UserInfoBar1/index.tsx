import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../config';
import { Body1, Body1Bold, Caption } from '../../styles';

function UserInfoBar1({ username, communityName, postedAgo }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://picsum.photos/seed/${username}/300`,
        }}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.text}>
          <Body1>Community</Body1>
          <Entypo name="dot-single" size={16} />
          <Body1Bold>{communityName}</Body1Bold>
        </View>
        <View style={styles.text}>
          <Caption color="grey5">Posted By {username}</Caption>
          <Entypo name="dot-single" size={16} />
          <Caption>{postedAgo}</Caption>
        </View>
      </View>
      <TouchableOpacity style={{ marginLeft: 'auto' }}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="dots-horizontal"
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.white,
    flexDirection: 'row',
    padding: 8,
    width: '100%',
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 8,
  },
  icon: {
    marginLeft: 'auto',
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: theme.blue,
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 8,
    alignItems: 'center',
  },
});

export default UserInfoBar1;
