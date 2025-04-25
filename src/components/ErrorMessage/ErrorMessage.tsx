import toast, { Toaster } from "react-hot-toast";
import css from "./ErrorMessage.module.css";

export interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className={css.errorMessageStyle}>
      <Toaster />
      <p>{error}</p>
    </div>
  );
}
