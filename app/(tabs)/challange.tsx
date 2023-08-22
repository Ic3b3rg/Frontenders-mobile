import { StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import ScreenContainer from "../../components/common/screenContainer";

export default function ChallangeScreen() {
  return (
    <>
      <ScreenContainer>
        <Text h3 style={{ color: "#def249", textAlign: "center" }}>
          challange
        </Text>
      </ScreenContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
