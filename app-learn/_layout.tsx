import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, animation: "ios_from_left" }}
        />
        {/* <Stack.Screen name="index" options={{title: 'Home'}}/>
    <Stack.Screen name="login" options={{title: 'Login'}}/> */}

        <Stack.Screen name="replace"options={{ headerShown: false }} />
        <Stack.Screen name="form" options={{ presentation: "formSheet" }} />
      </Stack>
  );
}
