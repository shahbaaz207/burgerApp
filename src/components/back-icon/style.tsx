import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

interface Styles {
  goBackContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  goBackContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    paddingVertical: 10,
  },
});

export default styles;
