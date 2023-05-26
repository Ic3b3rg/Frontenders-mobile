import { Icon } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native';

const HeartIcon = ({ size= 24, filled }: { size?: number, filled: boolean }) => {
  const [scale, setScale] = useState(new Animated.Value(1));

  useEffect(() => {
    if (filled) {
      Animated.timing(scale, {
        toValue: 1.4,
        duration: 200,
        useNativeDriver: true,
      }).start()
      setTimeout(() => {
          Animated.timing(scale, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
      }, 200);
    } else {
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [filled]);



  const heartStyle = {
    transform: [{ scale }],
  };

  return (
      <Animated.View style={[styles.heartContainer, heartStyle]}>
        <Icon
          name={filled ? 'heart' : 'heart-outline'}
          type="material-community"
          color={filled ? '#f00' : '#000'}
          size={size}
        />
      </Animated.View>
  );
};

const styles = StyleSheet.create({
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeartIcon;
