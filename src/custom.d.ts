declare module "*.svg" {
  const content: React.ComponentType<
    Partial<{
      style: React.CSSProperties
      onClick: Function
    }>
  >
  export default content
}

declare module "*.png" {
  const content: any
  export default content
}
