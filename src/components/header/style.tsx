import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { theme } from "../../../theme";

interface Styles {
  container: ViewStyle;
  labelTxt: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  labelTxt: {
    fontSize: 20,
    fontWeight: "600",
    color: theme.BLACK,
  },
});

export default styles;
