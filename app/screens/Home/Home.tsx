import React, { FC } from "react"
import { Screen } from "../../components"
import { View, Text, ViewStyle, Dimensions, TextStyle, Image, TouchableOpacity } from "react-native" // Added TextStyle
// import { colors } from "../../theme"
import { AppStackScreenProps } from "../../navigators"
import DownNavigation from "app/components/Footer"
// import { SafeAreaView } from "react-native-safe-area-context"

const { height, width } = Dimensions.get("screen")

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

const image = [
  {
    image: require("../../Asset/Image/1.png"),
    link: "Oveview",
  },
 {
    image: require("../../Asset/Image/4.png"),
    link: "Oveview",
  },
  {
    image: require("../../Asset/Image/3.png"),
    link: "Oveview",
  },
  {
    image: require("../../Asset/Image/5.png"),
    link: "Oveview",
  },
  {
    image: require("../../Asset/Image/2.png"),
    link: "Oveview",
  },
  {
    image: require("../../Asset/Image/6.png"),
    link: "Oveview",
  },
  {
    image: require("../../Asset/Image/7.png"),
    link: "Oveview",
  },
  {
    image: require("../../Asset/Image/8.png"),
    link: "Oveview",
  },
]

export const HomePage: FC<HomeScreenProps> = function HomePage(props) {
  const { navigation } = props

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContentContainer}>
      <View style={$con}>
        <Text style={$conM}>Main</Text>
        <Text style={$conW}>We will share resources from the areas you pick.</Text>

        <View style={$imagee}>
          {image.map((img, inx) => {
            return (
              <TouchableOpacity
                key={inx}
                onPress={() => navigation.navigate("Home", {screen: "Overview"})}
              >
                <Image source={img.image} alt="" />
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
      <View style={$downNavigationContainer}>
        <DownNavigation navigation={navigation} />
      </View>
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  backgroundColor: "#fff",
  height,
  width,
  position: "relative",
}
const $downNavigationContainer: ViewStyle = {
  position: "absolute",
  bottom: "5%",
  left: "0%",
  width: "100%",
}
const $con: ViewStyle = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 30,
}

const $conM: TextStyle = {
  fontSize: 18,
  marginTop: 40,
  fontWeight: "500",
  lineHeight: 24,
  marginBottom: 10,
}

const $conW: TextStyle = {
  fontSize: 14,
  fontWeight: "400",
  lineHeight: 24,
  color: "#737A91",
}

const $imagee: ViewStyle = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: 30,
  marginTop: 30,
}
