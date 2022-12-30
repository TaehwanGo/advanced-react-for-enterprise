import React from "react";
import { createRoot } from "react-dom/client";

import { Color } from "@ds.e/react";

import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/Utilities.css";
import { Spacing } from "@ds.e/foundation";

const rootContainer = document.querySelector("#rout") as Element;
const root = createRoot(rootContainer);
root.render(<Color hexCode="#000" width={Spacing.sm} height={Spacing.sm} />);

// css class in scss file을 사용해보자
