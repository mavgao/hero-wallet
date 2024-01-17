import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
        Create your username
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
        Create your own password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New password"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
        Verify your password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Verify your password"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        onPress={() => {
          navigation.navigate("RegisterEmailAndPhone", {
            username: username,
            password: password,
          });
        }}
      >
        Continue
      </Button>
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

export default RegisterScreen;
