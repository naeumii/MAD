import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStaticNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import WelcomeScreen from './components/WelcomeScreen';

const RootStack=createNativeStackNavigator({
  initialRouteName: 'Welcome',
  screens: {
  Welcome: {
    screen: WelcomeScreen,
    options: {
      headerShown: false,
    },
  },
  SignUpScreen: {
    screen: SignUpScreen,
    options: {
      headerShown: false,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    options: {
      headerShown: false,
    },
  },
}})

const Navigation  = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}