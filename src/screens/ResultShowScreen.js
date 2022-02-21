import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
   const [res, setRes] = useState(null);
   const id = navigation.getParam('id');

   const getResult = async id => {
      const response = await yelp.get(`/${id}`);
      setRes(response.data);
   };

   useEffect(() => {
      getResult(id)
   }, []);

   if (!res) {
      return null;
   }

   return (
      <View style={styles.content}>
         <Text>{res.name}</Text>
         <FlatList
            data={res.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
               return <Image style={styles.photo} source={{ uri: item }} />
            }}
         />
      </View>
   )
}


const styles = StyleSheet.create({
   content: {
      alignItems: 'center',
      marginTop: 30
   },
   photo: {
      width: 250,
      height: 150,
      marginVertical: 10,
   }

})
export default ResultShowScreen;