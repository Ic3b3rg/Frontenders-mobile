import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import { Icon, useTheme } from "@rneui/themed";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const {theme} = useTheme()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary ,
        tabBarInactiveBackgroundColor: theme.colors.background,
        tabBarActiveBackgroundColor: theme.colors.background,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="challange"
        options={{
          title: "Challange",
          tabBarIcon: ({ color }) => (
            <Icon
              name={"sword-cross"}
              type="material-community"
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
