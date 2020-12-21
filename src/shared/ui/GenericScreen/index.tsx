import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

interface GenericScreenProps {
  title: string;
}

const GenericScreen = ({ title }: GenericScreenProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

export default GenericScreen;
