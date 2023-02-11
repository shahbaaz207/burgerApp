import { deleteDoc, doc } from "firebase/firestore/lite";
import React, { Fragment, memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../config/firebase";
import { DeleteIcon } from "../../assest";
import { UserType } from "../../constants";
import { navigate } from "../../helper/utils";
import { addToItem, selectItem } from "../../slice";
import Title from "../title";
import { MenuItem } from "./grid-card";
import styles from "./style";

type Props = {
  navigation: any;
  item: MenuItem;
  id: string;
  onUpdateItems: (id: string) => void;
};

const ItemCard = ({ navigation, item, id, onUpdateItems }: Props) => {
  const dispatch = useDispatch();
  const items = useSelector(selectItem);

  const gotoItemDetails = (id: string) => () => {
    if (items?.length > 0 && items.find((item: MenuItem) => item.id === id)) {
      alert("Alerady added");
      return;
    }
    item["id"] = id;
    dispatch(addToItem(item));
    navigate(navigation, "ItemDetails")();
  };

  const onDelete = async () => {
    await deleteDoc(doc(db, "drinks", id))
      .then(() => onUpdateItems(id))
      .catch((err) => console.log(err));
  };

  if (!item) return <></>;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={gotoItemDetails(id)}>
        <Image
          source={{
            uri: item?.url,
          }}
          style={{
            height: 120,
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.itemInfo}>
        <View>
          <Title title={item?.title} />
          <Text style={styles.des} numberOfLines={1}>
            {item?.description}
          </Text>
        </View>
        {item.creator !== UserType.Admin && (
          <TouchableOpacity style={styles.removeIcon} onPress={onDelete}>
            <DeleteIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default memo(ItemCard);
