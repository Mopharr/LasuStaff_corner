import React from "react"
import {NavigatorScreenParams} from "@react-navigation/native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeNavigator, HomeNavigatorParamList } from "./HomeNavigator"

import {
  GetStarted,
  HomePage,
  Login,
  SignUp,
} from "../screens"
import { CompositeScreenProps } from "@react-navigation/core"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { AppStackParamList, AppStackScreenProps } from "."

export type AuthNavigatorParamList = {
  login: undefined
  getStarted: undefined
  signUp: undefined
  HomePage: undefined
  Home: NavigatorScreenParams<HomeNavigatorParamList>
}

export type AuthTabScreenProps<T extends keyof AuthNavigatorParamList> = CompositeScreenProps<
  BottomTabScreenProps<AuthNavigatorParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Stack = createNativeStackNavigator<AuthNavigatorParamList>()
export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="getStarted"
    >
      <Stack.Screen name="getStarted" component={GetStarted} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Home" component={HomeNavigator} />
    </Stack.Navigator>
  )
}
