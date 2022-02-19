import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const ResultList = ({ title, result }) => {
   return (
      <View>
         <Text style={styles.title}>{title}</Text>
         <FlatList
            horizontal
            data={result}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
               return <Text>{item.name}</Text>
            }}
         />
      </View>
   )
}

export default ResultList

const styles = StyleSheet.create({
   title: {
      fontSize: 18,
      fontWeight: 'bold'
   }
})