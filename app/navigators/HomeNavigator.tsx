

import React from "react"
// import {NavigatorScreenParams} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomePage, Notification, Overview } from "../screens"
import { CompositeScreenProps } from "@react-navigation/core"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { AppStackParamList, AppStackScreenProps } from "."
// import { AuthNavigator, AuthNavigatorParamList } from "./AuthNavigator"


export type HomeNavigatorParamList = {
  HomePage: undefined
  Overview: undefined
  Notification: undefined
  // Auth: NavigatorScreenParams<AuthNavigatorParamList>
}

export type HomeTabScreenProps<T extends keyof HomeNavigatorParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeNavigatorParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Stack = createNativeStackNavigator<HomeNavigatorParamList>()
export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomePage"
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="Notification" component={Notification} />
      {/* <Stack.Screen name="Auth" component={AuthNavigator} /> */}
    </Stack.Navigator>
  )
}
