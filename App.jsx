import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

const lightTheme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#ecf0f1',
    text: '#2c3e50',
  },
  fonts: {
    main: 'Arial',
    bold: 'Arial-BoldMT',
  },
};

// Dark Theme Tanımı
const darkTheme = {
  colors: {
    primary: '#1abc9c',
    secondary: '#9b59b6',
    background: '#34495e',
    text: '#ecf0f1',
  },
  fonts: {
    main: 'Arial',
    bold: 'Arial-BoldMT',
  },
};



const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  
  
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
    <Container>
      <ThemedText>Welcome to Themed App</ThemedText>
      <ThemedButton>
        <ButtonText>Primary Button</ButtonText>
      </ThemedButton>
      <DangerButton>
        <ButtonText>Secondary Button</ButtonText>
      </DangerButton>
      <ThemedButton onPress={toggleTheme}>
        <ButtonText>Toggle Theme</ButtonText>
      </ThemedButton>
    </Container>
  </ThemeProvider>
  );
};

// Temalı Bileşenler
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

const ThemedText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.main};
`;

const ThemedButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-family: ${props => props.theme.fonts.bold};
`;

const DangerButton = styled(ThemedButton)`
  background-color: ${props => props.theme.colors.secondary};
`;


export default App;
