import { View, Text, Button, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  RelativePathString,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import { mockSessions } from "./(tabs)";
import { TSession } from "@/lib/utils/types";

export default function StartSession() {
  const params: TStartSessionParams = useLocalSearchParams();
  const router = useRouter();
  const [session, setSession] = useState<TSession | undefined>(undefined);

  useEffect(() => {
    if (!params.backPath) {
      router.replace('/(tabs)');
    }
    if (!params.sessionId) {
      router.replace(params.backPath!);
    }
    mockSessions.forEach((s) => {
      if (s.id == params.sessionId) {
        setSession(s);
      }
    });
  });

  return (
    <SafeAreaView>
      {session && (
        <>
          <Text>StartSession: {session.id}</Text>
          <Text>{session.sessionName}</Text>
          <Button
            title="Back"
            onPress={() => router.replace(params.backPath!)}
          />
        </>
      )}
    </SafeAreaView>
  );
}

type TStartSessionParams = {
  backPath?: RelativePathString;
  sessionId?: number;
};

export function goToStartSession(props: { params: TStartSessionParams }) {
  const router = useRouter();

  return router.replace({
    pathname: "/StartSession",
    params: props.params,
  });
}
