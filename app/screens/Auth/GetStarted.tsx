import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  TextStyle,
  ViewStyle,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  ImageStyle,
} from "react-native"
import { AppStackScreenProps } from "../../navigators"
import {} from "../../theme"
import { Screen } from "app/components"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

const { height, width } = Dimensions.get("screen")
const logo = require("../../Asset/Image/logo-.png")
export const GetStarted: FC<LoginScreenProps> = observer(function GetStarted(_props) {
  const { navigation } = _props

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Image source={logo} style={$welIm} alt="" />
      <Text style={$wel}>Great LASU.</Text>
      <Text style={$wel2}>Hurrah!</Text>

      <TouchableOpacity
        style={$btn}
        onPress={() => navigation.navigate("Auth", { screen: "login" })}
      >
        <Text style={$btnT}>Get Started</Text>
      </TouchableOpacity>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  height,
  width,
  backgroundColor: "#EBCCCC",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const $welIm: ImageStyle = {
  marginTop: 160,
}
const $wel: TextStyle = {
  fontSize: 25,
  fontWeight: "400",
  lineHeight: 30,
  marginTop: 80,
}
const $wel2: TextStyle = {
  fontSize: 25,
  fontWeight: "400",
  lineHeight: 30,
  //   marginBottom: 80,
}

const $btn: ViewStyle = {
  width: 300,
  height: 50,
  borderRadius: 30,
  backgroundColor: "#CD1A1A",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 100,
}

const $btnT: TextStyle = {
  fontSize: 20,
  fontWeight: "600",
  lineHeight: 20,
  color: "#fff",
}
