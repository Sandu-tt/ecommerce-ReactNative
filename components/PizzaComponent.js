import { Pressable, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import ModalDropdown from 'react-native-modal-dropdown';

const PizzaComponent = ({pizza}) => {
    
    const data =[pizza];
   // console.log("data",data);
   const options=['regular', 'medium', 'large']
   
  return (
    <View>
      {data.map((item, index)=>(
        <Pressable style={{ borderEndColor: "#AFD8F5", borderWidth: 0.1 }}>
           <Image style={{height:200,aspectRatio: 1 / 1,resizeMode:"cover"}}
            source={{uri:item.image}} 
            />
           <View style={{backgroundColor:"#006491",padding:10}}>
            <Text style={{fontSize:15,fontWeight:"bold",color:"white"}}>
                {item.name.substr(0,14) + "..."} 
             </Text>

            <Text style={{color:"pink",marginTop:4}}>
                {item.description.substr(0,20) + "..."}

            </Text>

            
           <Pressable style={{
                marginTop:8,
                flexDirection:"row",
                alignItems:"center",
                marginTop: 10

            }}>

                <View>
                    <Text style={{ color: "white", fontSize: 15 }}>Size</Text>
                <ModalDropdown dropdownStyle={{width:60,height:100}}  
                    style={{width:60}}
                    options={options}>
                </ModalDropdown>

                </View>


               

            
            <Pressable style={{
                backgroundColor:"#03C03C",
                padding:5, 
                marginLeft: 15,
                borderRadius: 4,
            }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>Add To Cart</Text>
           </Pressable>

         </Pressable>  
            
           </View>

        </Pressable>
      ))}
    </View>
  )
}

export default PizzaComponent

const styles = StyleSheet.create({})