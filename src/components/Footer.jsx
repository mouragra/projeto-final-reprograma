import styles from '../styles/components/footer.module.css'
import { LinkedinLogo, GithubLogo, Envelope } from 'phosphor-react'


export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.redesSociais}>
        <a href="https://www.linkedin.com/in/grazielle-moura-777830179/" target="_black" alt="link encaminhando para o linkedin de Grazielle Moura">
          <LinkedinLogo size={32} color="#ffff" weight="light" alt="logo linkedin" />
        </a>
        <a href="https://github.com/mouragra" target="_black" alt="Link encaminahndo para o git hub de Grazielle Moura">
          <GithubLogo size={32} color="#ffff" weight="light" alt="logo git hub" />
        </a>
        <a href="mailto:mouragrazielle@gmail.com" alt="link encaminhando para escrever um e-mail para Grazielle Moura">
          <Envelope size={32} color="#ffff" weight="light" alt= "logo de um envelope" />
        </a>
      </div>
      <p className={styles.footerText}>
        © Copyrigth Grazielle Moura -- VAMOS REPROGRAMAR O MUNDO 2022 -- 🚀
      </p>
    </footer>
  )
}