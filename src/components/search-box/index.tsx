import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./style";
import { SearchIcon } from "../../assest";

type Props = {
  ref: any;
  onChangeText: (value: string) => void;
};

const SearchBox = ({ ref, onChangeText }: Props) => {
  return (
    <View style={styles.container}>
      <SearchIcon />
      <TextInput
        onChangeText={onChangeText}
        ref={ref}
        style={{
          width: "100%",
          paddingHorizontal: 10,
        }}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBox;
