import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { theme } from "../../../theme";
import { normalize } from "../../helper/utils";

interface Styles {
  input: ViewStyle;
}

export default StyleSheet.create<Styles>({
  input: {
    paddingHorizontal: normalize(15),
    width: "100%",
    height: normalize(theme.inputHeight),
    fontSize: normalize(12),
    letterSpacing: 0.5,
    borderRadius: 6,
    color: theme.BLACK,
    borderWidth: 1,
    borderColor: theme.primaryGray,
    backgroundColor: theme.primary,
    display: "flex",
    justifyContent: "center",
    textAlignVertical: "center",
    alignItems: "center",
  },
});
