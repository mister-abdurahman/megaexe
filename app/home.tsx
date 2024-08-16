import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";

function home() {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require("@/assets/images/hospyta_logo.png")}
          resizeMode="cover"
        />
      </View>
      {/* <View style={styles.buttonContainer}>
        <Link href={"/onboarding"} asChild>
          <Pressable
            style={styles.button}
            android_ripple={{ color: Colors.primary_light }}
          >
            <Text style={styles.buttonText}>Consult</Text>
          </Pressable>
        </Link>
      </View> */}

      <PrimaryButton href={"/onboarding"}>Consult</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBox: {
    height: 300,
    width: 300,
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  buttonContainer: {
    // marginTop: 10,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    overflow: "hidden",
    height: 40,
  },
  button: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#fff",
  },
});

export default home;
