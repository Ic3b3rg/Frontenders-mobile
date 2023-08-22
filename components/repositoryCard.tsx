import React from "react";
import {
  Card,
  Button,
  makeStyles,
  Icon,
  useTheme,
  Chip,
  useThemeMode,
} from "@rneui/themed";
import { RepositoryCardInterface } from "../types/tabs";

import FlexContainer from "./common/FlexContainer";
import { deleteDashFromString, formatDate, truncate } from "../utils/utils";
import { useLinkTo } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { selectFavouriteById } from "../store/favourites/favouritesSelector";

import HeartIcon from "./common/HeartAnimation";
import { handleFavourite } from "../store/favourites/favouritesSlice";
import FeText from "./common/FeText";
import {
  useGetProgrammingLanguagesFromRepoQuery,
  useGetReposByNameQuery,
} from "../services/repos.query";
import { useGetReadMeByNameQuery } from "../services/readME.query";
import { LinearGradient } from "expo-linear-gradient";

export function RepositoryCard({
  id,
  name,
  created_at,
}: RepositoryCardInterface) {
  const styles = useStyles();
  const { theme } = useTheme();
  const isFavourite = useSelector(selectFavouriteById(id));
  const dispatch = useDispatch();
  const { data: repo, error, isLoading } = useGetReposByNameQuery(name);
  const { error: readme } = useGetReadMeByNameQuery(name);
  const { data: languages } = useGetProgrammingLanguagesFromRepoQuery(name);
  const linkTo = useLinkTo();
  const navigateTo = (href: string) => {
    // linkTo(href)
    console.log(readme?.toString());
  };
  const extractTextFromMarkdown = (markdown: string): string => {
    if (!markdown) return "";
    const regex = /## Challenge #(\d+) - (.+)(?:\r?\n){1,2}(.*)/i;
    const match = markdown.match(regex);

    if (match && match[3]) {
      return match[3].trim();
    } else {
      return "No Description";
    }
  };

  return (
    <Card
      wrapperStyle={styles.wrapperStyle}
      containerStyle={styles.containerStyle}
    >
      <FlexContainer gap={12} flexDirection="column">
        {/* last update section */}
        <FlexContainer
          flexDirection={"row"}
          alignItems="center"
          justifyContent="flex-end"
          gap={8}
        >
          <FeText style={styles.calendar}>📆 {formatDate(created_at)}</FeText>
        </FlexContainer>
        <FeText h4>{deleteDashFromString(name)}</FeText>
        {/* Programming Languages Chips */}
        <FlexContainer
          flexDirection={"row"}
          alignItems="center"
          gap={8}
          style={styles.languagesContainer}
        >
          {languages?.map(({ language }, i) => (
            <Chip
              // color={'accent'}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: [theme.colors.accent, "pink"],
                start: { x: 0, y: 0.8 },
                end: { x: 1, y: 0.7 },
              }}
              size="sm"
              key={`language-chip-${i}`}
              title={"🦄 " + language.toString()}
              titleStyle={{ color: theme.colors.white }}
            />
          ))}
        </FlexContainer>
        <FeText>
          {truncate(extractTextFromMarkdown(readme as string), 150)}
        </FeText>
      </FlexContainer>
      <FlexContainer
        gap={8}
        justifyContent="space-between"
        style={{ paddingTop: 8 }}
      >
        <Button
          size="sm"
          radius="md"
          type="outline"
          color="primary"
          onPress={() => navigateTo("/home/" + name)}
          containerStyle={{
            width: "80%",
            backfaceVisibility: "hidden",
          }}
          titleStyle={styles.buttonStyle}
        >
          Go To Details
        </Button>
        <Button
          radius="md"
          size="md"
          type="outline"
          color="transparent"
          onPress={() => dispatch(handleFavourite({ id, name }))}
        >
          <HeartIcon filled={isFavourite} />
        </Button>
      </FlexContainer>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperStyle: {
    width: "100%",
  },
  containerStyle: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  buttonStyle: {
    color: theme.colors.primary,
    fontWeight: "700",
  },
  calendar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  languagesContainer: {
    paddingVertical: 8,
    flexWrap: "wrap",
  },
}));
