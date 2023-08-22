import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeProvider } from '@rneui/themed';
import { theme } from '../theme/theme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/home',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    OpenSansItalic: require('../assets/fonts/OpenSans-Italic-VariableFont_wdth_wght.ttf'),
    OpenSans: require('../assets/fonts/OpenSans-VariableFont_wdth_wght.ttf'),
    ...FontAwesome.font,
    
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  // const colorScheme = useColorScheme();

  return (
    <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>            
        </Stack>
      </ThemeProvider>

    </Provider>
    </>
  );
}
