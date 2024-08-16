import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { ExpoRouter } from "expo-router/types/expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function FullWidthButton({
  children,
  href,
}: {
  children: string;
  href?: ExpoRouter.Href;
}) {
  return (
    <View style={styles.OuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.InnerContainer, { backgroundColor: "#000" }]
            : [styles.InnerContainer]
        }
        android_ripple={{ color: "#000" }}
      >
        {href ? (
          <Link href={href}>
            <Text style={styles.text}>{children}</Text>
          </Link>
        ) : (
          <Text style={styles.text}>{children}</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  OuterContainer: {
    borderRadius: 16,
    backgroundColor: Colors.primary,
    overflow: "hidden",
  },
  InnerContainer: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    // fontFamily: "Poppins",
  },
});

export default FullWidthButton;
