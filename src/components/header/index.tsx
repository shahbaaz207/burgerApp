import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";
import GoBack from "../back-icon";
type Props = {
  label: string;
  onBack?: () => void;
  hasGo?: boolean;
};

const Header = ({ label, onBack, hasGo = false }: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: hasGo ? "space-between" : "center",
        },
      ]}
    >
      {hasGo && <GoBack onBack={onBack} />}
      <Text style={styles.labelTxt}>{label}</Text>
      <View></View>
    </View>
  );
};

export default Header;
