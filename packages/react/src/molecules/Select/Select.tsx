import React, { useState } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  onOptionSelected?(option: any, optionIndex: number): void;
  options?: SelectOption[];
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  label = "Please select an option",
  onOptionSelected,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionSelected = (option: SelectOption, optionIndex: number) => {
    setIsOpen((prev) => !prev);
    onOptionSelected?.(option, optionIndex);
  };

  const onLabelClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={() => onLabelClick()}>{label}</button>

      {isOpen && (
        <ul>
          {options.map((option, index) => {
            return (
              <li
                key={option.value}
                onClick={() => {
                  handleOptionSelected(option, index);
                }}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
