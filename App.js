import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';


const navigator = createStackNavigator({
   Search: SearchScreen
}, {
   initialRouteName: 'Search',
   defaultNavigationOptions: {
      title: 'BusinessSearch'
   }
})



export default function App() {
   return (
      <View style={styles.container}>
         <Text>Wassup</Text>
         <StatusBar style="auto" />
      </View>
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
