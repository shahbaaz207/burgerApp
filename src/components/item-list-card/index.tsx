import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import Title from "../title";
import { DeleteIcon } from "../../assest";
import { MenuItem } from "../item-card/grid-card";
type Props = {
  item: MenuItem;
};

const ListCard = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.url,
        }}
        style={{
          height: 100,
          width: 100,
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        }}
        resizeMode="cover"
      />
      <View style={styles.itemInfo}>
        <Title title={item.title} />
        <Text style={styles.des} numberOfLines={1}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default ListCard;
