import { Icon, Input } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";

interface InputCustomInterface {
  value: string;
  setValue: (value: string) => void;
  removeValue?: () => void;
}
export default function InputCustom(
  props: InputCustomInterface
) {

  return (
    <View style={styles.inputContainer}>
      <Input
        placeholder="Inserisci il testo qui"
        value={props.value?.toString()}
        onChangeText={props.setValue}
        leftIcon={
          <Icon name="pencil" type="material-community" color="#def249" />
        }
        rightIcon={
          <Icon name="check-circle" type="material-community" color="#def249" />
        }
        inputStyle={styles.input}
        inputContainerStyle={styles.inputContainerStyle}
        maxLength={24}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#def249",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  input: {
    fontSize: 18,
    color: "#000",
    fontWeight: "500",
  },
});
