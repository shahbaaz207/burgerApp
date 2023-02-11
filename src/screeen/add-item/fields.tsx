import { FieldType } from "../../types";
import { Field } from "../../components";

const labelCol = 0;

const fields: FieldType[] = [
  {
    labelTxt: "Title",
    name: "title",
    placeholder: "Enter title",
    component: Field,
    type: "text",
    required: true,
    labelCol,
  },
  {
    labelTxt: "Image Url",
    name: "url",
    placeholder: "Enter image url(https://example)",
    component: Field,
    type: "text",
    required: true,
    labelCol,
  },
  {
    labelTxt: "Description",
    name: "description",
    placeholder: "Enter description",
    component: Field,
    type: "text",
    required: true,
    labelCol,
  },
];

export { fields };
