import React, { useRef, useState } from "react";
import { useLoadItem } from "../../custom-hook";

// Component
import {
  AddToCategory,
  Categories,
  Header,
  MenuItems,
  SearchBox,
} from "../../components";
import { CATEGORIES } from "../../components/categories";
import { db } from "../../config/firebase";

const Home = (props: any) => {
  const { navigation } = props;
  const [results, loading, init, setResults] = useLoadItem(CATEGORIES[0].name);

  const [activeIndex, setActiveIndex] = useState(CATEGORIES[0].name);

  const onActiveCategory = (name: string) => () => {
    setActiveIndex(name);
    init(name);
  };

  const ref = useRef();

  const onChangeText = (value: string) => {
    const serarchData = results.filter(({ data }) =>
      data?.title?.includes(value)
    );
    if (!value) init(activeIndex);
    setResults(serarchData || []);
  };

  const onUpdateItems = (uuid: string) => {
    const updateList = results.filter(({ id }) => id !== uuid);
    setResults(updateList || []);
  };

  const handleRefresh = () => init(activeIndex);

  return (
    <>
      <Header label="Home" />
      <SearchBox onChangeText={onChangeText} ref={ref} />
      <Categories
        activeIndex={activeIndex}
        onActiveCategory={onActiveCategory}
      />
      <MenuItems
        results={results}
        loading={loading}
        navigation={navigation}
        onUpdateItems={onUpdateItems}
        handleRefresh={handleRefresh}
      />
      <AddToCategory activeIndex={activeIndex} navigation={navigation} />
    </>
  );
};

export default Home;
