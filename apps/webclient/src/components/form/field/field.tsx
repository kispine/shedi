import { FC } from 'react'
import styles from './field.module.scss'

const FormField: FC = (props) => {
  return (
    <div className={styles.root}>
      {props.children}
    </div>
  )
}

export default FormField