import { ReactNode } from "react";
import "./BasicWidget.scss";

interface Props {
  children: ReactNode;
  colSpan?: "2" | "3" | "4" | "6" | "8" | "12";
  rowSpan?: "2";
}

export default function BasicWidget(props: Props) {
  return (
    <div
      className={`card col-span-${props.colSpan || "2"} row-span-${
        props.rowSpan || "1"
      }`}
    >
      {props.children}
    </div>
  );
}
