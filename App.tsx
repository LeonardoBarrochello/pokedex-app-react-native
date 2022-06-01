import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {AuthProvider} from './src/hooks/auth';
import { Routes } from './src/routes';
import Detalhes from './src/screens/Detalhes';
import Home from './src/screens/Home';
import theme from './src/styles/theme';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular
  });

  if(!fontsLoaded){
      return (<View/>)
  }

  return (
      <ThemeProvider theme={theme}>
            <AuthProvider>
                <Routes/>
            </AuthProvider> 
      </ThemeProvider>   
  );
}

