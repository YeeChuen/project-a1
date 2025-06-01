import React from "react";
import { Text, View } from "react-native";
import { GoToForm } from "../form";
import { Drawer } from "react-native-paper";

export default function login() {
  const [active, setActive] = React.useState("");
  return (
    <View>
      <Text>login</Text>
      <GoToForm params={{ id: "from login" }} />
      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={active === "first"}
          onPress={() => setActive("first")}
        />
        <Drawer.Item
          label="Second Item"
          active={active === "second"}
          onPress={() => setActive("second")}
        />
      </Drawer.Section>
    </View>
  );
}
