import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { stacksCollege } from 'Router/routes'
import HeaderApp from 'components/HeaderApp'
import College from 'Views/College'
import Teste from 'Views/Teste'

const StackMore = createStackNavigator()

export default function StackCollege() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes('stacksCollege-') ? <HeaderApp /> : null
  }

  return (
    <StackMore.Navigator
      screenOptions={{
        header: ({ route }) => {
          return isShowHeaderApp(route.name)
        }
      }}
      initialRouteName={stacksCollege.college}
    >
      <StackMore.Screen name={stacksCollege.college} component={College} />
      <StackMore.Screen name={stacksCollege.teste} component={Teste} />
    </StackMore.Navigator>
  )
}
