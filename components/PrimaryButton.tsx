import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { ExpoRouter } from "expo-router/types/expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({
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
    borderRadius: 24,
    backgroundColor: Colors.primary,
    overflow: "hidden",
  },
  InnerContainer: {
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    // fontFamily: "Poppins",
  },
});

export default PrimaryButton;
