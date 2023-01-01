import React from "react";
import { createRoot } from "react-dom/client";

import { Select } from "@ds.e/react";

import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Select.css";

const rootContainer = document.querySelector("#rout") as Element;
const root = createRoot(rootContainer);

const options = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 2", value: "option-2" },
  { label: "Option 3", value: "option-3" },
];

root.render(
  <div>
    <Select options={options} />
    <p>this is some text</p>
  </div>
);

// css class in scss file을 사용해보자
