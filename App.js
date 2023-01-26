import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/stack/CoinsStack';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/generalComponent/ToastConfing';



const App = () => {
  return (
    <NavigationContainer>
      <CoinsStack/>
      <Toast config={toastConfig}/>
    </NavigationContainer>
    );
};

export default App;
