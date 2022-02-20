import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';

const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchApi, result, errorMessage] = useResult();

   const filterResultsByPrice = (price) => {
      return result.filter(results => {
         return results.price === price;
      });
   };

   return (
      <View style={styles.searchview}>
         <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         <Text>We have found {result.length} results</Text>

         <ScrollView>
            <ResultList
               result={filterResultsByPrice('$')}
               title='Cost Effective' />
            <ResultList
               result={filterResultsByPrice('$$')}
               title='Bit Pricer' />
            <ResultList
               result={filterResultsByPrice('$$$')}
               title='Big Spender' />
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   searchview: {
      backgroundColor: '#fff',
      flex: 1,
      paddingLeft: 10
   }
})
export default SearchScreen;
