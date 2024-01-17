import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import axios from "axios";

const VerifyScreen = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const handleInput = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };
  // const handleVerification = async () => {
  //   try {
  //     const verificationCode = code.join("");
  //     const response = await axios.post("https://localhost:3000/verify-code", {
  //       code: verificationCode,
  //     });
  //     console.log(response.data);
  //     Alert.alert("Success", "Verification successful!");
  //   } catch (error) {
  //     console.error("Verification failed: ", error);
  //     Alert.alert("Error", "Verification failed. Please try again.");
  //   }
  // };
  const handleVerification = async () => {
    try {
      const verificationCode = code.join("");
      const response = await axios.post("https://localhost:3000/verify-code", {
        code: verificationCode,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Verify Your Email with a code</Text>
        <View style={{ flexDirection: "row" }}>
          {code.map((digit, index) => {
            return (
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType="numeric"
                key={index}
                value={digit}
                onChangeText={(text) => handleInput(text, index)}
              />
            );
          })}
          <Button onPress={handleVerification} />
        </View>
      </View>
      {/* <View>
        <Text>Verify Your Phone Number with a code</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput style={styles.input} maxLength={1} />
          <TextInput style={styles.input} maxLength={1} />
          <TextInput style={styles.input} maxLength={1} />
          <TextInput style={styles.input} maxLength={1} />
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: 60,
    height: 60,
    textAlign: "center",
    marginHorizontal: 10,
  },
});

export default VerifyScreen;
