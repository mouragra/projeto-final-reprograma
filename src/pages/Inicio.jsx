import { Header } from '../components/Header'
import Banner from '../assets/inclusao.png'

import styles from '../styles/pages/inicio.module.css'

export function Inicio() {
  return (
    <>
      <Header title="SABIA QUE MENOS DE 1% DOS SITES SÃO ACESSÍVEIS?" image={Banner} alt="imagem banner no site onde mostra pessoas com limitações, motoras, visão, audio,idosos e libras" />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>Estatísticas</h2>

          <div className="wrapper">
            <div className="box-1">
              <p className={styles.cardText}> De acordo com as informações do IBGE de 2018, cerca de 13 milhões de pessoas no Brasil tem alguma limitação,
                considerando pessoas que possuem grande ou total dificuldade em enxergar, ouvir, caminhar, subir degraus ou deficiência mental/intelectual.</p> <br></br>
              <p className={styles.cardText}>Isso representa aproximadamente 6,7% da população. </p> <br></br>
              <p className={styles.cardText}>Quando olhamos para pessoas que possuem algum grau de dificuldade em pelo menos um dos aspectos citados, chegamos ao número de cerca de 46 milhões de brasileiros, ou seja, aproximadamente 24% da população. </p> <br></br>
              <p className={styles.cardText}>Menos de 1% dos sites são acessíveis para pessoas com alguma deficiência.</p> <br></br>
              <p className={styles.cardText}> Acessibilidade afetas TODOS os usuários, não afeta apenas aqueles que possuem alguma deficiência estereotipada.</p>
            </div>

            <div className="box-2">
              <p className={styles.cardText}> Acessibilidade na Web para pessoas com Epilepsia :</p> <br></br>
              <p className={styles.cardText}>As pessoas que têm epilepsia não podem ser expostas a luzes e animações que piscam intensamente, no máximo três vezes por segundo.</p> <br></br>
              <p className={styles.cardText}>Eles, portanto, têm um medo constante de usar a internet, já que hoje quase todos os sites têm um recurso para capturar a nossa atenção. </p> <br></br>
              <p className={styles.cardText}>Embora esses recursos sejam úteis para alcançar seu objetivo, para pessoas com epilepsia, eles são perigosos e podem provocar uma convulsão. </p> <br></br>
              <p className={styles.cardText}>Já existe sistema onde permite que pessoas com epilepsia parem imediatamente todos os tipos de animações (incluindo Vídeos, GIFs, CSS ou JS, e mais) com um único clique e naveguem na Web com facilidade, sem medo.</p>
            </div>

            <div className="box-3">
              <p className={styles.cardText}>Deficiência Visual :</p> <br></br>
              <p className={styles.cardText}>Utiliza tecnologias de inteligência artificial para tornar sites compatíveis com leitores de tela. Ele escaneia, analisa e entende a estrutura do site, papéis dos elementos, formulários.</p> <br></br>
              <p className={styles.cardText}>Deficiência Motora :</p> <br></br>
              <p className={styles.cardText}>Otimização para navegação de teclado usada por pessoas com doença de Parkinson e outras deficiências motoras.</p> <br></br>
              <p className={styles.cardText}>As pessoas que têm Parkinson, outras deficiências motoras e amputados são incapazes de usar um mouse de forma eficaz.</p> <br></br>
              <p className={styles.cardText}>Eles usam computadores apenas com o teclado, às vezes usando apenas um determinado número de teclas. O sistema garante automaticamente que o site seja totalmente navegável usando apenas a tecla TAB, incluindo menus suspensos, pop-ups e formulários. Além disso, todos os elementos navegáveis ​​têm focos visíveis e são clicáveis ​​usando ENTER.</p>
            </div>

            <div className="box-4">
              <p className={styles.cardText}>Idosos e pessoas com Deficiência Cognitiva :</p> <br></br>
              <p className={styles.cardText}>Pessoas idosas, pessoas que sofrem de deficiências cognitivas e pessoas após derrames cerebrais podem achar difícil compreender linguagem, gíria ou expressões e expressões específicas. Isso pode dificultar a utilização efetiva da Internet. </p> <br></br>
              <p className={styles.cardText}>Para melhorar sua experiência, já existe um dicionário integrado que fornece rapidamente uma descrição completa de abreviações e expressões, sem transferir para um site externo ou reformular o próprio conteúdo.</p> <br></br>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}