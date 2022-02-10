import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
const SearchBar = () => {
   return (
      <View style={styles.background}>
         <Feather
            style={styles.iconStyle}
            name='search'
            size={20}
         />
         <TextInput
            style={styles.inputStyle}
            placeholder='Search'
         />
      </View>
   )
}
const styles = StyleSheet.create({
   background: {
      backgroundColor: '#f0eeee',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center'
   },
   inputStyle: {
      flex: 1,
      fontSize: 18
   },
   iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 15
   }

})

export default SearchBar