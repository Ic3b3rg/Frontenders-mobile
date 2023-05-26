import { ScrollView, StyleSheet } from "react-native";

import { Icon, Text } from "@rneui/themed";
import { Stack, useSearchParams } from "expo-router";
import { View } from "../../../components/Themed";
import DetailsCard from "../../../components/detailsCard";
import FlexContainer from "../../../components/common/FlexContainer";
import { ExternalLink } from "../../../components/ExternalLink";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetProgrammingLanguagesFromRepoQuery, useGetReposByNameQuery } from "../../../services/repos.query";
import ScreenContainer from "../../../components/common/ScreenContainer";
import { useGetReadMeByNameQuery } from "../../../services/readME.query";

export default function RepoDetails() {
  const { repoDetails } = useSearchParams<{ repoDetails: string }>();
  const { data: repo, error, isLoading } = useGetReposByNameQuery(repoDetails);
  const { data: languages} = useGetProgrammingLanguagesFromRepoQuery(repoDetails);
  const readme = useGetReadMeByNameQuery(repoDetails);

  //TODO  Create no found repo details component
  if (!repo) {
    return <></>;
  }
  return (
    <ScreenContainer>
      <Stack.Screen options={{headerShown:false }} />

        <ScrollView>
          <FlexContainer gap={16} flexDirection="column">
            <FlexContainer flexDirection="row" gap={16}>
              <DetailsCard>
                <Text>{"star".toUpperCase()}</Text>
                <Icon name={"star"} />
                <Text>{repo.stargazers_count.toString()}</Text>
              </DetailsCard>
              <DetailsCard>
                <Text>{"watcher".toUpperCase()}</Text>
                <Icon name={"visibility"} />
                <Text>{repo.watchers_count.toString()}</Text>
              </DetailsCard>
            </FlexContainer>
            <FlexContainer flexDirection="row" gap={16}>
              <DetailsCard>
                <Text>{"languages".toUpperCase()}</Text>
                <Icon name={"code"} />
                {
                
                languages?.map((el, i )=><Text key={'language'+ i}>{el.language.toString()} - {el.avg.toString()}%</Text>)
                }
              </DetailsCard>
              <ExternalLink href={repo.html_url} style={{ margin: 0 }}>
                <DetailsCard>
                  <Text>{"check the code".toUpperCase()}</Text>
                  <MaterialCommunityIcons
                    name="github"
                    size={24}
                    color="black"
                  />
                  <Text>{"CLICK HERE".toUpperCase()}</Text>
                </DetailsCard>
              </ExternalLink>
            </FlexContainer>
            <DetailsCard>
              {readme && <Text>{readme?.error as string}</Text>}
            </DetailsCard>
          </FlexContainer>
        </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
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
