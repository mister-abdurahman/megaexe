import InfoText from "@/components/onboarding/InfoText";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TinyText from "@/components/onboarding/TinyText";
import PrimaryButton from "@/components/PrimaryButton";
import FullWidthButton from "@/components/FullWidthButton";
import FullWidthSecondaryButton from "@/components/FullWidthSecondaryButton";

function onboarding() {
  return (
    <LinearGradient colors={["##000", "#000"]} style={{ flex: 1 }}>
      <ImageBackground
        style={styles.screen}
        source={require("@/assets/images/carousel_1.png")}
        imageStyle={{ opacity: 0.65 }}
      >
        <View style={styles.imageBox}>
          <Image
            source={require("@/assets/images/hospyta_transparent_logo.png")}
          />
        </View>

        <View style={{ marginHorizontal: 24 }}>
          <InfoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            facere sequi id est nisi excepturi non earum deleniti
          </InfoText>
          <TinyText text="With Hospyta" />
        </View>

        <View style={{ gap: 16, marginHorizontal: 24, marginTop: 24 }}>
          <FullWidthButton href={"/register"}>Sign In</FullWidthButton>
          <FullWidthSecondaryButton>Sign Up</FullWidthSecondaryButton>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    objectFit: "cover",
  },
  imageBox: {
    marginTop: 50,
    marginLeft: 30,
  },
  image: {},
});

export default onboarding;
