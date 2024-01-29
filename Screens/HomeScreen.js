// HomeScreen.js
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Fitness from '@ovalmoney/react-native-fitness';
import { SafeAreaView } from "react-native-safe-area-context";

import colors from '../config/colors'

export default function HomeScreen() {
  const [steps, setSteps] = useState(100);



  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      {/* Display number of steps */}
      <Text style={styles.stepsText}>Steps Today: {steps}</Text>
      {/* Unity view for 3D creature */}
      {/* Health and Excitement Bars */}
      <View style={styles.barsContainer}>
        <Text style={styles.barLabel}>Health</Text>
        <View style={[styles.bar, { width: `${Math.min(steps, 100)}%` }]} />
        <Text style={styles.barLabel}>Excitement</Text>
        <View style={styles.bar} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightMode,
    alignItems: "center",
  },
  stepsText: {
    marginTop: 10,
    fontSize: 16,
  },
  barsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  barLabel: {
    marginVertical: 5,
  },
  bar: {
    height: 20,
    width: "80%",
    backgroundColor: "green", // Adjust the color
    marginVertical: 5,
  },
});
