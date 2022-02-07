import { FC } from 'react'
import classes from './input.module.scss'
import FormField from '../field'

interface FormInputProps {
  classname?: string
  placeholder?: string
  type?: string
  tabIndex?: string
}

const FormInput: FC<FormInputProps> = (props) => {
  return (
    <FormField>
      <input className={classes.root}
             placeholder={props.placeholder}
             type={props.type || 'text'}
             tabIndex={+props.tabIndex}
      />
      {props.children}
    </FormField>
  )
}

export default FormInput