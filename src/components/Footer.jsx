import styles from '../styles/components/footer.module.css'
import { LinkedinLogo, GithubLogo, Envelope } from 'phosphor-react'


export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.redesSociais}>
        <a href="https://www.linkedin.com/in/grazielle-moura-777830179/" target="_black" >
          <LinkedinLogo size={32} color="#ffff" weight="light" />
        </a>
        <a href="https://github.com/mouragra" target="_black">
          <GithubLogo size={32} color="#ffff" weight="light" />
        </a>
        <a href="mailto:mouragrazielle@gmail.com">
          <Envelope size={32} color="#ffff" weight="light" />
        </a>
      </div>
      <p className={styles.footerText}>
        © Copyrigth Grazielle Moura -- VAMOS REPROGRAMAR O MUNDO 2022 -- 🚀
      </p>
    </footer>
  )
}