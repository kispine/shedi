import Link from 'next/link'
import AuthLayout from '../../../layouts/auth'
import classes from '../auth.module.scss'
import FormInput from '../../../components/form/input'
import FormInputPassword from '../../../components/form/input-password'
import FormButton from '../../../components/form/button'
import Hr from '../../../components/hr'
import { ReactComponent as GoogleIcon } from '../../../assets/images/google.svg'
import { ReactComponent as YandexIcon } from '../../../assets/images/yandex.svg'

const LoginPage = () => {
  return (
    <>
      <div className={classes.comment}>Войдите, чтобы продолжить</div>
      <form className={classes.form}>
        <div className={classes.fields}>
          <FormInput placeholder="Электронная почта" type="email" tabIndex="1"/>
          <FormInputPassword placeholder="Пароль" tabIndex="2"/>
        </div>
        <FormButton className={classes.submit}>Войти</FormButton>
      </form>
      <div className={classes.line}>или</div>
      <FormButton className={classes.externalLogin}>
        <GoogleIcon/>
        <span>Войти с помощью Google</span>
      </FormButton>
      <FormButton className={classes.externalLogin}>
        <YandexIcon/>
        <span>Войти с помощью Яндекс</span>
      </FormButton>
      <Hr/>
      <div className={classes.subNavMenu}>
        <Link href={'/auth/register'}>
          <a>Регистрация</a>
        </Link>

        <span className={classes.separator}>/</span>
        <Link href={'/auth/reset-password'}>
          <a>Забыли пароль?</a>
        </Link>
      </div>
    </>
  )
}

LoginPage.layout = AuthLayout

export default LoginPage