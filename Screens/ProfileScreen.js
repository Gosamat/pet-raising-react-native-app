import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../config/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <View style={styles.avatar}>
        <Text style={styles.username}>Your Username</Text>
        <Image
          source={{ uri: "https://art.pixilart.com/2275c1b42ddf9d6.png" }}
          style={styles.avatarImage}
        />
      </View>
      <View style={styles.drawers}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightMode,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#AFE1AF",
    flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  avatarImage: {
    width: "80%", // Set the width and height based on your requirements
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
    bottom: -50,
  },
  drawers: {
    backgroundColor: "#088F8F",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  username: {
    fontSize: 70,
    textAlign: "center",
    position: "absolute",
    top: 0,
    fontFamily: "Impact",
    opacity: 0.7 
  },
});
