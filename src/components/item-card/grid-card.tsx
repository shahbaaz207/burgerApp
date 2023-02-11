import React, { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { ItemType } from "src/custom-hook/useLoadItem";
import ItemCard from ".";
import Title from "../title";

export type MenuItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  creator: string;
  createdAt: string;
};

const numColumns = 2;

interface Props {
  navigation: any;
  loading: boolean;
  results: ItemType[];
  onUpdateItems: (id: string) => void;
  handleRefresh: () => void;
}
const MenuItems = ({
  navigation,
  results,
  loading,
  onUpdateItems,
  handleRefresh,
}: Props) => {
  const formatData = useCallback(
    (data: any, numColumns: number) => {
      const numberOfFullRows = Math.floor(data.length / numColumns);
      let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
      while (
        numberOfElementsLastRow !== numColumns &&
        numberOfElementsLastRow !== 0
      ) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
      }

      return data;
    },
    [results]
  );

  const renderItem = ({ item }: { item: { data: MenuItem; id: string } }) => (
    <ItemCard
      navigation={navigation}
      item={item.data}
      id={item.id}
      onUpdateItems={onUpdateItems}
    />
  );

  return (
    <FlatList
      data={formatData(results || [], numColumns)}
      renderItem={renderItem}
      numColumns={numColumns}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={handleRefresh} />
      }
      ListEmptyComponent={
        <View
          style={{
            marginVertical: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? (
            <>
              <ActivityIndicator />
              <Text>Loading.....</Text>
            </>
          ) : (
            <Title title="Sorry No Data!" />
          )}
        </View>
      }
    />
  );
};

export default MenuItems;
