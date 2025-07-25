import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigators/RootNavigator';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Little Lemon</Text>
    //   <Text>Hello, world!</Text>
    //   <StatusBar style="auto" />
    // </View>
     <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
