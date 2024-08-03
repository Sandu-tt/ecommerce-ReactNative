import { StyleSheet, Text, View ,SafeAreaView,FlatList} from 'react-native'
import React from 'react'

const Pizza = () => {
  return (
    <SafeAreaView>
     <Ionicons 
      onPress={() =>navigation.goBack()} 
      name="arrow-back-circle" size={24} 
      color="black" />

     <FlatList numColumns={2} 
      showsVerticalScrollIndicator={false} 
      data={data} renderItem={({item}) =>(
      <PizzaComponent pizza={item}/>
     )}

      />
    </SafeAreaView>
  );
}

export default Pizza

const styles = StyleSheet.create({})