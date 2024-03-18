import React, { ReactNode } from "react";
import { noto } from "../lib/fonts";
import Link from "next/link";


interface ButtonProps {
  title: string;
  classname?: string;
  icon?: ReactNode;
  type: "button" | "link";
  handleFunction?: () => void;
}
export const Button: React.FC<ButtonProps> = function ({ title, classname, icon, type, handleFunction }) {
  return (
    type === "link" ? (
      <Link type="button" href={""} className={`${noto.className} button primary-button ${classname}`}>
        <span>{title}</span>
        {icon}
      </Link>
    ) : <button onClick={() => handleFunction} type="button" className={`${noto.className} button primary-button ${classname}`}>
      <span>{title}</span>
      {icon}
    </button>
  );
}