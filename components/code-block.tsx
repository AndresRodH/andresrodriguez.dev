import React from 'react'
import Highlight, {defaultProps, Language} from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import 'twin.macro'

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
        <pre
          tw="box-content rounded-none! sm:rounded-lg! p-8! pb-0! -mx-8!"
          className={className}
          style={{
            ...style,
            maxWidth: '100vw',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
