import React from "react";
import TextFieldUI from "@material-ui/core/TextField";

export default function TextField(props: any) {
  return <TextFieldUI {...props} />;
}

TextField.defaultProps = {
  maxLength: 70
};
