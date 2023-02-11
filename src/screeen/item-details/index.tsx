import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { selectItem } from "../../slice";
import { Header, ListCard } from "../../components";
import { navigate } from "../../helper/utils";
import { MenuItem } from "src/components/item-card/grid-card";

const ItemDetails = (props: any) => {
  const { navigation } = props;
  const items = useSelector(selectItem);

  const onGoBack = () => {
    const { goBack, canGoBack, replace } = navigation || {};
    if (canGoBack && canGoBack() && goBack) goBack();
    else if (replace && replace("Home")) replace("Home")();
    else navigate(navigation, "Home");
  };

  const renderItem = ({ item }: { item: MenuItem }) => <ListCard item={item} />;
  return (
    <>
      <Header hasGo onBack={onGoBack} label="Item Details" />
      <FlatList data={items || []} renderItem={renderItem} />
    </>
  );
};

export default ItemDetails;
