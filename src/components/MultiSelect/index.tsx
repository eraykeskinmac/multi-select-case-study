import { useState } from "react";
import Select, { MultiValue } from "react-select";
import { useCharacters } from "../../hooks/useCharacters";
import { Character, Option } from "../../types/characterTypes";
import OptionComponent from "./OptionComponent";
import { multiSelectStyle } from "../../styles/multiSelectStyle";

const MultiSelect = () => {
  const { characters, isLoading, error, refetchCharacters } = useCharacters();
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );
  const [inputValue, setInputValue] = useState("");

  const handleChange = (selected: MultiValue<Option>) => {
    setSelectedOptions(selected);
  };

  const onInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleRetry = () => {
    refetchCharacters();
  };

  const options: Option[] = characters.map((character: Character) => ({
    value: character.id,
    label: character.name,
    image: character.image,
    episodes: character.episode.length,
  }));

  return (
    <div>
      {isLoading && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <div className="spinner"></div>
          <p>Loading characters...</p>
        </div>
      )}
      {error && (
        <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
          <p>Error fetching characters: {error}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}
      {!isLoading && !error && (
        <Select<Option, true>
          options={options}
          isMulti
          components={{
            Option: (props) => (
              <OptionComponent {...props} inputValue={inputValue} />
            ),
          }}
          styles={multiSelectStyle}
          getOptionValue={(option) => option.value.toString()}
          onChange={handleChange}
          onInputChange={onInputChange}
          value={selectedOptions}
        />
      )}
    </div>
  );
};

export default MultiSelect;
