interface Size {
  sm: string
  md: string
}

const size: Size = {
  sm: '460px',
  md: '768px'
}

export const max = {
  mobile: `(max-width: ${size.sm})`,
  tablet: `(max-width: ${size.md})`
}
