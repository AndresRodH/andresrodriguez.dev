import React from 'react'
import Highlight, {defaultProps, Language} from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import clsx from 'clsx'
import styles from './code-block.module.css'

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
        <pre className={clsx(className, styles.innerWrapper)} style={style}>
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
