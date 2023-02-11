import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { normalize } from "../../helper/utils";

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    marginTop: normalize(3),
  },
});
