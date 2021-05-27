import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { theme } from '../../config';

function ImageHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundBanner}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://picsum.photos/200' }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundBanner: {
    width: '100%',
    height: 72,
    backgroundColor: theme.primary,
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    backgroundColor: theme.white,
    flexDirection: 'row',
    width: '100%',
    height: 107,
  },
  image: {
    height: 72,
    width: 72,
    borderRadius: 36,
  },
  imageContainer: {
    justifyContent: 'center',
    marginTop: 42,
  },
  header: {
    flexDirection: 'row',
  },
});

export default ImageHeader;
