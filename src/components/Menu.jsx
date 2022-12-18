import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'
import { House, Rocket, Code } from 'phosphor-react'

export function Menu() {
  return (

    <ul className={styles.menuContainer}>
      <li className={styles.menuItem}>
        <House size={24} color="#ffff" weigth="regular" />
        <Link className={styles.menuLink} to="/"> Home</Link>
      </li>
      <li className={styles.menuItem}>
      <Code size={24} color="#ffff" weight="regular" />        
      <Link className={styles.menuLink} to="/sobre"> Acessibilidade</Link>
      </li>
      <li className={styles.menuItem}>
        <Rocket size={24} color="#ffff" weigth="regular" />
        <Link className={styles.menuLink} to="/mais"> Saiba Mais</Link>
      </li>

    </ul>
  )
}