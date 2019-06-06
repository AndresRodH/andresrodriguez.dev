import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.8,
  scaleRatio: 2,
  headerFontFamily: ["Barlow", "sans-serif"],
  headerWeight: 700,
  bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  bodyWeight: 400,
})

export const { scale, rhythm, options } = typography
export default typography
