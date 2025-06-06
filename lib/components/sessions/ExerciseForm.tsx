import { globalStyles } from "@/lib/utils/styleConstants";
import { TExercise } from "@/lib/utils/types";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

interface ExerciseFormProps {
  value: TExercise;
  onCopy: () => void;
  onUp: () => void;
  onDown: () => void;
  editMode: boolean;
  onDelete: () => void;
  onSave: (saveItem: TExercise) => void;
}

export default function ExerciseForm(props: ExerciseFormProps) {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!props.editMode) setEdit(false);
    if (!edit) setTempExercise(props.value);
    console.log("ExerciseForm");
  });

  const [tempExercise, setTempExercise] = useState(props.value);

  return (
    <>
      <View style={globalStyles.exerciseForm}>
        <View style={globalStyles.exerciseNameView}>
          <Text style={globalStyles.exerciseName} numberOfLines={1}>
            {props.value.exerciseName}
          </Text>
        </View>

        <View style={globalStyles.innerExerciseForm}>
          {props.editMode ? (
            <>
              {edit ? (
                <>
                  <Pressable
                    onPress={() => {
                      setEdit(!edit);
                    }}
                  >
                    <Text>[CANCEL]</Text>
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      props.onSave(tempExercise);
                      setEdit(!edit);
                    }}
                  >
                    <Text>[SAVE]</Text>
                  </Pressable>
                </>
              ) : (
                <>
                  <Pressable onPress={() => props.onCopy()}>
                    <Text>[COPY]</Text>
                  </Pressable>
                  <Pressable onPress={() => props.onDelete()}>
                    <Text>[DEL]</Text>
                  </Pressable>
                  <Pressable onPress={() => setEdit(!edit)}>
                    <Text>[EDIT]</Text>
                  </Pressable>
                </>
              )}
            </>
          ) : (
            <>
              <Pressable onPress={() => props.onUp()}>
                <Text>[UP]</Text>
              </Pressable>
              <Pressable onPress={() => props.onDown()}>
                <Text>[DN]</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
      {edit && (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={500}
        >
          <Text>
            Exercise Name:{" "}
            <TextInput
              onChangeText={(text) =>
                setTempExercise({ ...tempExercise, exerciseName: text })
              }
              value={tempExercise.exerciseName}
            />
          </Text>

          <Text>
            Exercise Description:{" "}
            <TextInput
              onChangeText={(text) =>
                setTempExercise({ ...tempExercise, description: text })
              }
              value={tempExercise.description}
            />
          </Text>

          <Text>
            Repetitions:{" "}
            <TextInput
              onChangeText={(text) =>
                setTempExercise({ ...tempExercise, reps: +text })
              }
              value={tempExercise.reps ? tempExercise.reps.toString() : "1"}
              keyboardType="number-pad"
            />
          </Text>

          <Text>
            Weights:{" "}
            <TextInput
              onChangeText={(text) =>
                setTempExercise({ ...tempExercise, weights: +text })
              }
              value={
                tempExercise.weights ? tempExercise.weights.toString() : "0"
              }
              keyboardType="number-pad"
            />
          </Text>

          <Text style={globalStyles.flexComponent}>
            Durations:{" "}
            <TextInput
              onChangeText={(text) =>
                setTempExercise({ ...tempExercise, duration: +text })
              }
              value={
                tempExercise.duration ? tempExercise.duration.toString() : "0"
              }
              keyboardType="number-pad"
            />
          </Text>
        </KeyboardAvoidingView>
      )}
    </>
  );
}
