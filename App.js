import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/stack/CoinsStack';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/generalComponent/ToastConfig';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/res/EstilosFormularios';



const App = () => {
  return (
    <NavigationContainer>

      <PaperProvider theme={theme} >
        <CoinsStack />
      </PaperProvider>

      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default App;
