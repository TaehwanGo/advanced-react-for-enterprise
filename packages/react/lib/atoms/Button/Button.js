import React from 'react';

const Button = ({ label }) => {
    return (React.createElement("button", { className: "dse-button__container" },
        label || "Button",
        " - here"));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
