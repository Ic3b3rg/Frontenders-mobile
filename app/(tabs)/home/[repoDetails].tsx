import { ScrollView, StyleSheet } from "react-native";

import { Divider, Icon, useTheme } from "@rneui/themed";
import { Stack, useSearchParams } from "expo-router";
import DetailsCard from "../../../components/detailsCard";
import FlexContainer from "../../../components/common/FlexContainer";
import { ExternalLink } from "../../../components/ExternalLink";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useGetProgrammingLanguagesFromRepoQuery,
  useGetReposByNameQuery,
} from "../../../services/repos.query";
import ScreenContainer from "../../../components/common/ScreenContainer";
import { useGetReadMeByNameQuery } from "../../../services/readME.query";
import FeText from "../../../components/common/FeText";
import { deleteDashFromString } from "../../../utils/utils";

export default function RepoDetails() {
  const { repoDetails } = useSearchParams<{ repoDetails: string }>();
  const { data: repo, error, isLoading } = useGetReposByNameQuery(repoDetails);
  const { data: languages } =
    useGetProgrammingLanguagesFromRepoQuery(repoDetails);
  const readme = useGetReadMeByNameQuery(repoDetails);
  const { theme } = useTheme();
  //TODO  Create no found repo details component
  if (!repo) {
    return <></>;
  }
  return (
    <ScreenContainer>
      <Stack.Screen options={{ headerShown: false }} />
      <FeText h3>✨ {deleteDashFromString(repo.name)} ✨</FeText>

      <ScrollView>
        <FlexContainer gap={16} flexDirection="column">
          <DetailsCard outline>
            <FlexContainer flexDirection="row" justifyContent="space-around" style={{width:'100%'}}>
              <FlexContainer flexDirection="column" alignItems="center">
                <FeText>{"star".toUpperCase()}</FeText>
                <Icon name={"star"} />
                <FeText>{repo.stargazers_count.toString()}</FeText>
              </FlexContainer>
              <FlexContainer flexDirection="column" alignItems="center">
                <FeText>{"watcher".toUpperCase()}</FeText>
                <Icon name={"visibility"} />
                <FeText>{repo.watchers_count.toString()}</FeText>
              </FlexContainer>
              <ExternalLink href={repo.html_url} style={{ margin: 0 }}>
                <FlexContainer flexDirection="column" alignItems="center">
                  <FeText>{"check the code".toUpperCase()}</FeText>
                  <MaterialCommunityIcons
                    name="github"
                    size={24}
                    color="black"
                  />
                  <FeText>{"CLICK HERE".toUpperCase()}</FeText>
                </FlexContainer>
              </ExternalLink>
            </FlexContainer>
          </DetailsCard>
          <FlexContainer flexDirection="row" gap={16}>
            <DetailsCard outline>
              <FeText>{"languages".toUpperCase()}</FeText>
              <Icon name={"code"} />
              {languages?.map((el, i) => (
                <FeText key={"language" + i}>
                  {el.language.toString()} - {el.avg.toString()}%
                </FeText>
              ))}
            </DetailsCard>
          </FlexContainer>
          <Divider
            color={theme.colors.text}
            style={{ backgroundColor: "red", width: "100%" }}
          />
          <FeText h4>Readme 📝</FeText>
          <DetailsCard>
            {readme && <FeText>{readme?.error as string}</FeText>}
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
