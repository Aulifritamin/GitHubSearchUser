import { useRef } from "react";
import { Button } from "components/Button";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

interface SearchProps {
  hasError: boolean;
  onSumbit: (text: string) => void;
}

export const Search = ({ hasError, onSumbit }: SearchProps) => {
  const searchRef = useRef<HTMLFormElement | null>(null);
  const handleSumbit = (event: React.FormEvent) => {}; // add later

  return (
    <form onSubmit={handleSumbit} ref={searchRef}>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />

        {hasError && (
        <div className={styles.error}>
          No result
        </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
};
