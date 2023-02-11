import { TextStyle } from "react-native";

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
  whiteTheme?: boolean;
  options?: string[];
  disable?: boolean;
  clear?: boolean;
  noData?: boolean;
  style?: TextStyle;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  optionalTxt?: string;
};
