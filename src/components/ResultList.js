import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';

const ResultList = ({ title, result, navigation }) => {
   return (
      <>
         <Text style={styles.title}>{title}</Text>
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={result}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
               return (
                  <TouchableOpacity
                     onPress={() => navigation.navigate('ResultShow', { id: item.id })}
                  >
                     <ResultDetail result={item} />
                  </TouchableOpacity>
               );
            }}
         />
      </>
   )
}


const styles = StyleSheet.create({
   title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10
   },
})

export default withNavigation(ResultList);