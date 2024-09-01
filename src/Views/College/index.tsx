/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Text, Button } from 'react-native'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'

export default function College() {
  const navigation: any = useNavigation()
  return (
    <S.container>
      <Text>College</Text>
      <Button
        title="teste"
        onPress={() => navigation.navigate('stacksCollege-test')}
      />
    </S.container>
  )
}
