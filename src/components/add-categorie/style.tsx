import { StyleSheet, ViewStyle } from "react-native";
import { theme } from "../../../theme";

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    position: "absolute",
    bottom: 20,
    zIndex: 2,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 100,
    height: 50,
    width: 50,
    justifyContent: "center",
    shadowColor: theme.back,
    shadowOpacity: 0.9,
    elevation: 10,
    alignItems: "center",
  },
});

export default styles;
