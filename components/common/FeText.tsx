import { useTheme, Text, TextProps } from "@rneui/themed";
import { PropsWithChildren } from "react";

export default function FeText(
  props: PropsWithChildren<TextProps> & { color?: string }
) {
  const { theme } = useTheme();

  return (
    <Text {...props} style={{ color: props.color ?? theme.colors.text }}>
      {props.children}
    </Text>
  );
}
