import { ChangeEventHandler, FC, PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./form-field.module.css";

interface IFormFieldProps {
  className?: string;
  label: string;
  name?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  isTextArea?: boolean;
}

export const FormField: FC<PropsWithChildren<IFormFieldProps>> = ({
  className,
  label,
  name,
  required = false,
  onChange,
  value,
  isTextArea = false,
  children,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className={classNames({ [styles.required]: required })}
      >
        {label}:
      </label>
      {children ??
        (isTextArea ? (
          <textarea
            name={name}
            id={name}
            required={required}
            onChange={onChange}
            value={value}
          />
        ) : (
          <input
            name={name}
            type="text"
            id={name}
            required={required}
            onChange={onChange}
            value={value}
          />
        ))}
    </div>
  );
};
