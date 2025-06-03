import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Modal,
  SafeAreaView,
} from "react-native";
import { Divider } from "react-native-paper";
import { styleConstant } from "../../utils/styleConstants";
import { TExercise } from "../../utils/types";

interface SessionFormProps {
  exerciseId?: number;
}

export default function SessionForm(props: SessionFormProps) {
  const [exerciseTitle, setExerciseTitle] = useState<string | undefined>(
    undefined
  );

  const [exercises, setExercises] = useState<TExercise[]>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (props.exerciseId) {
      console.log("TODO: implement fetch exercise for update");
    }
    console.log("useEffect SessionForm");
  });

  return (
    <View>
      {props.exerciseId && (
        <Text>TODO: This is update, implement fetch exercise for update</Text>
      )}
      <KeyboardAvoidingView>
        <TextInput
          style={styles.textInput}
          onChangeText={setExerciseTitle}
          value={exerciseTitle}
          placeholder="Your exercise title"
        />
      </KeyboardAvoidingView>
      <Divider />
      <View style={styles.exerciseForm}>
        <View style={styles.exerciseNameView} >
          <Text style={styles.exerciseName}  numberOfLines={1}>
            Testing-Testing-Testing-Testing-Testing-Testing-Testing-Testing-Testing-Testing-Testing-Testing
          </Text>
        </View>

        <View style={styles.innerExerciseForm}>
          <Text >COPY</Text>
          <Text >DEL</Text>
          <Text >EDIT</Text>
        </View>
      </View>

      <Button
        title="Add Exercise"
        onPress={() => {
          setOpenModal(!openModal);
        }}
      />
      <Divider />
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
            <Text>Hello World!</Text>
          </View>

          <Button
            title="close modal"
            onPress={() => {
              setOpenModal(!openModal);
            }}
          />
        </SafeAreaView>
      </Modal>

      {/* <TouchableOpacity
        onPress={() => {
          console.log("Create and save session");
        }}
        style={styles.textInput}
      >
        <Text>Create Session here</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    // margin: styleConstant.gapMedium,
    // borderWidth: 1,
    padding: styleConstant.paddingMedium,
    // borderRadius: styleConstant.boarderRadiusSmall,
    fontSize: 28,
  },
  pressableButton: {
    margin: styleConstant.gapMedium,
    borderWidth: 1,
    padding: styleConstant.paddingSmall,
    borderRadius: styleConstant.boarderRadiusSmall,
  },
  exerciseForm: {
    flexShrink : 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: styleConstant.marginSmall,
    borderWidth: 0.5,
    padding: styleConstant.paddingSmall,
    borderRadius: styleConstant.boarderRadiusSmall,
  },
  innerExerciseForm: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: 'center',
    gap: styleConstant.gapSmall,
    width: '50%'
  },
  exerciseNameView: {
    width: '60%',
  },
  exerciseName: {
    fontSize: 18,
  }
});
