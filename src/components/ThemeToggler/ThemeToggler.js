import React, { useState } from "react"
import styles from "./themeToggler.module.scss"

const ThemeToggler = () => {
  const [value] = useState(localStorage.getItem("theme") === "dark");

  const onChange = ({ target }) => {
    if (target.checked) {
      document.body.classList.replace("light", "dark")
    } else {
      document.body.classList.replace("dark", "light")
    }
    localStorage.setItem("theme", target.checked ? "dark" : "light")
  }

  return (
    <div className={styles.toggler}>
      <input
        defaultChecked={value}
        onChange={onChange}
        type="checkbox"
        className={styles.checkbox}
      />
      <div className={styles.knobs}></div>
      <div className={styles.layer}></div>
    </div>
  )
}

export default ThemeToggler
