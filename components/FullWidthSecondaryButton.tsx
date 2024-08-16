import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { ExpoRouter } from "expo-router/types/expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function FullWidthSecondaryButton({
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
            ? [styles.InnerContainer, { backgroundColor: "#fff" }]
            : [styles.InnerContainer]
        }
        android_ripple={{ color: "#fff" }}
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
    borderWidth: 0.6,
    borderColor: "#fff",
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

export default FullWidthSecondaryButton;
