import React from "react";
import { createRoot } from "react-dom/client";

import { Color, Button, Margin, Text } from "@ds.e/react";

import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Text.css";

import { Spacing } from "@ds.e/foundation";

const rootContainer = document.querySelector("#rout") as Element;
const root = createRoot(rootContainer);
root.render(
  <Margin left space="none">
    <Text size="md">this is some text</Text>
  </Margin>
);

// css class in scss file을 사용해보자
