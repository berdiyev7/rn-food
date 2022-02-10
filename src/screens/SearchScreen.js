import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
   return (
      <View style={styles.searchview}>
         <SearchBar />
         <Text>Search Screen</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   searchview: {
      backgroundColor: '#fff'
   }
})
export default SearchScreen
