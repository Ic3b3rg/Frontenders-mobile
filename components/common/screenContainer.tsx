import React from "react";
import { View } from "../Themed";

export default function ScreenContainer({ children }: PropsWithChildren<any>) {
  return (
    <View
      style={{
        paddingTop: 40,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 80,
      }}
    >
      {children}
    </View>
  );
}
