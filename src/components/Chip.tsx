import styled, { DefaultTheme, css } from "styled-components"

function getChipStyles(label: string, theme: DefaultTheme) {
  const { primary, secondary } = theme.chip[label] || theme.chip.default
  return css`
    color: ${primary};
    background-color: ${secondary};
    border: 1px solid ${primary};
  `
}

type Props = { label: string; onClick: () => void; children: React.ReactNode }

const Chip = styled.div.attrs((props: Props) => ({
  children: props.label,
}))<Props>`
  display: inline-flex;
  font-size: 12px;
  font-weight: bold;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-property: opacity, color, background-color, border;
  transition-duration: 0.3s;
  will-change: opacity, color, background-color, border;
  &:hover {
    opacity: 0.9;
  }
  ${props => getChipStyles(props.label, props.theme)};
`

export default Chip
