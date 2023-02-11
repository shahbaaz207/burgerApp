import React, { FC, useMemo } from "react";
import { View, Text } from "react-native";
import styles from "./style";

type ErrorMsgType = {
  msg: string;
  show: boolean;
};
export default ({ show, msg }: ErrorMsgType): JSX.Element | null => {
  if (show) {
    const cMsg = useMemo(
      () =>
        msg.slice(0, 1).toUpperCase() +
        msg.toLocaleLowerCase().slice(1, msg.length),
      [msg]
    );
    return (
      <View style={styles.errorRoot}>
        <Text testID="unmasked" style={styles.errorMsg}>
          {cMsg}
        </Text>
      </View>
    );
  }
  return null;
};
