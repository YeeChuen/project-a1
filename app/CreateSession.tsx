import SessionForm from "@/lib/components/sessions/SessionForm";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function CreateSession() {
  return (
    <View>
      <SessionForm />
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
