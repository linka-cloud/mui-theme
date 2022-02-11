import * as React from 'react'
import styles from './styles.module.css'

export * from './configureTheme'
export * from './ColorModeProvider'
export * from './settings.slice'
export * from './theme'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
