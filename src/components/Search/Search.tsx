
import { Button } from "components/Button";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

interface SearchProps {
  hasError: boolean;
  onSumbit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement,
}

export const Search = ({ hasError, onSumbit }: SearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSumbit(text);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
