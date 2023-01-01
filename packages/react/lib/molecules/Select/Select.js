import React, { useState } from 'react';

const Select = ({ options = [], label = "Please select an option", onOptionSelected, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionSelected = (option, optionIndex) => {
        setIsOpen((prev) => !prev);
        onOptionSelected?.(option, optionIndex);
    };
    const onLabelClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { className: "dse-select__label", onClick: () => onLabelClick() },
            React.createElement("span", null, label),
            React.createElement("svg", { width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen && (React.createElement("ul", { className: "dse-select__overlay" }, options.map((option, index) => {
            return (React.createElement("li", { key: option.value, onClick: () => {
                    handleOptionSelected(option, index);
                } }, option.label));
        })))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
