import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface FilteringComponentProps {
  options: Option[];
  onFilter: (selectedFilter: string) => void;
}

const FilteringComponent: React.FC<FilteringComponentProps> = ({
  options,
  onFilter,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilterClick = (value: string) => {
    setSelectedFilter(value);
    onFilter(value);
  };

  return (
    <div className="flex flex-wrap items-center justify-center m-auto">
      {options.map((option, index) => (
        <button
          key={index}
          className={`m-2 px-4 py-2 shadow-md rounded ${
            selectedFilter === option.value
              ? "bg-third-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleFilterClick(option.value)}
        >
          {option.label}
        </button>
      ))}
      <button
        className={`m-2 px-4 py-2 border shadow-md rounded ${"bg-black-300 text-black"}`}
        onClick={() => handleFilterClick("ALL")}
      >
        Clear
      </button>
    </div>
  );
};

export default FilteringComponent;
