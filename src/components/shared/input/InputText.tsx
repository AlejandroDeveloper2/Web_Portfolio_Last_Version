import { InputTextProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import InputBase from "./InputBase";

import styles from "./Input.module.css";

const InputText = ({
  type,
  placeholder,
  value,
  name,
  disabled,
  onChange,
  ...props
}: InputTextProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <InputBase {...props}>
      <input
        id={props.id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={styles.input}
        style={{ color: `var(--${theme})` }}
      />
    </InputBase>
  );
};

export default InputText;
