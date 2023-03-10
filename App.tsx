import React from 'react';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  Inter_400Regular,
  Inter_500Medium
 } from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import { Scheduling } from './src/screens/Scheduling';

import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if(!fontsLoaded){
    return null;
  }

  return (
    <ThemeProvider  theme={theme}>
      <Scheduling />
    </ThemeProvider>
  )
}

