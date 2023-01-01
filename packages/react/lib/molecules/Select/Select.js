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
    return (React.createElement("div", null,
        React.createElement("button", { onClick: () => onLabelClick() }, label),
        isOpen && (React.createElement("ul", null, options.map((option, index) => {
            return (React.createElement("li", { key: option.value, onClick: () => {
                    handleOptionSelected(option, index);
                } }, option.label));
        })))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
