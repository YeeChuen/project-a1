import { useRouter, useLocalSearchParams, UnknownInputParams } from 'expo-router';
import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

interface formParam extends UnknownInputParams {
    id?: string;
}

export default function form() {
  const params: formParam = useLocalSearchParams();
  return (
    <ScrollView>
      <Text>form: {params.id}</Text>
      <Text>form: {params.id}</Text>
      <Text>form: {params.id}</Text>
      <Text>form: {params.id}</Text>
      <Text>form: {params.id}</Text>
      <Text>form: {params.id}</Text>
      <Text>form: {params.id}</Text>
      <Text>form: {params.id}</Text>
    </ScrollView>
  )
}

export function GoToForm(props: {params: formParam}) {
    const router = useRouter();
  return <Button 
    title='Go to form'
    onPress={() => {
        router.push({
            pathname: "/form",
            params: props.params,
          })
    }}
    />;
}