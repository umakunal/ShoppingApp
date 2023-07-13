import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AllProduct,Home} from '../Screens/'
import { ScreenName } from '../Constant/ScreenName';


const Stack = createNativeStackNavigator();
const AppRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenName.home} component={Home} />
      <Stack.Screen name={ScreenName.allProduct} component={AllProduct} />
    </Stack.Navigator>
  )
}

export default AppRoute