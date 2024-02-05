import { components, OptionProps } from "react-select";

export interface Option {
  value: number;
  label: string;
  image: string;
  episodes: number;
}

const OptionComponent = ({
  inputValue,
  ...props
}: OptionProps<Option, true> & { inputValue: string }) => {
  const {
    data: { label, image, episodes },
  } = props;
  const re = new RegExp(`(${inputValue})`, "i");
  const parts = label.split(re);

  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={image}
          alt={label}
          style={{
            marginRight: 10,
            width: 30,
            height: 30,
            borderRadius: "6px",
          }}
        />
        {parts.map((part, index) =>
          part.toLowerCase() === inputValue.toLowerCase() ? (
            <span>
              <b key={index}>{part}</b>
            </span>
          ) : (
            part
          )
        )}{" "}
        - {episodes} Episodes
      </div>
    </components.Option>
  );
};

export default OptionComponent;
