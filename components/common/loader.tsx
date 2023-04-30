import { Button } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Loader() {
  return (
    <View style={style.container}>
      <Button style={style.button} title="outline" type="outline" loading />
     </View>
  );
}

const style = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%'
    },
    button: {
        width:"100%",
        height:"100%"
    }



})
