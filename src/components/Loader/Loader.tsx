import { RingLoader } from "react-spinners";
import { FC } from "react";
import css from "./Loader.module.css";
import { SpinnerProps } from "../../types";

const Spinner: FC<SpinnerProps> = ({
  loading,
  size = 60,
  color = "#9b0780",
}) => {
  return (
    <div className={css.spinnerContainer}>
      <RingLoader size={size} color={color} loading={loading} />
    </div>
  );
};

export default Spinner;
