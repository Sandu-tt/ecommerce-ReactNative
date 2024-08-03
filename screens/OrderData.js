import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native'
import React from 'react'
import MapView,{ Marker } from 'react-native-maps'

const OrderData = () => {
  return (
   < SafeAreaView style={{backgroundColor:"#006491",flex:1}}>
       <View
        style={{
          backgroundColor: "white",
          margin: 10,
          borderRadius: 6,
          padding: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          Order has been accepted
        </Text>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Arriving in 30 min
        </Text>

   
        <View style={{alignItems:"center",justifyContent:"center"}}>
                  <MapView
                         style={{height:500,width:500}}
                         initialRegion={{
                            latitude: 6.9271,
                            longitude: 79.8612,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                      }}
                  >
                      <Marker coordinate={{latitude:  6.9271, longitude: 79.8612}}/>

                </MapView>        
              </View>

        </View>

       
   </SafeAreaView>
 
   
  );
};

export default OrderData

const styles = StyleSheet.create({})