import { Text, View, StyleSheet, Dimensions } from "react-native"
import React, { Component } from "react"

const { width } = Dimensions.get("screen")
export class Pol extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.ti}>LASU LAW Policy</Text>

        <Text style={styles.tii}>Now what is LASU LAW Policy all about...</Text>
      </View>
    )
  }
}

export default Pol

const styles = StyleSheet.create({
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
    width,
  },
})
