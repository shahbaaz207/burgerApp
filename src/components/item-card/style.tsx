import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  itemInfo: ViewStyle;
  des: TextStyle;
  removeIcon: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    margin: 1,
    height: Dimensions.get("window").width / 2,
    width: "50%",
  },
  itemInfo: {
    backgroundColor: "#D8D8D8",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  des: {
    fontSize: 12,
    color: "#5D5D5D",
  },
  removeIcon: {
    paddingHorizontal: 5,
  },
});

export default styles;
