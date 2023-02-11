import React, { FC } from "react";
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import {} from "react-native-svg";
import { theme } from "../../../theme";
import styles from "./styles";

interface IProps {
  labelTxt: string;
  whiteBtn?: boolean;
  onClick: () => void;
  style?: ViewStyle;
  round?: boolean;
  bgColor?: string | undefined | boolean;
  txtColor?: string;
  isCapitalize?: boolean;
  disabled?: boolean;
  btnStyles?: ViewStyle | ViewStyle[];
  txtStyles?: TextStyle | TextStyle[];
  loading?: boolean;
}

const Button: FC<IProps> = ({
  isCapitalize = true,
  txtColor,
  round = false,
  labelTxt,
  whiteBtn = false,
  disabled = false,
  onClick = () => {},
  btnStyles = {},
  txtStyles = {},
  loading = false,
}): JSX.Element => {
  const { container, label, roundBtn, capitalize, roundTxt, loader } = styles(
    whiteBtn,
    txtColor,
    disabled
  );
  const btnStyle = [container, btnStyles];

  const labelStyle = [label, txtStyles, isCapitalize && capitalize];

  if (round) {
    labelStyle.push(roundTxt);
    btnStyle.push(roundBtn);
  }
  return (
    <TouchableOpacity
      style={btnStyle}
      onPress={onClick}
      disabled={disabled || loading}
    >
      <View></View>
      <Text testID="unmasked" numberOfLines={1} style={labelStyle}>
        {!loading && labelTxt}
      </Text>
      {loading ? (
        <ActivityIndicator size={20} color={"#000"} style={loader} />
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;
