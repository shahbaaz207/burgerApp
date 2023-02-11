import React, { FC } from "react";
import { TextInput, View } from "react-native";
import { theme } from "../../../theme";
import ErrorMsg from "../error-msg";
import LabelText from "../label-text";
import { FieldType } from "../../types";
import { getInputTheme } from "../form";
import styles from "./style";

const TextField: FC<FieldType> = React.memo(
  ({
    SvgIcon,
    field: { name, value },
    create_err_msg,
    form: { handleChange, errors, handleBlur, touched, setFieldValue },
    labelTxt,
    labelCol,
    whiteTheme,
    disable,
    clear,
    style,
    optionalTxt,
    ...rest
  }) => {
    const handleValue = (text: string) => {
      handleChange(name)(text?.trim()?.length > 0 ? text : text?.trim());
    };
    return (
      <View style={styles.container}>
        <LabelText label={labelTxt} />
        <>
          <TextInput
            onBlur={handleBlur(name)}
            value={value}
            onChangeText={handleValue}
            style={getInputTheme(disable, style)}
            placeholderTextColor={theme.subText}
            {...rest}
          />
        </>
        <ErrorMsg
          show={errors[name] && touched[name]}
          msg={(create_err_msg && create_err_msg(value)) || errors[name]}
        />
      </View>
    );
  }
);

export default TextField;
