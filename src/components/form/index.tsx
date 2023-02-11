import React from "react";
import { ViewStyle, TextStyle } from "react-native";
import { theme } from "../../../theme";
import TextField from "../text-input";
import FormContainer from "./form";
import styles from "./style";

export const getInputTheme = (
  disable = false,
  style?: ViewStyle
): ViewStyle => {
  const disableStyle: any = disable
    ? { color: theme.subText, opacity: 0.8 }
    : {};
  return { ...styles.input, ...disableStyle, ...(style || {}) };
};

const getField = (type: string | undefined) => {
  switch (type) {
    case "text":
      return TextField;
    default:
      return TextField;
  }
};

export type FieldType = {
  name: string;
  placeholder: any;
  type:
    | "select"
    | "input-contact"
    | "email"
    | "password"
    | "text"
    | "number"
    | "input-date"
    | "date"
    | "contact"
    | "verify-code"
    | "filter-symbol";
  labelTxt?: string;
  SvgIcon?: any;
  form?: any;
  field?: any;
  required: boolean;
  matches?: any;
  create_err_msg?: any;
  component: any;
  min?: number;
  max?: number;
  req_msg?: string;
  err_msg?: string;
  labelCol?: number;
  dateExtra?: any;
  whiteTheme?: boolean;
  options?: string[];
  disable?: boolean;
  clear?: boolean;
  noData?: boolean;
  style?: TextStyle;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  optionalTxt?: string;
};

export default ({ ...props }: FieldType) => {
  const Field = getField(props.type);
  return <Field {...props} />;
};

export { FormContainer };
