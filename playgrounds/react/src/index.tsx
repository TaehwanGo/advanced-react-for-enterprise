import React from "react";
import { createRoot } from "react-dom/client";

import { Color, Spacing } from "@ds.e/react";

import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/Utilities.css";

const rootContainer = document.querySelector("#rout") as Element;
const root = createRoot(rootContainer);
root.render(<Color hexCode="#000" width={Spacing.sm} height={Spacing.sm} />);

// css class in scss file을 사용해보자
