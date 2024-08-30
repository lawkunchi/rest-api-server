import React, { ChangeEvent } from "react";

type InputFieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string|boolean; 
};

const InputField: React.FC<InputFieldProps> = ({ name, label, value, onChange, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}:</label>
      <input
        name={name}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        type="text"
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InputField;