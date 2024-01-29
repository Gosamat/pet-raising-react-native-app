import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../config/colors'


export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Text>ActivityScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.primary,
        justifyContent:"center",
        alignItems: "center",
    }
})