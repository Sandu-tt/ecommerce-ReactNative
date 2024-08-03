import { FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React , { useContext } from 'react'
import pizza from '../data/pizza'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import PizzaComponent from '../components/PizzaComponent';
import { CartItems } from '../Context';



const PizzaScreen = () => {
  const data=pizza;
  const navigation=useNavigation();
  const { cart, setCart } = useContext(CartItems);
    console.log(cart,"cart items added")
  return (
    <SafeAreaView>
     <Ionicons  
     onPress={() =>navigation.goBack()}
      name="arrow-back-circle" 
      size={24} 
      color="black" />
     <FlatList numColumns={2} 
     showsVerticalScrollIndicator={false} 
     data={data} renderItem={({item}) =>(
      <PizzaComponent pizza={item}/>
     )}

      />
    </SafeAreaView>
  )
}

export default PizzaScreen

const styles = StyleSheet.create({})