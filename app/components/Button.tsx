import React, { ReactNode } from "react";
import { noto } from "../lib/fonts";

interface ButtonProps {
  title: string;
  classname?: string;
  icon?: ReactNode;
}
export const Button : React.FC<ButtonProps> = function ( { title, classname, icon } ) {
  return (
    <button type="button" className={`${noto.className} button primary-button ${classname}`}>
      <span>{title}</span>
      {icon}
    </button>
  );
}