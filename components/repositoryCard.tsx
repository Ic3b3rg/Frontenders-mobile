import React, { useEffect } from "react";
import { Card, Text, Button, Skeleton, Icon } from "@rneui/themed";
import { RepositoryCardInterface } from "../types/tabs";
import { StyleSheet } from "react-native";
import FlexContainer from "./common/FlexContainer";
import { deleteDashFromString, formatDate } from "../utils/utils";
import { useLinkTo } from "@react-navigation/native";
import {
  useGetProgrammingLanguagesFromRepoQuery,
  useGetReposByNameQuery,
} from "../services/repos.query";
import { useDispatch, useSelector } from "react-redux";
import { selectFavouriteById } from "../store/favourites/favouritesSelector";

import HeartAnimation from "./common/HeartAnimation";
import { handleFavourite } from "../store/favourites/favouritesSlice";

export function RepositoryCard({
  id,
  name,
  created_at,
}: RepositoryCardInterface) {

  const isFavourite = useSelector(selectFavouriteById(id));
  const dispatch = useDispatch()
  const { data: repo, error, isLoading } = useGetReposByNameQuery(name);
  const { data: languages } = useGetProgrammingLanguagesFromRepoQuery(name);
  const linkTo = useLinkTo();
  const navigateTo = (href: string) => {
    // linkTo(href)
  };

  return (
    <Card
      wrapperStyle={styles.wrapperStyle}
      containerStyle={styles.containerStyle}
    >
      <FlexContainer
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text h4>{deleteDashFromString(name)}</Text>
        <Text>{formatDate(created_at)}</Text>
      </FlexContainer>

      <Text>adjective</Text>
      <Text>well meaning and kindly.</Text>
      <FlexContainer gap={8} justifyContent="space-between" style={{paddingTop: 8}}>
        <Button
          size="sm"
          radius="sm"
          type="outline"
          color="primary"
          onPress={() => navigateTo("/home/" + name)}
          containerStyle={{
            width: '80%',
          }}
        >
          Go To Details
        </Button>
        <Button radius="sm" size="sm" type="clear" color="transparent" onPress={()=> dispatch(handleFavourite({id, name}))}>
          <HeartAnimation filled={isFavourite}/>
        </Button>
      </FlexContainer>
    </Card>
  );
}

const styles = StyleSheet.create({
  wrapperStyle: {
    width: "100%",
  },
  containerStyle: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#def249",
  },
});
