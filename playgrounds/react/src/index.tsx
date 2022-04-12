import React from "react";
import { createRoot } from "react-dom/client";

import { Button } from "@ds.e/react";

import "@ds.e/scss/lib/Button.css";

const rootContainer = document.querySelector("#rout") as Element;
const root = createRoot(rootContainer);
root.render(<Button label="Example Button" />);
