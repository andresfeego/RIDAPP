import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/stack/CoinsStack';
import Toast from 'react-native-toast-message';

import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/res/EstilosFormularios';
import localStore from './src/res/localStore/LocalStore';
import { Provider } from 'react-redux';
import Container from 'toastify-react-native';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';



const App = () => {
  return (
    <NavigationContainer>
      <Provider store={localStore}>

        <PaperProvider theme={theme} >
          <CoinsStack />
        </PaperProvider>

        <Container
          position={'top'}
          duration={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          animationStyle={'upInUpOut'}
          draggable
          style={{ position: 'absolute', top: 10 }}
        />


      </Provider>
    </NavigationContainer>
  );
};

export default App;
