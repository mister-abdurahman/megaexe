import React from "react";
import { StyleSheet, Text, View } from "react-native";

function InfoText({ children }: { children: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 240,
    marginBottom: 8,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default InfoText;
