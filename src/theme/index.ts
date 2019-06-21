import { DefaultTheme, ColorScheme } from "styled-components"

const chip: { [key: string]: ColorScheme } = {
  react: {
    secondary: "#20232A",
    primary: "#61DAFB",
  },
  javascript: {
    secondary: "#F7E018",
    primary: "#000000",
  },
  typescript: {
    secondary: "#007acc",
    primary: "#ffffff",
  },
  graphql: {
    secondary: "#172027",
    primary: "#E00197",
  },
  default: {
    primary: "#000000",
    secondary: "#BDBDBD",
  },
}

const theme = {
  chip,
}

const dark: DefaultTheme = Object.assign(theme, {
  text: "#ffffff",
  primary: "#65CCB8",
  background: "#212121",
  backgroundDark: "#121212",
  backgroundLight: "#323232",
})

const light: DefaultTheme = Object.assign(theme, {
  text: "#000",
  primary: "#3B945E",
  background: "#ffffff",
  backgroundLight: "#ffffff",
  backgroundDark: "#f2f2f2",
})

export default {
  light,
  dark,
}
