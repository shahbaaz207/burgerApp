import { View, Text } from "react-native";
import React, { useMemo } from "react";
import {
  Button,
  FormContainer,
  Header,
  KeywordWrapper,
} from "../../components";
import { navigate } from "../../helper/utils";
import { fields } from "./fields";
import { useAddItem } from "../../custom-hook";
import { MenuItem } from "src/components/item-card/grid-card";

type Props = {
  navigation: any;
  route: {
    params: {
      activeIndex: string;
    };
  };
};

const AddItems = (props: Props) => {
  const { navigation, route } = props;

  const collectionName = useMemo(() => route.params.activeIndex, [
    route.params.activeIndex,
  ]);

  const [onAddItem, loading] = useAddItem();

  const onGoBack = () => {
    const { goBack, canGoBack, replace } = navigation || {};
    if (canGoBack && canGoBack() && goBack) goBack();
    else if (replace && replace("Home")) replace("Home")();
    else navigate(navigation, "Home");
  };

  const onSubmit = async (payload: MenuItem) => {
    const resp = await onAddItem(collectionName?.toLocaleLowerCase(), payload);
    navigate(navigation, "Home")();
  };
  return (
    <>
      <Header hasGo label="Add Item" onBack={onGoBack} />
      <KeywordWrapper mgTop={0}>
        <FormContainer
          customSubmit={({ submitForm }: any) => (
            <Button
              labelTxt="Save"
              onClick={submitForm}
              disabled={loading}
              loading={loading}
              btnStyles={{
                marginTop: 30,
              }}
            />
          )}
          fields={fields}
          onSubmit={onSubmit}
          initialValues={{
            title: "",
            url: "",
            description: "",
          }}
        />
      </KeywordWrapper>
    </>
  );
};

export default AddItems;
