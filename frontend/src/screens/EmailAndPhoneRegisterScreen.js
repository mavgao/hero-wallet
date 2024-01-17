import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import UserPool from "../authentication/UserPool";

const EmailAndPhoneRegisterScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { username, password } = route.params;

  const handleVerification = () => {
    const attributeList = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
      new CognitoUserAttribute({
        Name: "phone_number",
        Value: phoneNumber,
      }),
    ];
    UserPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      const cognitoUser = result.user;
      console.log("User registration successful:", cognitoUser);
    });
    navigation.navigate("Verification");
  };

  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
        Enter your email address
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
        Your phone number
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Your phone number"
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <Button onPress={handleVerification}>Continue</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
});

export default EmailAndPhoneRegisterScreen;
