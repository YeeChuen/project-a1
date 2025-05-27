import React from "react";
import HomePage from "./screens/home/HomePage";
import { View, Button, SafeAreaView } from "react-native";
import { Link, useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <View>
      <HomePage />
      <Button
        title="Select Workout"
        onPress={() =>
          router.push({
            pathname: "/screens/workouts/SelectWorkout",
            params: { workoutId: "1234" },
          })
        }
      />
    </View>
  );
};

export default Home;
