import { TSets } from "@/lib/utils/types";
import React, { useState } from "react";
import { Button, Modal, SafeAreaView, Text, View } from "react-native";

interface SetFormProps {
  setId: number;
  callBackFn: (value: TSets) => void;
}

const defaultValue = {
  reps: 1,
  weights: 0,
  duration: 0,
};

export default function SetForm(props: SetFormProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [set, setSet] = useState<TSets>({
    id: props.setId,
    ...defaultValue,
  });

  return (
    <View>
      <Button
        title="Add Set"
        onPress={() => {
          setOpenModal(!openModal);
        }}
      />
      <Modal
        animationType="fade"
        transparent={false}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <SafeAreaView>
          <View>
            {/* <TextInput
              style={styles.textInputTitle}
              keyboardType="numeric"
              onChangeText={(value) => {
                setSet({ ...set, setName: value });
              }}
              value={set.setName}
              placeholder="Set name"
            />
            <TextInput
              style={styles.textInputHeading}
              onChangeText={(value) => {
                setSet({ ...set, description: value });
              }}
              value={set.description}
              placeholder="Description"
            /> */}
            <Text>TODO: add sets</Text>
          </View>

          <Button
            title="Done"
            onPress={() => {
              props.callBackFn(set);
              setSet({
                id: props.setId,
                ...defaultValue,
              });
              setOpenModal(!openModal);
            }}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
}
