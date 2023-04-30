import { ScrollView, StyleSheet } from "react-native";

import { Text } from "@rneui/themed";
import { useState, useEffect } from "react";
import { RepositoryCard } from "../../../components/repositoryCard";
import { apiService } from "../../../services/apiService";
import { RepositoryList } from "../../../types/apiService";
import { RepositoryCardList } from "../../../types/tabs";
import { View } from "../../../components/Themed";
import ScreenContainer from "../../../components/common/screenContainer";
import SkeletonCustomGroup from "../../../components/common/Skeleton";
import { useGetAllReposQuery } from "../../../services/repos.query";

export default function Home() {
  const { data: repositories, error, isLoading } = useGetAllReposQuery();

  return (
    <>
      <ScreenContainer>
        <Text h3 style={{ color: "#def249" }}>
          Welcome to Fronteders Community App
        </Text>
        {!repositories || isLoading ? (
          <SkeletonCustomGroup repeat={5} />
        ) : (
          <ScrollView>
            <View style={styles.container}>
              {repositories.map(({ name, created_at, id, url }) => (
                <RepositoryCard
                  key={id}
                  name={name}
                  id={id}
                  created_at={created_at}
                  url={url}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </ScreenContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 8,
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
