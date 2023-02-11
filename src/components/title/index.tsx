import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <Text numberOfLines={1} style={styles.titleTxt}>
      {title}
    </Text>
  );
};

export default Title;
