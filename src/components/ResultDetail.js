import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultDetail = ({ result }) => {
   return (
      <View style={styles.container}>
         <Image
            style={styles.image}
            source={{ uri: result.image_url }}
         />
         <Text style={styles.name}>{result.name}</Text>
         <Text>
            {result.rating} Stars, {result.review_count} Reviews
         </Text>
      </View>
   )
}



const styles = StyleSheet.create({
   container: {
      paddingRight: 20

   },
   image: {
      width: 250,
      height: 100,
      borderRadius: 5
   },
   name: {
      fontSize: 20,
      fontWeight: '700',
      marginTop: 10,
      marginBottom: 5
   }
});

export default ResultDetail;