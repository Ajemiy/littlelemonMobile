import * as React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
// import SubscribeScreen from './SubscribeScreen';
import ButtonComponent from "../components/ButtonComponent";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
    <Image
      source={require('../assets/little-lemon-logo.png')}
      style={styles.logo}
    />
    <Text style={styles.catchPhrase}>Little Lemon, your local Mediterranean  Bistro</Text>

    <ButtonComponent onPress={()=>{navigation.navigate('SubscribeScreen')}}>
      Navigation
    </ButtonComponent>
  </View>;
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  catchPhrase: {
    fontSize: 20,
    fontWeight: 600,
    padding: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    width: '90%',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
  }
})