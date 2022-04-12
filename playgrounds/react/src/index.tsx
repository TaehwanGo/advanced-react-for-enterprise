import React from "react";
import { createRoot } from "react-dom/client";

import { Button } from "@ds.e/react";

const rootContainer = document.querySelector("#rout") as Element;
const root = createRoot(rootContainer);
root.render(<Button label="Example Button" />);
