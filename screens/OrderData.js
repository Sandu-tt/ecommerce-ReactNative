import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'

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

   
        </View>
   </SafeAreaView>
 
   
  )
}

export default OrderData

const styles = StyleSheet.create({})