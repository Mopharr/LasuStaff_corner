import React, { FC, useState } from "react"
import { Screen } from "../../components"
import {
  View,
  Text,
  ViewStyle,
  Dimensions,
  TextStyle,
  ImageBackground,
  TouchableOpacity,
} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { AppStackScreenProps } from "app/navigators"
import Overv from "app/components/Overv"
import Pol from "app/components/Pol"

const { height, width } = Dimensions.get("screen")

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const Overview: FC<HomeScreenProps> = function Overview(_props) {
  const { navigation } = _props
  const [activeTab, setActiveTab] = useState<"overview" | "policy">("overview")

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContentContainer}>
      <ImageBackground source={require("../../Asset/Image/12.png")} style={$bc}>
        <TouchableOpacity onPress={() => navigation.navigate("Home", {screen: "HomePage"})}>
          <FontAwesome name="times" size={30} color="white" style={$ic} />
        </TouchableOpacity>
      </ImageBackground>

      <View style={$con}>
        <Text style={$conM}>Lasu Law</Text>
        <View style={$conW}>
          <TouchableOpacity onPress={() => setActiveTab("overview")}>
            <Text style={activeTab === "overview" ? $activeText : $inactiveText}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("policy")}>
            <Text style={activeTab === "policy" ? $activeText : $inactiveText}>View Policy</Text>
          </TouchableOpacity>
        </View>

        {activeTab === "overview" ? <Overv /> : <Pol />}

        <View style={$imagee}></View>
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

const $ic: TextStyle = {
  color: "#fff",
  marginLeft: 10,
  marginTop: 10,
}

const $bc: ViewStyle = {
  height: 300,
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
}

const $conW: TextStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 10,
  borderBottomColor: "#DFE2E6",
  borderBottomWidth: 1,
  marginTop: 20,
  paddingBottom: 15,
}

const $activeText: TextStyle = {
  color: "grey",
  fontSize: 14,
  fontWeight: "500",
}

const $inactiveText: TextStyle = {
  color: "black",
  fontSize: 14,
  fontWeight: "400",
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
