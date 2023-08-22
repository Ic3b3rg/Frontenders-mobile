import { useTheme} from "@rneui/themed";
import React from "react";
import { View } from "react-native";

export default function ScreenContainer({ children }: PropsWithChildren<any>) {
  const {theme} = useTheme();

  return (
    <View
      style={{
        paddingTop: 40,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        height: '100%',
        backgroundColor: theme.colors.background
      }}
    >
      {children}
    </View>
  );
}
