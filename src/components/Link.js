/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

export default function Link(props) {
  return (
    <GatsbyLink
      {...props}
      activeClassName="active"
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        '&.active': {
          color: 'primary',
        },
        '&:hover': {
          color: 'primary',
        },
      }}
    />
  )
}
