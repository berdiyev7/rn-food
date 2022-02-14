import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ResultList = ({ title, result }) => {
   return (
      <View>
         <Text style={styles.title}>{title}</Text>
         <Text>Results: {result.length}</Text>
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