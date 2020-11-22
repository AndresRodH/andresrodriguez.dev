import React from 'react'
import Highlight, {defaultProps, Language} from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import {styled, theme} from 'twin.macro'

const Pre = styled.pre`
  max-width: 50ch;
  @media (min-width: ${theme`screens.sm`}) {
    max-width: 100%;
  }
`

export function CodeBlock({
  children,
  className,
}: {
  children: string
  className: string
}) {
  const language = className.replace(/language-/, '') as Language

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={nightOwl}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}
