import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultDetail = ({ result }) => {
   return (
      <View>
         <Text>{result.name}</Text>
      </View>
   )
}

export default ResultDetail;

const styles = StyleSheet.create({})