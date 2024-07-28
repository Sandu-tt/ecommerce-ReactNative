import {  StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React from 'react'

const MenuComponent = () => {
  return (
    <View style={{padding:10}}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Explore Menu</Text>
      <Pressable 
      style={{
        backgroundColor:"#006491",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:10,
        marginTop:5,
        borderRadius:10,
         

        }}
        >
        <Pressable>
        <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFyrJlcZllJ28WI-ijmMt7DLL_9JuyJfEug&usqp=CAU",
            }}
          />
         <Text style={{textAlign:"center",fontSize:17,color:"white",marginTop:10,}}>Pizza</Text> 
          </Pressable>
         <Pressable>
         <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFyrJlcZllJ28WI-ijmMt7DLL_9JuyJfEug&usqp=CAU",
            }}
          />
             <Text style={{textAlign:"center",fontSize:17,color:"white",marginTop:10,}}>Pizza</Text>
         </Pressable>
         <Pressable> 
         <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFyrJlcZllJ28WI-ijmMt7DLL_9JuyJfEug&usqp=CAU",
            }}
          />
            <Text style={{textAlign:"center",fontSize:17,color:"white",marginTop:10,}}>Pizza</Text>
        
            
         </Pressable>
        </Pressable>
      
    </View>
  )
}

export default MenuComponent

const styles = StyleSheet.create({})