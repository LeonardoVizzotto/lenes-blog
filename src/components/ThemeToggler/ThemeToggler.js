import React, { useState, useEffect } from "react"
import styles from "./themeToggler.module.scss"

const ThemeToggler = () => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    setValue(localStorage.getItem("theme") === "dark")
  }, [])

  const onClick = ({ target }) => {
    if (target.checked) {
      document.body.classList.replace("light", "dark")
    } else {
      document.body.classList.replace("dark", "light")
    }
    localStorage.setItem("theme", target.checked ? "dark" : "light")
    setValue(target.checked);
  }

  return (
    <div className={styles.toggler}>
      <input
        checked={value}
        onClick={onClick}
        type="checkbox"
        className={styles.checkbox}
      />
      <div className={styles.knobs}></div>
      <div className={styles.layer}></div>
    </div>
  )
}

export default ThemeToggler
