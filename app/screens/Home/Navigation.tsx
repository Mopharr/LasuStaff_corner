import React, { FC, useState } from "react"
import { Screen } from "../../components"
import { View, Text, ViewStyle, Dimensions, TextStyle, TouchableOpacity, Image, ImageStyle } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { AppStackScreenProps } from "app/navigators"
import DownNavigation from "app/components/Footer"

const { height, width } = Dimensions.get("screen")

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const Notification: FC<HomeScreenProps> = function Notification(_props) {
  const { navigation } = _props

  const data = [
    {
      title: "Upcoming Birthday",
      opt: "Due: June 12th 2023 at 11:59pm",
      an: "Annouce current and upcoming birthday",
      name: "Dr Mrs Adejobi",
    },
    {
      title: "Upcoming Birthday",
      opt: "Due: June 12th 2023 at 11:59pm",
      an: "Annouce current and upcoming birthday",
      name: "Dr Mrs Adejobi",
    },
    {
      title: "Upcoming Birthday",
      opt: "Due: June 12th 2023 at 11:59pm",
      an: "Annouce current and upcoming birthday",
      name: "Dr Mrs Adejobi",
    },
  ]

  const [selectedIdx, setSelectedIdx] = useState<number | null>(0)

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContentContainer}>
      <View style={$bc}>
        <TouchableOpacity onPress={() => navigation.navigate("Home", { screen: "HomePage" })}>
          <FontAwesome name="arrow-left" size={20} color="#000" style={$ic} />
        </TouchableOpacity>
        <Text style={$noti}>Notification</Text>
      </View>

      {data.map((user, inx) => {
        return (
          <TouchableOpacity
            key={inx}
            onPress={() => setSelectedIdx(inx)}
            style={selectedIdx === inx ? $activeCon : $con}
          >
            {selectedIdx === inx ? <View style={$sLine}></View> : null}

            {selectedIdx === inx ? (
              <Image source={require("../../Asset/Icons/exam.png")} style={$bk} />
            ) : (
              <Image source={require("../../Asset/Icons/exam1.png")} style={$bk}/>
            )}
            <View style={$conW}>
              <Text style={$activeText}>{user.title}</Text>
              <Text style={$inactiveText}>{user.opt}</Text>
              <View style={$line}></View>
              <Text style={$activeText}>{user.an}</Text>
              <Text style={$inactiveText}>{user.name}</Text>
            </View>
          </TouchableOpacity>
        )
      })}

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

const $ic: TextStyle = {
  color: "#000",
  marginLeft: 20,
}

const $bc: ViewStyle = {
  height: 60,
  width,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
}

const $noti: TextStyle = {
  width: "90%",
  textAlign: "center",
  marginLeft: -10,
  fontSize: 14,
  fontWeight: "500",
}

const $con: ViewStyle = {
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 30,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginBottom: 0,
  backgroundColor: "transparent",
  paddingLeft: 20,
}

const $activeCon: ViewStyle = {
  ...$con,
  backgroundColor: "#F8FAFF",
  paddingLeft: 0,
}

const $bk: ImageStyle= {
    marginTop: 20
}
const $conW: TextStyle = {
  marginLeft: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 10,
  borderBottomColor: "#DFE2E6",
  borderBottomWidth: 1,
  paddingBottom: 30,
  paddingVertical: 20,
}

const $line: ViewStyle = {
  borderColor: "#DFE2E6",
  borderWidth: 0.5,
  width: "100%",
  marginBottom: 20,
}

const $activeText: TextStyle = {
  color: "black",
  fontSize: 14,
  fontWeight: "500",
}

const $inactiveText: TextStyle = {
  color: "black",
  fontSize: 14,
  fontWeight: "400",
}

const $sLine: ViewStyle = {
  backgroundColor: "#07F",
  width: 5,
  height: "100%",
  marginRight: 17,
}
