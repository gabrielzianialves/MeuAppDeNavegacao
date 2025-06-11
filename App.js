import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { useState, useEffect } from "react";
import { Alert, View, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {

  const [initialScreen, setInitialScreen] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // funcao para verificar se o login foi feito antes do usuário sair do aplicativo
    async function loggedVerification() {
      try {
        const logged = await AsyncStorage.getItem('logged');
  
        if (logged === 'true') {
          setInitialScreen('Home');
        } 
        else {
          setInitialScreen('Welcome');
        }
        setLoading(false);
      } 
      catch (error) {
        Alert.alert('Error', 'Data not found.');
        setInitialScreen('Welcome');
        setLoading(false);
      }
    }

    loggedVerification();
  }, []);

  // tela de carregamento
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {/* definindo as telas de navegação */}
      <Stack.Navigator initialRouteName={initialScreen}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
