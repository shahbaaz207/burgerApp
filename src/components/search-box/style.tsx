import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { theme } from "../../../theme";

interface Styles {
  container: ViewStyle;
  labelTxt: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    marginHorizontal: 20,
    borderRadius: 5,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: theme.primary,
    shadowColor: theme.back,
    shadowOpacity: 0.9,
    elevation: 10,
  },
  labelTxt: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default styles;
