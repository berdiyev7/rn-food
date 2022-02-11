import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
   const [term, setTerm] = useState('')
   const [result, setResult] = useState([]);
   const [errorMessage, setErrorMessage] = useState('');

   const searchApi = async () => {
      try {
         const response = await yelp.get('/search', {
            params: {
               limit: 50,
               term,
               location: 'san jose'
            }
         });
         setResult(response.data.businesses);
      } catch (err) {
         setErrorMessage('Something went wrong');
      }
   };

   return (
      <View style={styles.searchview}>
         <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={searchApi}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         <Text>We have found {result.length} results!</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   searchview: {
      backgroundColor: '#fff'
   }
})
export default SearchScreen
