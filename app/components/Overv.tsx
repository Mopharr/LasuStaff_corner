import { Text, View, StyleSheet, Dimensions } from 'react-native'
import React, { Component } from 'react'


const {width} = Dimensions.get("screen")
export class Overv extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.ti}>About this policy</Text>

        <Text style={
            styles.tii
        }>
        Master the basics of digital marketing with our free Interactive...........
        </Text>

        <Text style={styles.se}>See More</Text>
      </View>
    )
  }
}

export default Overv


const styles = StyleSheet.create({
// eslint-disable-next-line react-native/no-color-literals
se: {
    color: "#07F",
    fontSize: 14,
    fontWeight: "400",
},
ti: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 24,
    marginTop: 20,
},
// eslint-disable-next-line react-native/no-color-literals
tii: {
    color: "#737A91",
    fontSize: 14,
    fontWeight: "400",
    height: 150,
    lineHeight: 24,
    width: "90%",
},

// eslint-disable-next-line react-native/no-color-literals
view: { 
    width
}
})