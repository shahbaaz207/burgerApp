import React, { ComponentType, FC, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, ItemDetails, AddItems } from "../screeen";

export const THEME = {
  dark: false,
  colors: {
    primary: "transparent",
    background: "transparent",
    card: "transparent",
    text: "transparent",
    border: "transparent",
    notification: "transparent",
  },
};
const Stack = createNativeStackNavigator();

export type ScreenType = {
  name: string;
  component: ComponentType<any>;
};

const SCREENS: ScreenType[] = [
  { name: "Home", component: Home },
  {
    name: "ItemDetails",
    component: ItemDetails,
  },
  {
    name: "AddItem",
    component: AddItems,
  },
];

const AppStack: FC = () => {
  const screensView = useMemo(
    () =>
      SCREENS &&
      SCREENS.map(({ name, component }: ScreenType) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
      )),
    []
  );

  return (
    <NavigationContainer theme={THEME}>
      <Stack.Navigator>{screensView}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
