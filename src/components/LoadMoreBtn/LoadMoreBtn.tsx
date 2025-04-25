import { FC } from "react";
import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../../types";

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
}
