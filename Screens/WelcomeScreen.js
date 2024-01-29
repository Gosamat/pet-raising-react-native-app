// WelcomeScreen.js
import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

export default function WelcomeScreen({ navigation }) {
  const image = {
    uri: "https://mfiles.alphacoders.com/983/983545.jpg",
  };

  const handlePress = () => {
    console.log("click click pow");
    navigation.navigate("TabBar");
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <Pressable style={styles.continueButton} onPress={handlePress}>
        <Text style={styles.buttonText}>I'm pressable</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  continueButton: {
    backgroundColor: colors.primary,
    width: "80%",
    position: "absolute",
    bottom: "10%",
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
