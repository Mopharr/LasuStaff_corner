import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
// import { LoginScreen } from "../screens"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { HomePage, Notification, Overview } from "../screens"
import { AuthNavigator, AuthNavigatorParamList } from "./AuthNavigator"
// import  from "app/screens/ClassScreen/Profile"

export type HomeNavigatorParamList = {
  HomePage: undefined
  Overview: undefined
  Notification: undefined
  Auth: NavigatorScreenParams<AuthNavigatorParamList>
}

export type HomeScreenProps<T extends keyof HomeNavigatorParamList> = CompositeScreenProps<
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
      <Stack.Screen name="Auth" component={AuthNavigator} />
    </Stack.Navigator>
  )
}
