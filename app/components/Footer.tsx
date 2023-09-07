import { StyleSheet, View, Text } from "react-native"
import React from "react"
import { FontAwesome } from "@expo/vector-icons"
// import { BlurView } from "expo-blur"
import { useRoute } from "@react-navigation/native"

const DownNavigation = ({ navigation }) => {
  const route = useRoute()

  return (
    <View>
      <View style={styles.kq}>
        <View style={styles.kk}>
          <View style={styles.up}>
            <FontAwesome
              name="home"
              size={30}
              color={route.name === "HomePage" ? "#0077FF" : "rgba(109, 105, 105, 1)"}
              onPress={() => navigation.navigate("Home", { screen: "HomePage" })}
            />
            {route.name === "HomePage" ? <Text style={styles.ts}>Home</Text> : null}
          </View>
          <FontAwesome
            name="compass"
            size={30}
            color={route.name === "Notification" ? "#0077FF" : "rgba(109, 105, 105, 1)"}
            onPress={() => navigation.navigate("Home", { screen: "Notification" })}
          />
          <FontAwesome
            name="user"
            size={30}
            color={
              route.name === "Download" || route.name === "DownloadBook"
                ? "#BDFF00"
                : "rgba(109, 105, 105, 1)"
            }
            onPress={() => navigation.navigate("Class", { screen: "Download" })}
          />
        </View>
      </View>
    </View>
  )
}

export default DownNavigation

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  kk: {
    width: "100%",
    // eslint-disable-next-line react-native/sort-styles
    borderRadius: 32,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-around",
  },
  // eslint-disable-next-line react-native/no-color-literals
  kq: {
    backgroundColor: "#fff",
  },
  up: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
  },
  // eslint-disable-next-line react-native/no-color-literals, react-native/sort-styles
  ts: {
    color: "#07f",
    fontSize: 12,
  },
})
