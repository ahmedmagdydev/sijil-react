import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      autocomplete="false"
      className="form-control"
      {...field}
      {...props}
      placeholderText="MM/DD/YYYY"
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};
