import SessionForm from "@/lib/components/sessions/SessionForm";
import { globalStyles, styleConstant } from "@/lib/utils/styleConstants";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function CreateSession() {
  return (
    <ScrollView scrollEnabled={true}>
      <SessionForm />
    </ScrollView>
  );
}

export function GoToCreateSession() {
  const router = useRouter();

  return (
    <Button
      title="Create Session"
      onPress={() => {
        router.push({
          pathname: "/CreateSession",
        });
      }}
    />
  );
}
