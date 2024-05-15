import React from 'react';
import styles from './InputField.module.scss';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  touched?: boolean;
}

const InputField: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  errorMessage,
  touched
}) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
      />
      {touched && errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default InputField;
