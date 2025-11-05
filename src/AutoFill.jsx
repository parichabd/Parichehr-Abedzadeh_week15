import { useState } from "react";
import { cities } from "./cities";
import styles from "./AutoFill.module.css";

function AutoFill() {
  const [inputSearch, setInputSearch] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputSearch(value);

    const match =
      value &&
      cities.find((city) => city.toLowerCase().startsWith(value.toLowerCase()));

    if (match && match.toLowerCase() !== value.toLowerCase()) {
      setSuggestion(match);
    } else {
      setSuggestion("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestion) {
      setInputSearch(suggestion);
      setSuggestion("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.autocompleteBox}>
        <span className={styles.typed}>{inputSearch}</span>
        {suggestion &&
          suggestion.toLowerCase().startsWith(inputSearch.toLowerCase()) && (
            <span className={styles.suggested}>
              {suggestion.slice(inputSearch.length)}
            </span>
          )}
      </div>

      <input
        type="text"
        className={styles.input}
        placeholder="Please enter your city name..."
        value={inputSearch}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default AutoFill;
