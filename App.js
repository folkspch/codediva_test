/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Welcome from './screens/Welcome'
import Term from './screens/Term'
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import ForgotReset from './screens/ForgotReset';
import RequestOTP from './screens/RequestOTP';
import VerifyOTP from './screens/VerifyOTP';
import CreatePIN from './screens/CreatePIN';
import BiometricSet from './screens/BiometricSet';
import Signin from './screens/Signin';
import { NativeBaseProvider } from "native-base";
const Stack = createStackNavigator();
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Term" component={Term} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotReset" component={ForgotReset} options={{ headerShown: false }} />
          <Stack.Screen name="RequestOTP" component={RequestOTP} options={{ headerShown: false }} />
          <Stack.Screen name="VerifyOTP" component={VerifyOTP} options={{ headerShown: false }} />
          <Stack.Screen name="CreatePIN" component={CreatePIN} options={{ headerShown: false }} />
          <Stack.Screen name="BiometricSet" component={BiometricSet} options={{ headerShown: false }} />
          <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
