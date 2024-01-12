import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    // Logic for sending password reset email
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button mode="contained" onPress={handlePasswordReset}>
        Send Password Reset Email
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default ForgotPasswordScreen;
