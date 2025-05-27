import React from 'react'
import { Text } from 'react-native'
import { useLocalSearchParams } from "expo-router";

const SelectWorkout = () => {
  const params = useLocalSearchParams();


  return (
    <Text>SelectWorkout: {params.workoutId}</Text>
  )
}

export default SelectWorkout