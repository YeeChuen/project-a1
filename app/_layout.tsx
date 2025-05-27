import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f3edf6' // <-- header background color
      },
      headerTintColor: "black", // <-- header text color
    }}
  >
    <Stack.Screen name='screens/workouts/SelectWorkout' options = {{ headerBackVisible: true }}/>
  </Stack>;
}
