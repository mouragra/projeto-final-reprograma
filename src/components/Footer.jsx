import styles from '../styles/components/footer.module.css'
import { LinkedinLogo, InstagramLogo, GithubLogo, Envelope } from 'phosphor-react'


export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <a href="https://www.linkedin.com/in/grazielle-moura-777830179/">
          <LinkedinLogo size={32} color="#ffff" weight="light" />
        </a>
        <a href="https://github.com/mouragra">
          <GithubLogo size={32} color="#ffff" weight="light" />
        </a>
        <a href="malito:mouragrazielle.com.br">
        <Envelope size={32} color="#ffff" weight="light" />
        </a>
      </div>
      <p className={styles.footerText}>
        © Copyrigth Grazielle Moura - reprograma 2022
      </p>
    </footer>
  )
}