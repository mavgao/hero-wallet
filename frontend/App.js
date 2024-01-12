import { PaperProvider } from "react-native-paper";
import Main from "./src";

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}
