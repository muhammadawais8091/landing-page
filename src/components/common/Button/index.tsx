import { FC } from "react";
import { ButtonType } from "../../../interfaceTypes";

export const Button: FC<ButtonType> = ({ buttonText, className, onClick }) => (
  <button
    className={`btn-primary ${className}`}
    onClick={onClick}
  >
    {buttonText}
  </button>
);

