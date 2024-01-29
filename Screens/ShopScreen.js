import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../config/colors'

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text>ShopScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.lightMode,
        justifyContent:"center",
        alignItems: "center",
    }
})