import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AddIcon } from "../../assest";
import { navigate } from "../../helper/utils";
import styles from "./style";

type Props = {
  navigation: unknown;
  activeIndex: string;
};

const AddToCategory = ({ navigation, activeIndex }: Props) => {
  const onAddItem = () => {
    navigate(navigation, "AddItem", { activeIndex })();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onAddItem}>
      <AddIcon />
    </TouchableOpacity>
  );
};

export default AddToCategory;
