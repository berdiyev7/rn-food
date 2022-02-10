import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
   const [term, setTerm] = useState('')

   return (
      <View style={styles.searchview}>
         <SearchBar
            term={term}
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => console.log('term was submitting')}
         />
         <Text>{term}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   searchview: {
      backgroundColor: '#fff'
   }
})
export default SearchScreen
