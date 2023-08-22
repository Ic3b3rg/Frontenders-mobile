import { ScrollView, View } from "react-native";

import { Text, makeStyles, useTheme } from "@rneui/themed";
import { RepositoryCard } from "../../../components/repositoryCard";

import SkeletonCustomGroup from "../../../components/common/Skeleton";
import { useGetAllReposQuery } from "../../../services/repos.query";
import ScreenContainer from "../../../components/common/screenContainer";

export default function Home() {
  const { data: repositories, error, isLoading } = useGetAllReposQuery();
  const styles = useStyles();
  const { theme } = useTheme();
  return (
    <>
      <ScreenContainer>
        <Text h3 style={{ color: theme.colors.text, textAlign: "center" }}>
          👩‍💻 Fronteders Mobile 👨‍💻
        </Text>
        {!repositories || isLoading ? (
          <SkeletonCustomGroup repeat={6} />
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

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
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
}));
