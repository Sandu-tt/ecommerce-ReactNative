import { Pressable, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const PizzaComponent = ({pizza}) => {
    
    const data =[pizza];
   // console.log("data",data);
  return (
    <View>
      {data.map((item, index)=>(
        <Pressable>
           <Image style={{height:200,aspectRatio:5/5,resizeMode:"cover"}} source={{uri:item.image}} />
           <View style={{backgroundColor:"#006491",padding:10}}>
            <Text style={{fontSize:17,fontWeight:"bold",color:"white"}}>{item.name.substr(0,15) +"..."}</Text>

            <Text style={{color:"pink"}}>{item.description.substr(0,25) + "..."}</Text>
           </View>

           <Pressable>

            
           </Pressable>
        </Pressable>
      ))}
    </View>
  )
}

export default PizzaComponent

const styles = StyleSheet.create({})