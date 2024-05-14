import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildComponent = ({count}) => {
  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <ChildComponent count={count} />
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;



/*import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const App = () => {
  const [window, setWindow] = useState(Dimensions.get('window'));

  useEffect(() => {
    const handleResize = () => {
      setWindow(Dimensions.get('window'));
    };

    Dimensions.addEventListener('change', handleResize);

    return () => {
      Dimensions.removeEventListener('change', handleResize);
    };
  },[] );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen Width: {window.width}</Text>
      <Text style={styles.text}>Screen Height: {window.height}</Text>
      <View style={[styles.box, { width: window.width / 2, height: window.height / 4 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    backgroundColor: 'blue',
  },
});

export default App;
*/

/*import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const App = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen Width: {width}</Text>
      <Text style={styles.text}>Screen Height: {height}</Text>
      <Text style={styles.text}>Platform: {Platform.OS}</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  box: {
    width: Dimensions.get('window').width / 3 - 20,
    height: 100,
    backgroundColor: 'blue',
    margin: 5,
  },
  box2: {
    backgroundColor: 'green',
  },
  box3: {
    backgroundColor: 'red',
  },
});

export default App;

*/

/*import React, { useState, useRef } from 'react';
import { Animated, View, Button, StyleSheet, Text } from 'react-native';

const FirstScreen = ({ fadeOut, fadeIn }) => (
  <View style={styles.screen}>
    <Text>First Screen</Text>
    <Button title="Go to Second Screen" onPress={() => { fadeOut(); setTimeout(fadeIn, 500); }} />
  </View>
);


const SecondScreen = ({ fadeOut, fadeIn }) => (
  <View style={styles.screen}>
    <Text>Second Screen</Text>
    <Button title="Go to First Screen" onPress={() => { fadeOut(); setTimeout(fadeIn, 500); }} />
  </View>
);

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('first');
 
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setCurrentScreen(currentScreen === 'first' ? 'second' : 'first');
    });
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      {currentScreen === 'first' ? (
        <FirstScreen fadeOut={fadeOut} fadeIn={fadeIn} />
      ) : (
        <SecondScreen fadeOut={fadeOut} fadeIn={fadeIn} />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
*/

/*import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';

const Container = styled.View`
  flex: 1;
  background-color: #ecf0f1;
  padding-top: 20px;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
`;

const App = () => {
  const handleButtonPress = () => {
    alert('Button Pressed!');
  };

  return (
    <Container>
      <Header title="My App" />
      <ScrollView>
        <Card title="Card Title 1" content="This is some content inside the card." />
        <Card title="Card Title 2" content="This is some other content inside the card." />
        <Card title="Card Title 3" content="This is even more content inside the card." />
        <Button title="Press Me" onPress={handleButtonPress} />
      </ScrollView>
    </Container>
  );
};

export default App;


*/



/*import React, { useState } from 'react';
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


export default App;*/
