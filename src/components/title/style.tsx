import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  titleTxt: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  titleTxt: {
    color: "#0E0E0E",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default styles;
