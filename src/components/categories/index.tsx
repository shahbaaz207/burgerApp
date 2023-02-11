import React, { FC, memo, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../../theme";
import styles from "./style";

type Props = {
  onActiveCategory: (name: string) => () => void;
  activeIndex: string;
};

export const CATEGORIES = [
  {
    id: "1",
    name: "Drinks",
  },
  {
    id: "2",
    name: "Burgers",
  },
  {
    id: "3",
    name: "Desserts",
  },
  {
    id: "4",
    name: "Wraps",
  },
  {
    id: "5",
    name: "Pizza",
  },
];

export const ItemSeparator: FC<{}> = memo(() => (
  <View style={styles.itemSeparator} />
));

const Categories = ({ onActiveCategory, activeIndex }: Props) => {
  const renderItem = (item: { item: any; index: number }) => {
    const { name } = item?.item;
    return (
      <TouchableOpacity onPress={onActiveCategory(name)}>
        <Text
          style={[
            styles.categoryTxt,
            {
              color: activeIndex === name ? theme.lightYellow : "gray",
            },
          ]}
        >
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        ItemSeparatorComponent={ItemSeparator}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={CATEGORIES || []}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Categories;
