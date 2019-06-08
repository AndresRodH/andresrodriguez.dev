import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    text: string
    background: string
    backgroundDark: string
    primary: string
  }
}
