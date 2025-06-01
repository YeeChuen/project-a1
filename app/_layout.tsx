import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, animation: "ios_from_left" }}
        />
        <Stack.Screen name="StartSession" options={{ headerShown: false }} />
        <Stack.Screen
          name="CreateSession"
          options={{ presentation: "formSheet" }}
        />
      </Stack>
  );
}
