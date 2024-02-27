import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import AppStyle from './AppStyle'
import Carousel from './src/components/Carousel/Carousel'


export default function App() {
  return (
    <View>
       <SafeAreaView>
        <Carousel />

       </SafeAreaView>
    </View>
  )
}