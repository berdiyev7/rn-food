import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ResultDetail from './ResultDetail';

const ResultList = ({ title, result }) => {
   return (
      <View>
         <Text style={styles.title}>{title}</Text>
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={result}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
               return <ResultDetail result={item} />;
            }}
         />
      </View>
   )
}

export default ResultList

const styles = StyleSheet.create({
   title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10
   },
})