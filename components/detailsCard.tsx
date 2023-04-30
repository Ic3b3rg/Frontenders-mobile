import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { View } from './Themed';

export default function DetailCard({children}:PropsWithChildren) {
  return (
    <View style={styles.container}>
        {children}
     </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(33, 43, 51, 0.9)",
      borderRadius: 14,
      minHeight: 100,
      width: '100%'
    },
  });
  