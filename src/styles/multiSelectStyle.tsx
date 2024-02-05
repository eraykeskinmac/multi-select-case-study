import { StylesConfig } from "react-select";
import { Option } from "../types/characterTypes";

export const multiSelectStyle: StylesConfig<Option, true> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    width: "450px",
    borderColor: state.isFocused ? "grey" : "#ddd",
    boxShadow: state.isFocused ? "0 0 0 1px grey" : "none",
    ":hover": {
      borderColor: state.isFocused ? "grey" : "#aaa",
    },
    borderRadius: "10px",
  }),
  menu: (provided) => ({
    ...provided,
    borderColor: "#ddd",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #ddd",
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "gray" : "white",
    ":hover": {
      backgroundColor: "#f5f5f5",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#f0f0f0", // Light grey background
    borderRadius: "5px", // Rounded corners for the tags
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "black",
    borderRadius: "5px", // Optionally, apply rounded corners to the label as well
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#606060", // Dark grey color for the close (x) icon
    ":hover": {
      backgroundColor: "#d0d0d0", // Slightly darker grey on hover
      color: "white",
      borderRadius: "5px", // Rounded corners for the close (x) icon
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    textAlign: "left",
  }),
};
