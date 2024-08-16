import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, TextInput } from "react-native";

function register() {
  return (
    <View style={styles.screen}>
      <Text style={styles.bigHeadingText}>Register Account</Text>
      <Text style={styles.smallHeadingText}>
        Fill your details or continue with social media
      </Text>

      <View style={{ gap: 10 }}>
        <View style={styles.inputBox}>
          <Text>First Name:</Text>
          <TextInput placeholder="Enter First Name" />
        </View>
        <TextInput />
        <TextInput />
        <TextInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.slate,
  },
  bigHeadingText: {
    fontSize: 32,
    fontWeight: "600",
  },
  smallHeadingText: {
    fontSize: 16,
    fontWeight: "100",
    color: "gray",
    marginHorizontal: 54,
    textAlign: "center",
  },
  inputBox: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  inputText: {
    fontWeight: "bold",
  },
});

export default register;
