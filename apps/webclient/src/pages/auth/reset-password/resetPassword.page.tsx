import Link from 'next/link'
import authStyles from '../auth.module.scss'
import Input from '../../../components/form/input'
import styles from './resetPassword.module.scss'
import Button from '../../../components/form/button'
import Hr from '../../../components/hr'
import AuthLayout from '../../../layouts/auth'

const ResetPasswordPage = () => {
  return (
    <>
      <div className={authStyles.comment}>Не удается войти в систему?</div>
      <div className={authStyles.form}>
        <div className={authStyles.fields}>
          <div className={styles.fieldInfo}>Мы отправим ссылку для восстановления на адрес:</div>
          <Input placeholder="Электронная почта" type="email"/>
        </div>
        <Button className={authStyles.submit}>Отправить ссылку для восстановления</Button>
      </div>

      <Hr/>
      <div className={authStyles.subNavMenu}>
        <Link href={'/auth/login'}><a>Вернуться на страницу авторизации</a></Link>
      </div>
    </>
  )
}

ResetPasswordPage.layout = AuthLayout

export default ResetPasswordPage