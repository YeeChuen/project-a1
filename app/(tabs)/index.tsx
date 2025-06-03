import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Divider, Drawer } from "react-native-paper";
import { RelativePathString, usePathname, useRouter } from "expo-router";
import { goToStartSession } from "../StartSession";
import { TSession } from "@/lib/utils/types";
import { styleConstant } from "@/lib/utils/styleConstants";
import CreateSession from "../CreateSession";

export const mockSessions: TSession[] = [1, 2].map((item, index) => {
  return {
    key: index,
    id: index,
    sessionName: `Mock Session ${index}`,
    exercises: [
      {
        id: 1,
        exerciseName: `Mock S${index} - Exercise 1`,
        description: `Mock S${index} - Description 1`,
        sets: [
          {
            reps: 12,
            weights: 15,
            duration: 30,
          },
        ],
      },
    ],
  };
});

export default function index() {
  const [sessions, setSessions] = useState<TSession[] | undefined>(undefined);
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    setSessions(mockSessions);
  });

  return (
    <View style={styles.viewport}>
      {sessions &&
        sessions.map((session) => {
          return (
            <View key={session.id}>
              <Button
                title={session.sessionName}
                onPress={() =>
                  goToStartSession({
                    params: {
                      backPath: currentPath as RelativePathString,
                      sessionId: session.id,
                    },
                  })
                }
              />
              <Divider />
            </View>
          );
        })}
      <CreateSession />
    </View>
  );
}

const styles = StyleSheet.create({
  viewport: {
    marginVertical: styleConstant.marginLarge,
    flex: 1,
    gap: styleConstant.gapMedium,
  },
  button: {
    marginHorizontal: styleConstant.marginLarge,
    marginVertical: styleConstant.marginMedium,
  },
  modal: {
    backgroundColor: 'white'
  }
});
