import { Header } from '../components/Header'
import sobreImg from '../assets/inclusao2.png'

import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
  return (
    <>
      <Header title="ACESSIBILIDADE AFETA TODOS OS USUÁRIOS" image={sobreImg} alt="imagem de pessoas diversas, mostrando todos sendo cada um de uma raça, cultura e limitações diferentes" />
      <div className={styles.sobreContainer}>
        <div className={styles.bioContainer}>
          <h2 className={styles.bioTitle}>Dev, entenda um pouco melhor como deixar os sites acessíveis</h2>
          <p className={styles.bioText}>Você sabia que apenas fazendo um HTML, um CSS e um Javascript bem feito, seu site já pode se tornar muito acessivel para as pessoas com limitações?
            Pense sempre em acessibilidade como tratar todos da mesma forma e dar a eles oportunidades iguais, independentemente de suas habilidades ou circunstâncias.
          </p>
          <p className={styles.bioText}>Veja um exemplo abaixo de estarmos descrevendo uma imagem com mais detalhes possível, utilizando o alt:</p>
          <p className={styles.bioText}>No caso, a maioria dos leitores de tela lerá o texto alternativo, atributos de título e nomes de arquivo. Além disso, o navegador exibe o texto do título como uma dica de ferramenta quando o mouse é passado.</p>
          <div className={styles.codeExample}>
            <pre>
              <code>
                &lt; img src='' alt='exemplo de descrição' /&gt; <br></br>

                &lt;img src=&quot;acessiblidade.png&quot; title=&quot;Acessibilidade &eacute; para todos&quot; alt=&quot;Imagem de pessoas diversas, diferen&ccedil;a de ra&ccedil;a, cultura, limit&ccedil;&atilde;o ou classe social&quot; /&gt;
              </code>
            </pre>
          </div>

          <p className={styles.bioText}> Agora veja exemplo de um HTML semântico bem estruturado para pessoas com deficiencia visual poderem ter uma ótima navegação:</p>
          <p className={styles.bioText}>Utilize as tags HTML que atende seu significado e proposito evitando uma estrutura não semântica.</p>
          <div className={styles.codeExample}>
            <pre>
              <code>
                <p>
                  &lt;h1&gt;HTML Sem&acirc;ntico&lt;/h1&gt;
                  <br></br>

                  &lt;p&gt; conte&uacute;do deve fazer sentido l&oacute;gico e em sua ordem.&lt;/p&gt;
                  <br></br>

                  &lt;p&gt;Para organizar o css voc&ecirc; pode usar onde quiser, mas precisa manter a ordem correta para come&ccedil;ar.&lt;/p&gt;
                  <br></br>

                  &lt;h2&gt;Fa&ccedil;a um teste&lt;/h2&gt;
                  <br></br>

                  &lt;p&gt; Desative o css de um site e veja se mesmo assim ele continua acess&iacute;vel. &lt;/p&gt;
                </p>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  )
}