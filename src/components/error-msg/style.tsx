import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { normalize } from "../../helper/utils";

interface Styles {
  errorRoot: ViewStyle;
  errorMsg: TextStyle;
}

export default StyleSheet.create<Styles>({
  errorRoot: {
    marginTop: normalize(3),
    marginBottom: normalize(-12),
    position: "relative",
  },
  errorMsg: {
    fontSize: normalize(10),
    color: "#cb3837",
    textAlign: "left",
    width: "100%",
  },
});
