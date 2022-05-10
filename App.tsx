import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { Container, Texto } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
          <Container >
             <Texto>Qualquer coisa</Texto>
          </Container>
    </ThemeProvider>
    
  );
}

