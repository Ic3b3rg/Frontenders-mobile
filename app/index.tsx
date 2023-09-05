import { Redirect } from "expo-router";
import messaging from "@react-native-firebase/messaging";
import { useEffect } from "react";

export default function Index() {
  const requestPermissionUser = async () => {
    console.log("yes");
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };
  useEffect(() => {
    (async () => await requestPermissionUser())();
  }, []);
  // return <Redirect href="/home/pokedex-js" />;
  return <Redirect href="/home" />;
}
