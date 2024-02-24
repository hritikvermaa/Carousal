import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native'

import AppProStyle from './AppProStyle'

function AppPro(): JSX.Element{
    const isDarkMode=useColorScheme() === 'dark'
 return (
  
  <View style={AppProStyle.container} >
   <Text style={isDarkMode ?AppProStyle.whiteText:AppProStyle.darkText}>Hello World!</Text>
  

  </View>

 )
}

export default AppPro;