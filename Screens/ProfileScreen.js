import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../config/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const testUser = {
  username: "Jonny Mayday",
  avatar: "https://art.pixilart.com/2275c1b42ddf9d6.png",
  coins: 134,
  items: {
    candy: 1,
    drink: 5,
    bread: 1,
    captureBall: 3,
  },
};

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <View style={styles.avatar}>
        <Text style={styles.username}>{testUser.username}</Text>
        <Image source={{ uri: testUser.avatar }} style={styles.avatarImage} />
      </View>
      <View style={styles.drawers}>
        <Text style={styles.itemsHeader}>Items:</Text>
        {Object.entries(testUser.items).map(([itemName, quantity]) => (
          <View style={styles.itemContainer} key={itemName}>
            <Text>{`${itemName}: ${quantity}`}</Text>
          </View>
        ))}
      </View>
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
