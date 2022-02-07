import AuthLayout from '../../../layouts/auth'
import authStyles from '../auth.module.scss'
import styles from './register.module.scss'
import FormInput from '../../../components/form/input'
import FormInputPassword from '../../../components/form/input-password'
import Button from '../../../components/form/button'

import Hr from '../../../components/hr'
import Link from 'next/link'

const RegisterPage = () => {
  return (
    <>
      <div className={authStyles.comment}>Регистрация аккаунта</div>
      <div className={authStyles.form}>
        <div className={authStyles.fields}>
          <FormInput placeholder="Электронная почта" type="email" tabIndex="1"/>
          <FormInputPassword placeholder="Пароль" tabIndex="2"/>
        </div>
        <div className={styles.policyInfo}>Регистрируясь, я принимаю Политику конфиденциальности.</div>
        <Button className={authStyles.submit}>Зарегистрироваться</Button>
      </div>

      <Hr/>
      <div className={authStyles.subNavMenu}>
        Уже есть аккаунт? <Link href={'/auth/login'}><a>Войти</a></Link>
      </div>
    </>
  )
}

RegisterPage.layout = AuthLayout

export default RegisterPage