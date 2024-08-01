import { TextAreaProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import InputBase from "./InputBase";

import styles from "./Input.module.css";

const TextArea = ({
  placeholder,
  value,
  name,
  disabled,
  onChange,
  ...props
}: TextAreaProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <InputBase {...props}>
      <textarea
        id={props.id}
        className={styles.textarea}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        style={{ color: `var(--${theme})` }}
      />
    </InputBase>
  );
};

export default TextArea;
