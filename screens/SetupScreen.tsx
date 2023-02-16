import { View, Text, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SetupScreen({navigation}){

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const topics = [
        {name: "Entertainment", img: 'https://google.com'},
        {name: "Global", img: 'https://google.com'},
    ]

    return (
    <SafeAreaView className="flex">
      <Text className="font-bold text-xl">Choose Your Topics:</Text>
      <View className='flex flex-row flex-wrap'>
        {topics.map((topic) => {
            return(
                <Text key={topic.name}>{topic.name}</Text>
            )
        })}
      </View>
      <Button title="Continue"
      onPress={() => navigation.navigate('Home')}/>
    </SafeAreaView>
  )
}