import React, { FC } from 'react'
import cn from 'classnames'
import styles from './button.module.scss'

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset',
  className?: string
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={cn(styles.root, props.className)}
            type={props.type || 'button'}
            onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button