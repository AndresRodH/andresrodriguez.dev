import "styled-components"

declare module "styled-components" {
  type ColorScheme = {
    primary: string
    secondary: string
  }

  type ChipTheme = { default: ColorScheme } & { [key: string]: ColorScheme }
  export interface DefaultTheme {
    text: string
    background: string
    backgroundDark: string
    backgroundLight: string
    primary: string
    chip: { [key: string]: ColorScheme }
  }
}
