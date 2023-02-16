import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}){
  return (
    <View className="flex items-center justify-center h-full">
      <Text className="font-bold text-xl">Home</Text>
    </View>
  )
}