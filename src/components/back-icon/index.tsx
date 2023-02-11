import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { BackIcon } from "../../assest";

import styles from "./style";

const GoBack: FC<{
  onBack?: () => void;
  children?: any;
}> = ({ onBack }) => {
  return (
    <TouchableOpacity onPress={onBack} style={styles.goBackContainer}>
      <BackIcon />
    </TouchableOpacity>
  );
};

export default GoBack;
