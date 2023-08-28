import { StyleSheet } from "react-native";
import { Button, Text, useTheme } from "@rneui/themed";

import { Avatar, Icon, Input } from "@rneui/themed";
import InputCustom from "../../components/common/InputCustom";

import useAsyncStorage from "../../hooks/useAsyncStorage";
import { ListItem } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { selectAllFavourite } from "../../store/favourites/favouritesSelector";
import { handleFavourite } from "../../store/favourites/favouritesSlice";
import ScreenContainer from "../../components/common/ScreenContainer";
import FlexContainer from "../../components/common/FlexContainer";

export default function TabTwoScreen() {
  const {
    value: user,
    setValue: setUserName,
    removeValue: removeUser,
  } = useAsyncStorage<string>({
    key: "username",
    initialValue: "",
  });

  const allFavourites = useSelector(selectAllFavourite);
  const dispatch = useDispatch();
  const { theme } = useTheme();

  return (
    <>
      <ScreenContainer>
        <Text h3 style={{ color: theme.colors.text, textAlign: "center" }}>
          User Profile
        </Text>
        <FlexContainer
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
          gap={16}
          style={{ marginTop: 10 }}
        >
          <Avatar
            size={50}
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            containerStyle={{ backgroundColor: "#9700b9" }}
          />
          <InputCustom value={user ?? ""} setValue={setUserName} />
        </FlexContainer>
        <Text
          h3
          style={{
            color: theme.colors.text,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Favourites
        </Text>
        {allFavourites.map(({ id, name }) => (
          <ListItem.Swipeable
            key={id}
            leftContent={(reset) => (
              <Button
                title="Info"
                onPress={() => reset()}
                icon={{ name: "info", color: "white" }}
                buttonStyle={{ minHeight: "100%" }}
              />
            )}
            rightContent={(reset) => (
              <Button
                title="Delete"
                onPress={() => dispatch(handleFavourite({ id, name }))}
                icon={{ name: "delete", color: "white" }}
                buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
              />
            )}
          >
            <Icon name="heart" type="material-community" color="#f50" />
            <ListItem.Content>
              <ListItem.Title>{name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
        ))}
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
