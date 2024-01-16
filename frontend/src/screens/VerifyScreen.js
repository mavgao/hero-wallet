import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

const VerifyScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} maxLength={1} />
      <TextInput style={styles.input} maxLength={1} />
      <TextInput style={styles.input} maxLength={1} />
      <TextInput style={styles.input} maxLength={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
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
