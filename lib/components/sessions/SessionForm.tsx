import React, { useEffect, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  View
} from "react-native";
import { Divider } from "react-native-paper";
import { styles } from "../../utils/styleConstants";
import { TExercise } from "../../utils/types";
import ExerciseForm from "./ExerciseForm";

interface SessionFormProps {
  sessionId?: number;
}

export default function SessionForm(props: SessionFormProps) {
  const [exerciseTitle, setExerciseTitle] = useState<string | undefined>(
    undefined
  );

  const [exercises, setExercises] = useState<TExercise[]>([]);

  const [newExercise, setNewExercise] = useState<TExercise | undefined>(
    undefined
  );

  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (props.sessionId) {
      console.log("TODO: implement fetch session for update");
    }
    console.log("useEffect SessionForm");
  });

  return (
    <View>
      {props.sessionId && (
        <Text>TODO: This is update, implement fetch exercise for update</Text>
      )}
      <KeyboardAvoidingView>
        <TextInput
          style={styles.textInputTitle}
          onChangeText={setExerciseTitle}
          value={exerciseTitle}
          placeholder="Your exercise title"
        />
      </KeyboardAvoidingView>
      <Divider />
      <View style={styles.exerciseForm}>
        <View style={styles.exerciseNameView}>
          <Text style={styles.exerciseName} numberOfLines={1}>
            Testing-Testing-Testing-Testing-Testing-Testing-Testing-Testing-Testing-Testing-Testing-Testing
          </Text>
        </View>

        <View style={styles.innerExerciseForm}>
          <Text>COPY</Text>
          <Text>DEL</Text>
          <Text>EDIT</Text>
        </View>
      </View>
      {exercises &&
        exercises.map((exercise, index) => {
          return (
            <View
              key={exercise.exerciseName! + index}
              style={styles.exerciseForm}
            >
              <View style={styles.exerciseNameView}>
                <Text style={styles.exerciseName} numberOfLines={1}>
                  {exercise.id}-{exercise.exerciseName}
                </Text>
              </View>

              <View style={styles.innerExerciseForm}>
                <Text>COPY</Text>
                <Text>DEL</Text>
                <Text>EDIT</Text>
              </View>
            </View>
          );
        })}

      <ExerciseForm 
        exerciseId={exercises.length + 1}
        callBackFn={(exercise) => console.log(exercise)}
      />
      <Divider />
    </View>
  );
}