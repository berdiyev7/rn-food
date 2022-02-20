import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import { createAppContainer } from 'react-navigation';
import ResultShowScreen from './src/screens/ResultShowScreen';


const navigator = createStackNavigator({
   Search: SearchScreen,
   ResultShow: ResultShowScreen
}, {
   initialRouteName: 'Search',
   defaultNavigationOptions: {
      title: 'Business Search'
   }
})

export default createAppContainer(navigator)