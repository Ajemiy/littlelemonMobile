import {useState} from 'react';
import {Alert, TextInput, View, Pressable, StyleSheet, Image, Text, KeyboardAvoidingView } from 'react-native';
import ButtonComponent from "../components/ButtonComponent";
import {validateEmail} from "../utils";

const SubscribeScreen = () => {

  const [email, setEmail] = useState('');

  const isEmailValid = validateEmail(email);

  return (
    <View style={styles.container}>
        <Image
          source={require('../assets/little-lemon-logo-grey.png')}
          style={styles.logo}
        />

        <Text style={styles.catchPhrase}>Subscribe to Our Newsletter for our latest delocious recipe</Text>
        <TextInput style={{borderWidth: 1, width: "90%", padding: 15, height: 50}}  
          onChangeText={setEmail} keyboardType="email-address" textContentType="emailAddress" 
          placeholder="Type your email"/>

        <ButtonComponent
          onPress={() => {
            Alert.alert("Successfully suscribed! We'll get in touch!");
          }}
          disabled={!isEmailValid}
        >
          Subscribe
        </ButtonComponent>
      </View>
      )
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: 100,
  },
  catchPhrase: {
    fontSize: 20,
    fontWeight: 400,
    padding: 30,
    textAlign: 'center',
  },
})
