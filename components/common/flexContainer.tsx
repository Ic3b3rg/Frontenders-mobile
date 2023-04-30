import React from "react";
import { FlexAlignType,View } from "react-native";

export interface FlexContainerInterface {
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  alignItems?: FlexAlignType | undefined;
  gap?: number;
  style?: StyleSheet;
}
export default function FlexContainer({
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  gap = 0,
  style,
  children,
}: PropsWithChildren<FlexContainerInterface>) {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        alignItems,
        gap,
        justifyContent,
        flexDirection,
        ...style
      }}
    >
      {children}
    </View>
  );
}
