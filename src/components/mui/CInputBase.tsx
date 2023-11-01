import { InputBase, InputBaseProps } from "@mui/material";
import styles from "./CInputBase.module.scss";

export default function CInputBase(props: InputBaseProps) {
  return <InputBase className={styles.input_base} {...props} />;
}
