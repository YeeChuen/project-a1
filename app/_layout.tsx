import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
    screenOptions={{
      headerStyle: {
        backgroundColor: 'green' // <-- header background color
      },
      headerTintColor: "white" // <-- header text color
    }}
  >
    <Stack.Screen name='index' options = {{ title: 'Home'}}/>
  </Stack>;
}
