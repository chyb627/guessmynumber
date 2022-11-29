import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StartGameScreen from './src/screens/StartGameScreen';

const App = () => {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./src/assets/images/turtle.png')}
        resizeMode="contain"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
