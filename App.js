import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/stack/CoinsStack';
import Toast from 'react-native-toast-message';

import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/res/EstilosFormularios';
import localStore from './src/res/localStore/LocalStore';
import { Provider } from 'react-redux';
import ToastManager from 'toastify-react-native';



const App = () => {
  return (
    <NavigationContainer>
      <Provider store={localStore}>

        <PaperProvider theme={theme} >
          <CoinsStack />
        </PaperProvider>

          <ToastManager />

      </Provider>
    </NavigationContainer>
  );
};

export default App;
