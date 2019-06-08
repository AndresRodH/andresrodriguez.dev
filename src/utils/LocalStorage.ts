class LocalStorage {
  /**
   * Get the theme preference from local storage
   */
  getTheme(): "light" | "dark" {
    // attempt to retrieve theme prefference from local storage
    // if theme has not been defined, set it as 'light'
    if (localStorage.getItem("theme"))
      return localStorage.getItem("theme") as "light" | "dark"
    this.setTheme("light")

    return "light"
  }
  /**
   * Sets the theme in local storage
   */
  setTheme(theme: "light" | "dark") {
    localStorage.setItem("theme", theme)
  }
  /**
   * Toggles theme selection
   */
  toggleTheme() {
    let theme = this.getTheme()
    theme = theme === "light" ? "dark" : "light"
    this.setTheme(theme)
    return theme
  }
}

export default new LocalStorage()
