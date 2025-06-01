import { Link, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GoToForm } from "../form";
import { GoToReplace } from "../replace";

export default function index() {
  const router = useRouter();
  return (
    <View style={style.view}>
      <Text> Index screen</Text>
      <Link style={style.loginButton} href={"./login"}>
        Go to login screen
      </Link>
      <GoToForm params={{id: "from index"}}/>
      <GoToReplace params={{currentPathName: "./"}} />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "lightblue",
    padding: 10,
  },
});
