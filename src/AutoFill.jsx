import { useState } from "react";
import { cities } from "./cities";
import styles from "./AutoFill.module.css";
function AutoFill() {
  const [inputSearch, setInputSearch] = useState("");
  const searchHandler = (e) => {
    setInputSearch(e.target.value);
  };
  const suggestion =
    inputSearch &&
    cities.find((city) =>
      city.toLowerCase().startsWith(inputSearch.toLowerCase())
    );
    if(suggestion) console.log(suggestion);

  return (
    <div>
      <label htmlFor="" className={styles.label}>
        City :
        <input
          type="text"
          className={styles.input}
          placeholder="Plaese enter your city name ..."
          onChange={searchHandler}
          value={inputSearch}
        />
      </label>
      {suggestion && <p className={styles.suggestion}>{suggestion}</p>}
    </div>
  );
}

export default AutoFill;
