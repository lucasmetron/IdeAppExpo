/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native'

import * as S from './styles'

export default function Content() {
  const navigation: any = useNavigation()

  return (
    <S.container>
      <Text>Content</Text>
      <Button
        title="teste"
        onPress={() => navigation.navigate('stacksContent-test')}
      />
      <Button
        title="teste fora das tabs"
        onPress={() => navigation.navigate('stacksMain-test')}
      />
    </S.container>
  )
}
