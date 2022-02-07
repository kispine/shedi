import cn from 'classnames'
import classes from './button.module.scss'
import { FC, ReactChildren } from 'react'

interface FormButtonProps {
  children: ReactChildren,
  type?: 'button' | 'submit' | 'reset',
  className?: string
}

const FormButton: FC<FormButtonProps> = (props) => {
  return (
    <button
      className={cn(classes.root, props.className)}
      type={props.type || 'submit'}
    >
      {props.children}
    </button>
  )
}

export default FormButton