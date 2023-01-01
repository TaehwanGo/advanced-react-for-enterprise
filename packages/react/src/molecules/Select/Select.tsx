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
    <div className="dse-select">
      <button className="dse-select__label" onClick={() => onLabelClick()}>
        <span>{label}</span>
        <svg
          width="1rem"
          height="1rem"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="dse-select__overlay">
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
