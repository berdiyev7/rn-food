import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ResultList = ({ title }) => {
   return (
      <View>
         <Text style={styles.title}>{title}</Text>
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