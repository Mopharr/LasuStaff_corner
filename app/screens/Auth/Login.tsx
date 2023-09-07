import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import {
  TextInput,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  ImageBackground,
  Dimensions,
  View,
  Image,
  ImageStyle,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import { Text, } from "../../components"
import { AppStackScreenProps } from "../../navigators"
import { spacing } from "../../theme"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

const { height, width } = Dimensions.get("screen")

export const Login: FC<LoginScreenProps> = observer(function Login(_props) {
  const { navigation } = _props
  const [focusedInput, setFocusedInput] = useState<string | null>(null)

  // function login() {
  //   navigation.navigate("Auth", { screen: "getStarted" })
  // }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={$container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../../Asset/Image/bg.png")}
          style={$screenContentContainer}
        >
          <View style={$wra}>
            <Text style={$let}>Let Sign you In</Text>
            <Text style={$wel}>Welcome back, you've been missed</Text>

            <View style={$in}>
              <View
                style={[
                  $sd,
                  focusedInput === "emailInput" &&
                    Platform.select({
                      ios: {
                        backgroundColor: "white",
                        borderBottomWidth: 0,
                        shadowColor: "rgba(0, 0, 0, 0.25)",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 1,
                        shadowRadius: 4,
                      },
                      android: {
                        elevation: 3,
                        borderBottomWidth: 0,
                        backgroundColor: "white",
                      },
                    }),
                ]}
              >
                {focusedInput === "emailInput" ? <View style={$cover}></View> : null}

                <Text style={$label}>UserName or Email</Text>
                <View style={$inp}>
                  <Image source={require("../../Asset/Icons/user.png")} style={$inpIc} />
                  <TextInput
                    placeholder="Adetope.Ola@lasu.ede.ng"
                    autoComplete="email"
                    keyboardType="email-address"
                    style={$input}
                    onFocus={() => setFocusedInput("emailInput")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </View>
              </View>

              <View
                style={[
                  $sd,
                  focusedInput === "passwordInput" &&
                    Platform.select({
                      ios: {
                        shadowColor: "rgba(0, 0, 0, 0.25)",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 1,
                        shadowRadius: 4,
                        borderBottomWidth: 0,
                        backgroundColor: "white",
                      },
                      android: {
                        elevation: 4,
                        borderBottomWidth: 0,
                        backgroundColor: "white",
                      },
                    }),
                ]}
              >
                {focusedInput === "passwordInput" ? <View style={$cover}></View> : null}

                <Text style={$label}>Password</Text>
                <View style={$inp}>
                  <Image source={require("../../Asset/Icons/lock.png")} style={$inpIc} />
                  <TextInput
                    placeholder="********"
                    autoComplete="password"
                    keyboardType="visible-password"
                    style={$input}
                    onFocus={() => setFocusedInput("passwordInput")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={$btn}>
              <Text style={$btnT}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Auth", { screen: "signUp" })}
              style={$sn}
            >
              <Text style={$tx}>
                Don't have an account? <Text style={$txx}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
})
const $container: ViewStyle = {
  flex: 1,
}

const $screenContentContainer: ViewStyle = {
  height,
  width,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: "#fff",
}

const $let: TextStyle = {
  fontSize: 24,
  fontWeight: "700",
  lineHeight: 27,
}

const $wel: TextStyle = {
  fontSize: 14,
  fontWeight: "500",
  lineHeight: 24,
}

const $label: TextStyle = {
  fontSize: 12,
  fontWeight: "500",
  lineHeight: 24,
  marginBottom: 10,
  color: "#8F92A1",
}
const $wra: TextStyle = {
  width: "80%",
  marginRight: "auto",
  marginLeft: "auto",
}
const $in: ViewStyle = {
  marginTop: 80,
}

const $sd: ViewStyle = {
  width: "90%",
  borderRadius: 4,
  height: 78,
  marginBottom: spacing.lg,
  borderBottomColor: "#8F92A1",
  borderBottomWidth: 1,
  paddingBottom: 40,
  position: "relative",
}
const $cover: ViewStyle = {
  position: "absolute",
  top: "0%",
  width: "98.9%",
  height: 10,
  backgroundColor: "#fff",
}
const $inp: ViewStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  height: 40,
}

const $inpIc: ImageStyle = {
  width: 24,
  marginRight: 5,
  paddingLeft: 8,
}
const $input: ViewStyle = {
  width: "90%",
}

// @demo remove-file
const $btn: ViewStyle = {
  width: "100%",
  height: 50,
  borderRadius: 30,
  backgroundColor: "#CD1A1A",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 100,
}

const $sn: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 5,
}

const $btnT: TextStyle = {
  fontSize: 14,
  fontWeight: "700",
  lineHeight: 20,
  color: "#fff",
}
const $tx: TextStyle = {
  fontSize: 14,
  fontWeight: "400",
  color: "#000",
  textAlign: "center",
}

const $txx: TextStyle = {
  fontSize: 14,
  fontWeight: "700",
  color: "#000",
  textAlign: "center",
}
