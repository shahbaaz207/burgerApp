import * as Yup from "yup";
import { TextStyle } from "react-native";
import { FieldType } from "../../types";

export const createSchema = (validations: FieldType[]) => {
  let shape: { [x: string]: any } = {};
  for (let i = 0; i < validations.length; i++) {
    let _type = validations[i].type;
    let _key = validations[i].name;
    let _label =
      validations[i].labelTxt || validations[i].placeholder || "Field";
    let _required = validations[i].required;
    let _req_msg = validations[i].req_msg;
    let _err_msg = validations[i].err_msg;
    let _matches = validations[i].matches;
    let _min = validations[i].min;
    let _max = validations[i].max;

    if (_type === "email") {
      shape[_key] = Yup.string().email(
        _err_msg || "Please provide a valid email address"
      );
    } else if (_type === "number") {
      shape[_key] = Yup.number();
      if (_min)
        shape[_key] = shape[_key].min(
          _min,
          "Minimum length should be " + _min + ""
        );
      if (_max)
        shape[_key] = shape[_key].max(
          _max,
          "Maximum length should be" + _max + ""
        );
    } else if (_type === "verify-code") {
      shape[_key] = Yup.string().matches(
        /^[0-9]{6}$/,
        "Verification code must be 6 digits"
      );
    } else {
      shape[_key] = Yup.string().nullable();
      if (_matches)
        shape[_key] = shape[_key].matches(
          _matches,
          _err_msg || "Invalid value"
        );
    }
    if (_required) {
      shape[_key] = shape[_key].required(_req_msg || `${_label} is required`);
    }
  }
  return Yup.object().shape(shape);
};
