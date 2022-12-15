import styles from '../styles/components/header.module.css'

export function Header(props) {
  return(
    <div className={styles.headerContainer}>
     <h1 className={styles.headerTitle}>{props.title}</h1>
     <img className={styles.headerImage} src={props.image} alt={props.alt}/>
    </div>
  )
}
