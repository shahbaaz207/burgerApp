import { Field, Formik } from "formik";
import { View, ViewStyle } from "react-native";

import React from "react";
import { createSchema } from "./schema";
import { FieldType } from "../../types";
import { FC } from "react";
import { useMemo } from "react";

type FormType = {
  fields: FieldType[];
  onSubmit: (values: any, ...rest: any) => void;
  initialValues: { [x: string]: string | number | any };
  customSubmit: any;
  whiteTheme?: boolean;
  fieldStyle?: ViewStyle;
};

const FormContainer: FC<FormType> = (props) => {
  let {
    onSubmit,
    initialValues,
    fields,
    customSubmit,
    fieldStyle = {},
    whiteTheme,
  } = props;
  const schema = useMemo(() => createSchema(fields), [fields]);

  const renderField = (props: any, index: number) => (
    <Field idx={index} whiteTheme={whiteTheme} key={props.name} {...props} />
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
      enableReinitialize
    >
      {(props) => (
        <>
          <View style={fieldStyle}>{fields.map(renderField)}</View>
          {typeof customSubmit === "function"
            ? customSubmit(props)
            : customSubmit}
        </>
      )}
    </Formik>
  );
};

export default FormContainer;
