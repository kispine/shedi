import { FC, useState } from 'react'
import Input from '../input'
import Button from '../../button'
import styles from './input-password.module.scss'
import { ReactComponent as ShownPassIcon } from '../../../assets/images/eye_visible.svg'
import { ReactComponent as HidedPassIcon } from '../../../assets/images/eye_slash_visible.svg'

interface FormInputPasswordProps {
  placeholder?: string
  tabIndex?: string
}

const FormInputPassword: FC<FormInputPasswordProps> = (props) => {
  const [isShowPassword, setShowPassword] = useState<boolean>(false)

  const HandleButtonClick = (e) => {
    e.preventDefault()
    setShowPassword(!isShowPassword)
  }

  return (
    <Input type={isShowPassword ? 'text' : 'password'}
           placeholder={props.placeholder}
           tabIndex={props.tabIndex}
    >
      <Button className={styles.button}
              type="button"
              onClick={HandleButtonClick}
      >
        {isShowPassword ? <HidedPassIcon/> : <ShownPassIcon/>}
      </Button>
    </Input>
  )
}

export default FormInputPassword