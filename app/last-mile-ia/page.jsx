// app/last-mile-ia/page.jsx

import Link from 'next/link';
import styles from './last-mile.module.css'; // Importa o CSS Module

// 1. Configuração de Metadata (SEO)
// Extraído do <title> e meta tags do HTML
export const metadata = {
    title: 'BRFrete - Last Mile Otimizado por Machine Learning: Entregas Inteligentes',
    description: 'A inteligência artificial que calcula a melhor rota, prevê atrasos e corta custos em tempo real.',
};

export default function LastMileIA() {

    return (
        <>
            <header className={styles['banner-container']}>
                <div className={styles['login-box']}>
                    {/* Conversão de <a> para Link do Next.js */}
                    <Link href="/login">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </Link>
                    <Link href="/cadastro">
                        <i className="fas fa-user-plus"></i> Cadastro
                    </Link>
                </div>

                <h1>
                    <i className="fas fa-brain"></i> Last Mile Otimizado por Machine Learning
                </h1>
                <p>A inteligência artificial que **calcula a melhor rota**, **prevê atrasos** e **corta custos** em tempo real.</p>

                {/* Formulário CTA - Conversão de class="frete-form" para className={styles['frete-form']} */}
                <form className={styles['frete-form']} action="/ml-last-mile-demo" method="POST">
                    <input type="text" name="volume_diario" placeholder="Volume Diário de Entregas" required />
                    <input type="text" name="cidade_atendimento" placeholder="Cidade/Região de Atendimento" required />
                    <button type="submit">
                        <i className="fas fa-robot"></i> Otimize Suas Entregas Agora!
                    </button>
                </form>
            </header>

            {/* NOVIDADE: Adicionando a classe 'nav-bar' à tag <nav> */}
            <nav className={styles['nav-bar']}>
                {/* Links de navegação */}
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/inovacao">Inovação & Logística Global</Link>
                <Link href="/algoritmos">Tecnologia de Roteirização</Link>
                <Link href="/previsao">Previsão de Demanda</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal - Estilizado via TAG main no CSS Module */}
            <main>
                <h2>Do Pedido à Porta do Cliente: A Entrega Mais Curta e Inteligente</h2>

                {/* Seção 1: Por Que a BRFrete Usa Machine Learning? */}
                <section className={styles.section}>
                    <h3>Por Que a BRFrete Usa Machine Learning?</h3>
                    <div className={styles.cards}>

                        {/* Card 1 */}
                        <div className={styles.card}>
                            <i className="fas fa-route"></i>
                            <h4>Roteirização Dinâmica e Predição</h4>
                            <p>Nosso algoritmo calcula a rota ideal, considerando trânsito em tempo real, janelas de entrega e variáveis históricas para evitar gargalos.</p>
                            {/* Conversão de <button onclick> para Link e className={styles['card-btn']} */}
                            <Link href="/ml/roteirizacao" className={styles['card-btn']}>Detalhes Técnicos</Link>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.card}>
                            <i className="fas fa-percent"></i>
                            <h4>Redução Drástica de Custos</h4>
                            <p>Otimizar a distância e o consumo de combustível em cada veículo reduz o custo operacional por entrega em até 20%.</p>
                            <Link href="/ml/roi" className={styles['card-btn']}>Estudo de Caso</Link>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.card}>
                            <i className="fas fa-bullseye"></i>
                            <h4>Melhoria na Experiência (CX)</h4>
                            <p>Entregas pontuais e previsão precisa do tempo de chegada. O cliente recebe informações em tempo real e de alta confiabilidade.</p>
                            <Link href="/ml/cx" className={styles['card-btn']}>Conheça o Portal do Cliente</Link>
                        </div>
                    </div>
                </section>

                {/* Seção 2: O Fluxo de Roteirização Inteligente */}
                <section
                    className={styles.section}
                    // Mantendo o estilo em linha conforme o HTML original
                    style={{ backgroundColor: '#f7faff', padding: '40px 20px', borderRadius: '10px' }}
                >
                    {/* Título com estilos em linha para cores específicas */}
                    <h3 style={{ borderBottomColor: 'var(--cor-ml-acento)', color: 'var(--cor-ml-principal)' }}>
                        O Fluxo de Roteirização Inteligente
                    </h3>

                    {/* Conversão de class="flex-cards" para className={styles['flex-cards']} */}
                    <div className={styles['flex-cards']}>
                        {/* Card 1 - Botão de destaque (acento) */}
                        <div className={styles.card}>
                            <i className="fas fa-database"></i>
                            <h4>1. Ingestão de Dados Massiva</h4>
                            <p>Coletamos e processamos dados de tráfego, clima, histórico de endereços e capacidade da frota em escala massiva para alimentar o modelo.</p>
                            {/* Combinação de classes: 'card-btn' e 'card-btn-acento' */}
                            <Link href="/ml/dados" className={`${styles['card-btn']} ${styles['card-btn-acento']}`}>Segurança de Dados</Link>
                        </div>
                        {/* Card 2 - Botão de destaque (acento) */}
                        <div className={styles.card}>
                            <i className="fas fa-map-marked-alt"></i>
                            <h4>2. Cálculo Preditivo e Ajustes</h4>
                            <p>O modelo de Machine Learning gera a sequência de paradas em tempo real. Se houver um imprevisto (acidente, chuva), a rota é recalculada em segundos.</p>
                            <Link href="/ml/ajustes" className={`${styles['card-btn']} ${styles['card-btn-acento']}`}>Tecnologia de Recálculo</Link>
                        </div>
                    </div>
                </section>

                {/* Seção 3: Nossos Algoritmos, Seu Diferencial Competitivo */}
                <section className={styles.section}>
                    <h3>Nossos Algoritmos, Seu Diferencial Competitivo</h3>
                    <div className={styles.cards}>

                        {/* Card 4 */}
                        <div className={styles.card}>
                            <i className="fas fa-shipping-fast"></i>
                            <h4>Otimização Multi-Veículo</h4>
                            <p>Roteirização que considera diferentes modais (vans, motos, e-bikes) simultaneamente, atribuindo a tarefa ao veículo mais eficiente para a região.</p>
                            <Link href="/ml/frota" className={styles['card-btn']}>Gestão de Frota</Link>
                        </div>

                        {/* Card 5 */}
                        <div className={styles.card}>
                            <i className="fas fa-truck-loading"></i>
                            <h4>Cálculo de Capacidade Preditiva</h4>
                            <p>A IA indica a melhor forma de carregar o veículo e a sequência de entrega ideal para minimizar o tempo de parada e ocioso do motorista.</p>
                            <Link href="/ml/carregamento" className={styles['card-btn']}>Guia de Carga</Link>
                        </div>

                        {/* Card 6 */}
                        <div className={styles.card}>
                            <i className="fas fa-lock"></i>
                            <h4>Segurança e Rastreamento Inteligente</h4>
                            <p>O sistema monitora desvios de rota não autorizados e comportamentos de risco, acionando alertas imediatos para nossa central de segurança.</p>
                            <Link href="/ml/seguranca" className={styles['card-btn']}>Protocolos Anti-Fraude</Link>
                        </div>
                    </div>
                </section>

                {/* CTA de Rodapé */}
                <div className={styles['cta-buttons']}>
                    {/* Conversão de <a> para Link e className={styles['cta-destaque']} */}
                    <Link href="/ml-last-mile-demo" className={styles['cta-destaque']}>
                        <i className="fas fa-rocket"></i> Eleve o Nível do Seu Last Mile com IA!
                    </Link>
                </div>
            </main>

            {/* Rodapé - Estilizado via TAG footer no CSS Module */}
            <footer className={styles['footer-area']}>
                {/* O Rodapé foi copiado e ajustado para JSX/Link. */}
                <div>
                    <h4>BRFrete</h4>
                    <ul>
                        <li><Link href="/sobre">Sobre Nós</Link></li>
                        <li><Link href="/carreiras">Carreiras</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/parceiros">Nossos Parceiros</Link></li>
                        <li><Link href="/sustentabilidade">Sustentabilidade</Link></li>
                        <li><Link href="/investidores">Área do Investidor</Link></li>
                        <li><Link href="/imprensa">Sala de Imprensa</Link></li>
                        <li><Link href="/novidades">Novidades</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Suporte</h4>
                    <ul>
                        <li><Link href="/faq">Perguntas Frequentes</Link></li>
                        <li><Link href="/contato">Fale Conosco</Link></li>
                        <li><Link href="/ajuda">Central de Ajuda</Link></li>
                        <li><Link href="/rastreamento">Rastreamento de Frete</Link></li>
                        <li><Link href="/seguranca">Segurança e Proteção</Link></li>
                        <li><Link href="/cancelamento">Política de Cancelamento</Link></li>
                        <li><Link href="/pagamentos">Formas de Pagamento</Link></li>
                        <li><Link href="/avaliacoes">Avaliações de Usuários</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Legal</h4>
                    <ul>
                        <li><Link href="/privacidade">Política de Privacidade</Link></li>
                        <li><Link href="/termos">Termos de Uso</Link></li>
                        <li><Link href="/cookies">Política de Cookies</Link></li>
                        <li><Link href="/licencas">Licenças e Certificações</Link></li>
                        <li><Link href="/compliance">Compliance e Ética</Link></li>
                        <li><Link href="/lgpd">LGPD e Proteção de Dados</Link></li>
                        <li><Link href="/responsabilidade">Responsabilidade Social</Link></li>
                        <li><Link href="/transparencia">Transparência</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Redes Sociais</h4>
                    <ul>
                        <li><Link href="#"><i className="fab fa-facebook"></i> Facebook</Link></li>
                        <li><Link href="#"><i className="fab fa-instagram"></i> Instagram</Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin"></i> LinkedIn</Link></li>
                        <li><Link href="#"><i className="fab fa-youtube"></i> YouTube</Link></li>
                        <li><Link href="#"><i className="fab fa-twitter"></i> Twitter</Link></li>
                        <li><Link href="#">Pinterest</Link></li>
                        <li><Link href="#">TikTok</Link></li>
                        <li><Link href="#">WhatsApp</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Inovação & Logística Global</h4>
                    <ul>
                        <li><Link href="/blockchain">Blockchain para Rastreio Seguro</Link></li>
                        <li><Link href="/drones">Entrega com Drones em Zonas Rurais</Link></li>
                        <li><Link href="/micromobilidade">Micromobilidade Urbana (Bikes/Patinetes)</Link></li>
                        <li><Link href="/logistica-40">Consultoria Logística 4.0</Link></li>
                        <li><Link href="/armazenamento-virtual">Armazenagem Virtual e Cross-Docking</Link></li>
                        <li><Link href="/last-mile-ia">Last Mile Otimizado por Machine Learning</Link></li>
                        <li><Link href="/frete-internacional">Frete Internacional Facilitado</Link></li>
                        <li><Link href="/energia-limpa">Frota e-Logistics (Energia Limpa)</Link></li>
                    </ul>
                </div>


                <div className={styles['footer-bottom']}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
}