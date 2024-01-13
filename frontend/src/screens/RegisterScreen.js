import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";

const poolData = {
  UserPoolId: "us-east-2_3i4xHxMNJ",
  ClientId: "71lhjh4qlf0rped5pnoeo08bkl",
};

const RegisterScreen = () => {
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
  const [password, setPassword] = useState("");
  function onRegister() {
    const attributeList = [new CongnitoUserAttribute()];
  }

  return (
    <View>
      <TextInput label="Email" value={email} onChangeText={setEmail} />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <Button onPress={onRegister}></Button>
    </View>
  );
};

export default RegisterScreen;
