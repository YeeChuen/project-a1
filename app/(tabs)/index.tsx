import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { Divider, Drawer } from "react-native-paper";
import { RelativePathString, usePathname, useRouter } from "expo-router";
import { goToStartSession } from "../StartSession";

type TSets = {
  reps: number;
  weights: number; // 0 equal to body weight / no weight is used
  duration?: number; // duration mainly used for cardio, such as HIIT or low intensity, Experimental atm
};

type TExercise = {
  id: number;
  exerciseName: string;
  description: string;
  sets: TSets[];
};

export type TSession = {
  id: number;
  sessionName: string;
  exercises: TExercise[];
};

export const mockSessions: TSession[] = [1, 2].map((item, index) => {
  return {
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
    <View style={style.viewport}>
      {sessions &&
        sessions.map((session) => {
          return (
            <>
              <Button
                key={session.id}
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
            </>
          );
        })}

      <Button
        title="Create Session"
        onPress={() => {
          router.push("/CreateSession");
        }}
      />
      {/* <Drawer.Section showDivider={false} style={style.drawerport}>
        {sessions &&
          sessions.map((session) => {
            return (
              <Drawer.Item
                key={session.id}
                label={session.sessionName}
                onPress={() =>
                  goToStartSession({
                    params: {
                      backPath: currentPath as RelativePathString,
                      sessionId: session.id,
                    },
                  })
                }
              />
            );
          })}

        <Drawer.Item
          label="Add new session"
          onPress={() => {
            router.push("/CreateSession")
          }}
        />
      </Drawer.Section> */}
    </View>
  );
}

const style = StyleSheet.create({
  viewport: {
    marginVertical: 24,
    flex: 1,
    gap: 12,
  },
  drawerport: {
    flex: 1,
    gap: 12,
  },
  button: {
    marginHorizontal: 24,
    marginVertical: 12,
  },
});
