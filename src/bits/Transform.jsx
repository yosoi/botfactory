import PropertyEditor from "bits/PropertyEditor";
import React from "react";

export default function Transform(props) {
  return (
    <PropertyEditor
      placeholder={"Name your transform"}
      {...props}
    ></PropertyEditor>
  );
}
