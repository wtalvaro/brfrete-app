// app/energia-limpa/page.jsx
import Link from 'next/link';
// MUDANÇA: O nome do arquivo CSS importado agora é energia-limpa.module.css
import styles from './energia-limpa.module.css';

// 1. Definição da Metadata para SEO e Título (mantida)
export const metadata = {
    title: 'BRFrete - Frota e-Logistics: O Futuro da Entrega com Energia Limpa',
    description: 'Logística **neutra em carbono** que reduz sua pegada ambiental e seus **custos operacionais**.',
};

// 2. Componente de Página Principal (mantido)
export default function EnergiaLimpaPage() {
    return (
        // Utilizamos um div raiz para aplicar as fontes e estilos base do body
        // Renomeei o componente para EnergiaLimpaPage para manter a coerência
        <div className={styles.eLogisticsRoot}>

            {/* Container Principal do Banner */}
            <header className={styles.bannerContainer}>
                {/* Login Box */}
                <div className={styles.loginBox}>
                    <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>

                <h1><i className="fas fa-charging-station"></i> Frota e-Logistics (Energia Limpa)</h1>
                <p>Logística **neutra em carbono** que reduz sua pegada ambiental e seus **custos operacionais**.</p>

                {/* Formulário/CTA no Banner */}
                <form className={styles.freteForm} action="/energia-limpa-simulacao" method="POST">
                    <input type="text" name="co2_atual" placeholder="Sua Emissão Anual Atual de CO₂ (ton)" required />
                    <input type="text" name="frota_necessaria" placeholder="Tamanho da Frota e-Logistics Desejada" required />
                    <button type="submit"><i className="fas fa-leaf"></i> Simular Redução de Impacto Ambiental!</button>
                </form>
            </header>

            {/* Nav Bar - A tag <nav> recebe a classe navBar */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/inovacao">Inovação & Logística Global</Link>
                <Link href="/sustentabilidade">Compromisso ESG</Link>
                <Link href="/infraestrutura">Infraestrutura de Recarga</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal (main) */}
            <main className={styles.mainContent}>
                <h2>Logística Sustentável: Otimização Econômica e Responsabilidade Global</h2>

                {/* Seção 1: Ganhos */}
                <section className={styles.section}>
                    <h3>Seu Negócio e o Planeta Saem Ganhando</h3>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <i className="fas fa-money-bill-wave"></i>
                            <h4>Economia de Combustível Fóssil</h4>
                            <p>Reduza drasticamente os gastos com diesel e gasolina, trocando por custos de recarga elétrica
                                mais previsíveis e estáveis.</p>
                            {/* Botão convertido para Link */}
                            <Link href="/energia-limpa/combustivel" className={styles.cardBtn}>Cálculo de TCO (Custo Total)</Link>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-cloud-sun"></i>
                            <h4>Emissão Zero de Carbono (Escopo 3)</h4>
                            <p>Alcance metas ESG (Ambientais, Sociais e de Governança) e posicione sua marca como líder em
                                responsabilidade climática.</p>
                            {/* Botão convertido para Link */}
                            <Link href="/energia-limpa/esg" className={styles.cardBtn}>Relatório de Impacto</Link>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-cogs"></i>
                            <h4>Manutenção Simplificada (Menos Peças)</h4>
                            <p>Motores elétricos possuem menos peças móveis do que motores à combustão, resultando em menor
                                frequência e custo de manutenção.</p>
                            {/* Botão convertido para Link */}
                            <Link href="/energia-limpa/manutencao" className={styles.cardBtn}>Plano de Serviços</Link>
                        </div>
                    </div>
                </section>

                {/* Seção 2: Infraestrutura e Tecnologia de Recarga - Estilo inline substituído por classes */}
                <section className={`${styles.section} ${styles.sectionHighlight}`}>
                    {/* Estilo inline do h3 substituído pela classe sectionTitleAcento */}
                    <h3 className={styles.sectionTitleAcento}>
                        Infraestrutura e Tecnologia de Recarga
                    </h3>

                    {/* flex-cards convertido para flexCards */}
                    <div className={styles.flexCards}>
                        <div className={styles.card}>
                            <i className="fas fa-plug"></i>
                            <h4>Rede Própria de Eletropostos Estratégicos</h4>
                            <p>A BRFrete mantém uma rede em constante expansão de pontos de recarga rápida, minimizando o tempo
                                de inatividade da sua frota.</p>
                            {/* Botão convertido para Link e classes combinadas */}
                            <Link href="/energia-limpa/eletropostos" className={`${styles.cardBtn} ${styles.cardBtnAcento}`}>
                                Mapa de Eletropostos
                            </Link>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-battery-full"></i>
                            <h4>Gestão Inteligente da Carga de Bateria</h4>
                            <p>Nossos algoritmos de IA otimizam a rota e a programação de recarga, garantindo que o veículo
                                sempre tenha autonomia para completar as entregas.</p>
                            {/* Botão convertido para Link e classes combinadas */}
                            <Link href="/energia-limpa/ia-bateria" className={`${styles.cardBtn} ${styles.cardBtnAcento}`}>
                                Tecnologia de Gestão
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Seção 3: Tipos de Carga */}
                <section className={styles.section}>
                    <h3>Soluções para Diversos Tipos de Carga</h3>
                    <div className={styles.cards}>

                        <div className={styles.card}>
                            <i className="fas fa-truck-moving"></i>
                            <h4>Veículos Pesados e Rodoviário</h4>
                            <p>Caminhões elétricos de médio e grande porte para transporte intermunicipal e cargas consolidadas
                                de longa distância.</p>
                            <Link href="/energia-limpa/caminhoes" className={styles.cardBtn}>Modelos Disponíveis</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-box-open"></i>
                            <h4>Vans e VUCs (Última Milha)</h4>
                            <p>Furgões elétricos e VUCs silenciosos, ideais para o last mile urbano, operando mesmo em zonas de
                                restrição de emissão/ruído.</p>
                            <Link href="/energia-limpa/vucs" className={styles.cardBtn}>Vantagens Urbanas</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-motorcycle"></i>
                            <h4>Micromobilidade Elétrica</h4>
                            <p>Motos e bicicletas elétricas para entregas ultrarrápidas em centros urbanos densos e de difícil
                                acesso.</p>
                            <Link href="/energia-limpa/micromobilidade" className={styles.cardBtn}>Serviço Expresso</Link>
                        </div>
                    </div>
                </section>

                <div className={styles.ctaButtons}>
                    {/* cta-buttons e cta-destaque convertidos */}
                    <Link href="/energia-limpa-simulacao" className={styles.ctaDestaque}>
                        <i className="fas fa-bolt"></i> Comece Sua Transição para a Logística Limpa!
                    </Link>
                </div>
            </main>

            {/* Rodapé (Footer) - As URLs internas foram ajustadas, exceto a última que já era /energia-limpa */}
            <footer className={styles.footer}>
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
                        {/* Links externos (mantidos como <a>) */}
                        <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i> YouTube</a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="#">Pinterest</a></li>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="#">WhatsApp</a></li>
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
                        {/* A URL final já está correta */}
                        <li><Link href="/energia-limpa">Frota e-Logistics (Energia Limpa)</Link></li>
                    </ul>
                </div>

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer>

        </div>
    );
}