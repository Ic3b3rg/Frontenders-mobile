import React, { useEffect } from "react";
import { Card, Text, Button, Skeleton } from "@rneui/themed";
import { RepositoryCardInterface } from "../types/tabs";
import { StyleSheet } from "react-native";
import FlexContainer from "./common/flexContainer";
import { deleteDashFromString, formatDate } from "../utils/utils";
import { useLinkTo } from "@react-navigation/native";
import { useGetProgrammingLanguagesFromRepoQuery, useGetReposByNameQuery } from "../services/repos.query";

export function RepositoryCard({
  id,
  name,
  created_at,
}: RepositoryCardInterface) {
  const { data: repo, error, isLoading } = useGetReposByNameQuery(name);
  const { data: languages} = useGetProgrammingLanguagesFromRepoQuery(name);
  const linkTo = useLinkTo()

  const navigateTo= (href:string)=>{
    // linkTo(href)
    
  }

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
      
        <Button size="sm" type="outline" color="primary" onPress={()=>navigateTo('/home/' + name)}>
          Go To Details
        </Button>
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
