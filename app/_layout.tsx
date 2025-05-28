import { Stack } from "expo-router";
import { TextInput } from "react-native-paper";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    {/* <Stack.Screen name="index" options={{title: 'Home'}}/>
    <Stack.Screen name="login" options={{title: 'Login'}}/> */}
  </Stack>;
}
