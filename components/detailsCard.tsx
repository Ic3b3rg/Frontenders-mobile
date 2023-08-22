import { makeStyles } from '@rneui/themed';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

interface DetailCardInterface{
  outline?:boolean;
}
export default function DetailCard({children, outline = false}:PropsWithChildren<DetailCardInterface>) {
  const styles = useStyles({outline});
  return (
    <View style={styles.container}>
        {children}
     </View>
  );
}

const useStyles = makeStyles((theme,props: {outline:boolean})=>({
    container: {
      flex: 1,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props.outline ? theme.colors.white :theme.colors.backgroundSecondary,
      borderRadius: 14,
      borderColor:theme.colors.backgroundSecondary,
      borderWidth: props.outline ? 2: 0,
      minHeight: 100,
      width: '100%'
    },
  }));
  