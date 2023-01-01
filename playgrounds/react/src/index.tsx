import React from "react";
import { createRoot } from "react-dom/client";

import { Color, Button, Margin } from "@ds.e/react";

import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Margin.css";

import { Spacing } from "@ds.e/foundation";

const rootContainer = document.querySelector("#rout") as Element;
const root = createRoot(rootContainer);
root.render(
  <Margin left space="none">
    <div>this is some text</div>
  </Margin>
);

// css class in scss file을 사용해보자
