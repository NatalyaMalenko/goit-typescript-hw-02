import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface onSubmitProps {
  onSubmit: (term: string) => void;
}

export const SearchBar = ({ onSubmit }: onSubmitProps) => {
  const [term, setTerm] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (term.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(term);
    setTerm("");
  };
  return (
    <header className={css.container}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={term}
          onChange={handleChange}
          className={css.searchInput}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};
