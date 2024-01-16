import {
  CognitoUserAttribute,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

const poolData = {
  UserPoolId: "us-east-2_3i4xHxMNJ",
  ClientId: "71lhjh4qlf0rped5pnoeo08bkl",
};

const userPool = new CognitoUserPool(poolData);
console.log(userPool);

const RegisterScreen = ({ navigation }) => {
  const theme = useTheme();
  //   const styles = useMemo(
  //     () =>
  //       StyleSheet.create({
  //         container: {
  //           backgroundColor: theme.colors.primary,
  //           flex: 1,
  //           alignItems: "center",
  //           justifyContent: "center",
  //         },
  //       }),
  //     [theme]
  //   );
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("Qwertyuiop12345!");
  const [username, setUsername] = useState("+17809051234");
  function onRegisterWithEmail() {
    const attributeList = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
      new CognitoUserAttribute({
        Name: "phone_number",
        Value: phone,
      }),
    ];
    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      const cognitoUser = result.user;
      console.log("User registration successful:", cognitoUser);
    });

    navigation.navigate("Verification");
  }
  function onRegisterWithPhone() {}

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
          Enter your email address
        </Text>
        <TextInput
          style={{
            height: 48,
            paddingHorizontal: 10,
            borderRadius: 5,
            backgroundColor: "#FFF",
            marginBottom: 20,
          }}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
          Your phone number
        </Text>
        <TextInput
          style={{
            height: 48,
            paddingHorizontal: 10,
            borderRadius: 5,
            backgroundColor: "#FFF",
            marginBottom: 20,
          }}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          autoCapitalize="none"
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View>
          <Button
            onPress={onRegisterWithEmail}
            textColor="#fff"
            buttonColor="#31A062"
          >
            Verify with your email address
          </Button>
        </View>
        <View>
          <Button
            onPress={onRegisterWithPhone}
            textColor="#fff"
            buttonColor="#31A062"
          >
            Verify with your phone number
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default RegisterScreen;
