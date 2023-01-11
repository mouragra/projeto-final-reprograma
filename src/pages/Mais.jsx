import { useState, useEffect } from 'react'
import Axios from 'axios'
import styles from '../styles/pages/mais.module.css'
import imgSabia from '../assets/acessibilidade001.png'
import {Header} from '../components/Header'

export function Mais() {
    const [maisFromApi, setMaisFromApi] = useState([])
    const baseURL = 'https://projeto-final-3e911-default-rtdb.firebaseio.com/ferramentas.json'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setMaisFromApi(response.data)
            console.log(response.data)
        }
        getData()

    }, [])

    return (
        <>
            <Header title="SAIBA MAIS SOBRE AS FERRAMENTAS DISPONÍVEIS" image={imgSabia} alt="imagem de banner no site onde mostra várias palmas de mãos coloridas, e cada mão indicando uma letra para formar a palavra inclusion" />
           
            <div className={styles.cardsContainer}>

                {maisFromApi.map(project => {
                    return (
                        <div className={styles.card} key={project.id}>
                            <h2>{project.titulo}</h2>
                            <img className={styles.cardImage} src={project.imagem} alt={project.alt} />
                            <p className={styles.cardText}>{project.descricao}</p>
                            <p className={styles.cardText}>Plataforma: {project.plataforma}</p>
                            <a className={styles.cardLink} href={project.link} target="_blank" rel="noreferrer">
                                Ver ferramenta
                            </a>
                        </div>
                    )
                })}

            </div>
        </>
    )
}





