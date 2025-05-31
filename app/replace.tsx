import { useRouter, useLocalSearchParams, UnknownInputParams, Href, RelativePathString } from 'expo-router';
import React from 'react';
import { Button, Text, View, SafeAreaView } from 'react-native';

interface replaceCurrentParam {
    currentPathName?: RelativePathString
}

export default function replace() {
    const params: replaceCurrentParam = useLocalSearchParams()
    const router = useRouter()

  return (
    // <SafeAreaView></SafeAreaView>
    <SafeAreaView>
      <Text>replace</Text><Button 
    title="Go Back"
    onPress={() => {
        router.replace({
            pathname: params.currentPathName as RelativePathString
        })
    }}
    />
    </SafeAreaView>
  )
}

export function GoToReplace(props: {params: replaceCurrentParam}) {
    const router = useRouter()
    return <Button 
    title="Go to Replace"
    onPress={() => {
        router.replace({
            pathname: '/replace',
            params: {currentPathName: props.params.currentPathName}
        })
    }}
    />
}