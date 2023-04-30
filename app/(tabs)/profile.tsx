import { StyleSheet } from 'react-native';

import ScreenContainer from '../../components/common/screenContainer';
import {Text} from "react-native"
export default function TabTwoScreen() {
  return (
    <>
      <ScreenContainer>
        <Text style={{ color: "#def249" }}>
          Welcome to Fronteders Community App
        </Text>

      </ScreenContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
