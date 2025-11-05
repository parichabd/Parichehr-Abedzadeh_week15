import { useState } from "react";
import { cities } from "./cities";
import styles from "./AutoFill.module.css";

function AutoFill() {
  const [inputSearch, setInputSearch] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputSearch(value);

    //if the input value is not empty ...
    const match =
      value &&
      cities.find((city) => city.toLowerCase().startsWith(value.toLowerCase()));
    //if a match exists +   and it's not exactly the same as the user's input
    if (match && match.toLowerCase() !== value.toLowerCase()) {
      setSuggestion(match);
    } else {
      setSuggestion("");
    }
  };

  // When the user presses the Enter key and a suggestion exists,
  // replace the input value with the suggestion and clear the suggestion
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestion) {
      setInputSearch(suggestion);
      setSuggestion("");
    }
  };

  return (
    //Container wrapper for the autocomplete input and suggestion display
    <div className={styles.wrapper}>
      //Layer behind the input showing the combined typed and suggested text
      <div className={styles.autocompleteBox}>
        <span className={styles.typed}>{inputSearch}</span> //"San" ... + black
        dark Color //if sug id true and start with user input ...
        {suggestion &&
          suggestion.toLowerCase().startsWith(inputSearch.toLowerCase()) && (
            <span className={styles.suggested}>
              // Return the suggestion text excluding the typed part
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
