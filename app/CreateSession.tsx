import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function CreateSession() {
  return (
    <View>
      <Text>CreateSession</Text>
      <Text>TODO: form for user to create new session / workout.</Text>
      <Text>When created, should save to local storage</Text>
    </View>
  );
}

export function GoToCreateSession() {
  const router = useRouter();

  return (
    <Button
      title="Create Session"
      onPress={() => {
        router.replace({
          pathname: "/CreateSession",
        });
      }}
    />
  );
}
