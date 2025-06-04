import { styles } from "@/lib/utils/styleConstants";
import { TExercise } from "@/lib/utils/types";
import React, { useState } from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import SetForm from "./SetForm";

interface ExerciseFormProps {
  exerciseId: number;
  callBackFn: (value: TExercise) => void;
}

const defaultValue = {
  exerciseName: "",
  description: "",
  sets: [],
};

export default function ExerciseForm(props: ExerciseFormProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [exercise, setExercise] = useState<TExercise>({
    id: props.exerciseId,
    ...defaultValue,
  });

  return (
    <View>
      <Button
        title="Add Exercise"
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
            <Text>Exercise - {exercise.id + 1}</Text>
            <TextInput
              style={styles.textInputTitle}
              onChangeText={(value) => {
                setExercise({ ...exercise, exerciseName: value });
              }}
              value={exercise.exerciseName}
              placeholder="Exercise name"
            />
            <TextInput
              style={styles.textInputHeading}
              onChangeText={(value) => {
                setExercise({ ...exercise, description: value });
              }}
              value={exercise.description}
              placeholder="Description"
            />
            {exercise.sets.map((set, index) => (
              <Text key={exercise.exerciseName + exercise.id + set.id}>
                {set.id}
              </Text>
            ))}
          </View>

          <SetForm
            setId={exercise.sets.length + 1}
            callBackFn={(set) =>
              setExercise({ ...exercise, sets: [...exercise.sets, set] })
            }
          />

          <Button
            title="Done"
            onPress={() => {
              if (exercise.exerciseName != "" && exercise.sets.length > 0) {
                props.callBackFn(exercise);
              }
              setExercise({
                id: props.exerciseId,
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
