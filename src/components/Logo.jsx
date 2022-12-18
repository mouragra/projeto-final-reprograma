import styles from '../styles/components/logo.module.css'

export function Logo(props) {
  return(
    <div className={styles.logoContainer}>
     <img className={styles.logoImage} src={props.image} alt={props.alt}/>
    </div>
  )
}
