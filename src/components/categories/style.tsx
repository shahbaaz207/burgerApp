import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  labelTxt: TextStyle;
  itemSeparator: ViewStyle;
  content: ViewStyle;
  categoryTxt: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#F2F2F2",
    paddingVertical: 10,
    width: "100%",
  },
  labelTxt: {
    fontSize: 20,
    fontWeight: "600",
  },
  itemSeparator: {
    margin: 10,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  categoryTxt: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
