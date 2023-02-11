import React, { FC, ReactElement } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { normalize } from "../../helper/utils";
import { theme } from "../../../theme";

const LabelText: FC<{
  label?: string;
}> = ({ label }) => {
  return (
    <Text testID="unmasked" style={[styles.label]}>
      {label}
    </Text>
  );
};

export default LabelText;

interface Styles {
  label: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  label: {
    lineHeight: normalize(19),
    color: theme.BLACK,
    fontSize: normalize(13),
    fontWeight: "600",
    marginTop: 13,
  },
});
