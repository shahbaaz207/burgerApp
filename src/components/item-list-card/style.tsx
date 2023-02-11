import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { theme } from "../../../theme";

interface Styles {
  container: ViewStyle;
  itemInfo: ViewStyle;
  des: TextStyle;
  delete: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.primary,
    borderRadius: 4,
    shadowColor: theme.back,
    shadowOpacity: 0.9,
    elevation: 10,
    marginHorizontal: 10,
    alignItems: "center",
  },
  itemInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  des: {
    fontSize: 12,
    color: "#5D5D5D",
  },
  delete: {
    paddingHorizontal: 5,
  },
});

export default styles;
