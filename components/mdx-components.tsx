/* eslint-disable react/display-name */
import {Components} from '@mdx-js/react'
import {CodeBlock} from './code-block'

export const components: Components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}
