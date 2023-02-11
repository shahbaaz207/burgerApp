import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { theme } from "../../../theme";
import { normalize } from "../../helper/utils";

interface Styles {
  container: ViewStyle;
  label: TextStyle;
  roundBtn: ViewStyle;
  roundTxt: TextStyle;
  capitalize: TextStyle;
  loader: ViewStyle;
}

const styles = (
  whiteBtn: boolean,
  txtColor = theme.primary,
  disabled: boolean
) =>
  StyleSheet.create<Styles>({
    container: {
      backgroundColor: disabled ? theme.subText : "green",
      borderRadius: normalize(8),
      padding: normalize(10),
      paddingHorizontal: normalize(10),
      marginVertical: normalize(10),
      paddingVertical: normalize(13),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      position: "relative",
      opacity: disabled ? 0.6 : 1,
    },
    loader: {
      position: "absolute",
      left: "50%",
      right: "50%",
    },
    capitalize: {
      textTransform: "capitalize",
    },
    label: {
      textAlign: "center",
      fontWeight: "700",
      fontSize: normalize(17),
      color: "white",
    },
    roundBtn: {
      backgroundColor: theme.subText,
      borderRadius: 25,
      paddingVertical: normalize(12),
      paddingHorizontal: normalize(10),
    },
    roundTxt: {
      fontSize: normalize(12),
      fontWeight: "bold",
    },
  });

export default styles;
