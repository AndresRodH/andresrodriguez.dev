/* eslint-disable react/display-name */
import {Components} from '@mdx-js/react'
import {CodeBlock} from './code-block'
import {XStateViz} from './xstate-viz'

const domComponents: Components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

const customComponents = {
  XStateViz,
}

export const components = {
  ...domComponents,
  ...customComponents,
}
