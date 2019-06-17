import { DefaultTheme } from "styled-components"

export const dark: DefaultTheme = {
  text: "#fff",
  primary: "#65CCB8",
  background: "#212121",
  backgroundDark: "#121212",
  backgroundLight: "#323232",
}

export const light: DefaultTheme = {
  text: "#000",
  primary: "#3B945E",
  background: "#fff",
  backgroundLight: "#fff",
  backgroundDark: "#f2f2f2",
}

export default {
  light,
  dark,
}
