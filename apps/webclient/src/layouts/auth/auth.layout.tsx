import styles from './auth.module.scss'
import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg'

export default function AuthLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <a href="/" className={styles.logoTop}>
          <LogoIcon/>
        </a>
        {children}
      </div>
    </div>
  )
}