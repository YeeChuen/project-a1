import { Link, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function index() {
  const router = useRouter()
  return (
    <View style = {style.view}>
      <Text> Index screen</Text>
      <Link style = {style.loginButton} href={'./login'}>Go to login screen</Link>
    </View>
  );
}


const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    backgroundColor: "lightblue",
    padding: 10
  }
})