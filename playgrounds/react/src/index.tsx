import React from "react";
import { createRoot } from "react-dom/client";

import { Color } from "@ds.e/react";

import "@ds.e/scss/lib/Button.css";

const rootContainer = document.querySelector("#rout") as Element;
const root = createRoot(rootContainer);
root.render(<Color hexCode="#000" width="1rem" height="1rem" />);
