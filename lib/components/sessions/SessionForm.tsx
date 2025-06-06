import React, { useEffect, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import { globalStyles } from "../../utils/styleConstants";
import { TExercise } from "../../utils/types";
// import ExerciseForm from "./ExerciseForm";
import { mockSessions } from "@/app/(tabs)";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
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

  const [edit, setEdit] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (props.sessionId) {
      console.log("TODO: implement fetch session for update");
    }
    console.log("useEffect SessionForm");
  });

  return (
    <SafeAreaView style={globalStyles.sessionFormSafeAreaView}>
      {props.sessionId && (
        <Text>TODO: This is update, implement fetch exercise for update</Text>
      )}
      <KeyboardAvoidingView>
        <TextInput
          style={globalStyles.textInputTitle}
          onChangeText={setExerciseTitle}
          value={exerciseTitle}
          placeholder="Your exercise title"
        />
      </KeyboardAvoidingView>

      <View style={globalStyles.sessionFormButtonContainer}>
        <Button title={edit ? "Save" : "Edit"} onPress={() => setEdit(!edit)} />

        <Button
          title="Add Exercise"
          disabled={edit}
          onPress={() => {
            const tempExercise = {
              exerciseName: `Untitled - ${exercises.length + 1}`,
              description: `Untitled - ${exercises.length + 1}`,
              reps: 1,
              weights: 0,
              duration: 0,
            };
            setExercises([...exercises, tempExercise]);
          }}
        />

        <Button title="Done" disabled={edit} onPress={() => router.back()} />
      </View>

      <Divider />
      <ScrollView scrollEnabled={true}>
        {mockSessions[0].exercises.map((exercise, index) => {
          return (
            <ExerciseForm
              key={exercise.exerciseName + index}
              value={exercise}
              onCopy={() => console.log("This is mock data")}
              onUp={() => console.log("This is mock data")}
              onDown={() => console.log("This is mock data")}
              onDelete={() => console.log("This is mock data")}
              // onEdit={() => console.log("This is mock data")}
              editMode={edit}
              onSave={(saveItem: TExercise) => console.log(saveItem)}
            />
          );
        })}
        {exercises &&
          exercises.map((exercise, index) => {
            return (
              <ExerciseForm
                key={exercise.exerciseName + index}
                value={exercise}
                onCopy={() => {
                  const newExercises = [...exercises];
                  newExercises.splice(index + 1, 0, exercise);
                  setExercises(newExercises);
                }}
                onUp={() => {
                  const newExercises = [...exercises];
                  newExercises.splice(index, 1);
                  setExercises([exercise, ...newExercises]);
                }}
                onDown={() => {
                  const newExercises = [...exercises];
                  newExercises.splice(index, 1);
                  setExercises([...newExercises, exercise]);
                }}
                onDelete={() => {
                  const newExercises = [...exercises];
                  newExercises.splice(index, 1);
                  setExercises(newExercises);
                }}
                // onEdit={() => console.log("This is mock data")}
                editMode={edit}
                onSave={(saveItem: TExercise) => {
                  const newExercises = [...exercises];
                  newExercises.splice(index, 1, saveItem);
                  setExercises(newExercises);
                }}
              />
            );
          })}
      </ScrollView>

      <Divider />
    </SafeAreaView>
  );
}
