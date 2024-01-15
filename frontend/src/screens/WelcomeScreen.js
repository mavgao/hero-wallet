import { SafeAreaView, ScrollView, View } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";
const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Card>
          <Card.Cover source={require("../../assets/welcome.png")} />
          <Card.Content>
            <Title>Stay on top of your finance with us.</Title>
            <Paragraph>
              We offer a financial service that enables easy management of
              various currencies, also catering to your daily expense
              requirements.
            </Paragraph>
          </Card.Content>
        </Card>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 40,
          }}
        >
          <Button mode="contained" onPress={() => console.log("Login")}>
            Log in
          </Button>
          <Button
            mode="outlined"
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Register
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default WelcomeScreen;
