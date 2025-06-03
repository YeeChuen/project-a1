import SessionForm from "@/lib/components/sessions/SessionForm";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, Modal, SafeAreaView, Text, View } from "react-native";

export default function CreateSession() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <View>
      <Button
        title="Create Session"
        onPress={() => {
          // router.push("/CreateSession");
          setOpenModal(!openModal);
        }}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <SafeAreaView>
          <SessionForm />
          <Button
            title="Done"
            onPress={() => {
              setOpenModal(!openModal);
            }}
          />
        </SafeAreaView>
      </Modal>
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
