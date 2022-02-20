import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
   const [res, setRes] = useState(null);
   const id = navigation.getParam('id');

   const getResult = async (id) => {
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
      <View>
         <Text>Res</Text>
      </View>
   )
}


const styles = StyleSheet.create({})
export default ResultShowScreen;