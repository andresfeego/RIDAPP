import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/stack/CoinsStack';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/generalComponent/ToastConfing';
import { Provider as PaperProvider } from 'react-native-paper';
import colors from '../RIDAPP/src/res/colors';

const theme = {
  
  colors: {
    "primary": colors.black,
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(250, 250, 250)",
    "onPrimaryContainer": "rgb(54, 15, 0)",
    "secondary": "rgb(119, 87, 74)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(255, 219, 205)",
    "onSecondaryContainer": "rgb(44, 22, 12)",
    "tertiary": "rgb(103, 95, 48)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(239, 227, 169)",
    "onTertiaryContainer": "rgb(32, 28, 0)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(32, 26, 24)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(32, 26, 24)",

    "surfaceVariant": colors.white,

    "onSurfaceVariant": "rgb(83, 68, 61)",
    "outline": "rgb(133, 115, 108)",
    "outlineVariant": "rgb(216, 194, 186)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(54, 47, 44)",
    "inverseOnSurface": "rgb(251, 238, 234)",
    "inversePrimary": "rgb(255, 181, 150)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(250, 242, 242)",
      "level2": "rgb(248, 236, 235)",
      "level3": "rgb(245, 230, 227)",
      "level4": "rgb(244, 228, 224)",
      "level5": "rgb(242, 225, 219)"
    },
    "surfaceDisabled": "rgba(32, 26, 24, 0.12)",
    "onSurfaceDisabled": "rgba(32, 26, 24, 0.38)",
    "backdrop": "rgba(59, 45, 40, 0.4)"
  }
};

const App = () => {
  return (
    <NavigationContainer>

      <PaperProvider theme={theme}>
        <CoinsStack />
      </PaperProvider>

      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default App;
