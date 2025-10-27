// app/armazenamento-virtual/page.jsx
import Link from 'next/link';
// 1. IMPORTAÇÃO DO CSS MODULE
import styles from './armazenamento-virtual.module.css';

// 1. Definição da Metadata para SEO e Título
export const metadata = {
    title: 'BRFrete - Armazenagem Virtual & Cross-Docking: Fluxo Logístico Otimizado',
    description: 'Minimize estoque parado, maximize a velocidade de distribuição e reduza custos logísticos.',
};

// 2. Componente de Página Principal
export default function ArmazenagemVirtualPage() {
    return (
        // O elemento pai único (Fragmento)
        <>
            {/* O cabeçalho (<header>) - USANDO CLASSE LOCAL */}
            <header className={styles.bannerContainer}>
                {/* Box de Login - USANDO CLASSE LOCAL */}
                <div className={styles.loginBox}>
                    <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>
                <h1><i className="fas fa-exchange-alt"></i> Armazenagem Virtual & Cross-Docking</h1>
                <p>Minimize estoque parado, maximize a **velocidade de distribuição** e **reduza custos** logísticos.</p>

                {/* Formulário/CTA no Banner - USANDO CLASSE LOCAL */}
                <form className={styles.freteForm} action="/armazem-virtual-simulacao" method="POST">
                    <input type="text" name="volume_mensal" placeholder="Volume Médio Mensal (m³)" required />
                    <button type="submit" className={styles.ctaDestaque}><i className="fas fa-calculator"></i> Simular Economia com Cross-Docking</button>
                </form>
            </header>

            {/* A barra de navegação (<nav>) - USANDO CLASSE LOCAL `.navBar` */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/inovacao">Inovação & Logística Global</Link>
                <Link href="/wms">Tecnologia WMS</Link>
                <Link href="/distribuicao">Rede de Distribuição</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal - USANDO CLASSE LOCAL `.main` */}
            <main className={styles.main}>
                <h2>Otimização sem Paredes: Revolucione Sua Cadeia de Suprimentos</h2>

                <section className={styles.section}>
                    <h3>Nossos Três Pilares de Fluxo e Eficiência</h3>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <i className="fas fa-warehouse"></i>
                            <h4>Cross-Docking (Zero Estocagem)</h4>
                            <p>Recebimento imediato, separação e reenvio de mercadorias. Elimine o custo de armazenagem
                                prolongada e acelere o *lead time*.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link href="/armazem/cross-docking" className={styles.cardBtn}>Como Funciona</Link>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-cloud"></i>
                            <h4>Armazenagem Virtual (Rede)</h4>
                            <p>Acesso à nossa rede de centros de distribuição estratégicos sem a necessidade de um armazém fixo.
                                Pague apenas pelo espaço de trânsito utilizado.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link href="/armazem/virtual" className={styles.cardBtn}>Ver Pontos de Cobertura</Link>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-layer-group"></i>
                            <h4>Consolidação de Cargas (Hubs)</h4>
                            <p>Integramos pedidos de diferentes fornecedores em um único ponto de coleta para otimizar o
                                transporte e reduzir o custo por frete.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link href="/armazem/consolidacao" className={styles.cardBtn}>Benefícios da
                                Consolidação</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ backgroundColor: '#f7faff', padding: '40px 20px', borderRadius: '10px' }}>
                    <h3 style={{ borderBottomColor: 'var(--cor-armazem-acento)', color: 'var(--cor-armazem-principal)' }}>
                        Resultados Diretos na Sua Operação</h3>

                    <div className={styles.flexCards}>
                        <div className={styles.card}>
                            <i className="fas fa-dollar-sign"></i>
                            <h4>Redução de Custos Fixos</h4>
                            <p>Corte gastos com aluguel de galpão, segurança, folha de pagamento de armazém e infraestrutura
                                própria. Converta Opex em Varex.</p>
                            {/* Conversão de botão com onclick para Link - USANDO MÚLTIPLAS CLASSES LOCAIS */}
                            <Link href="/armazem/custos" className={`${styles.cardBtn} ${styles.cardBtnAcento}`}>Análise de
                                ROI</Link>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-route"></i>
                            <h4>Flexibilidade e Escalabilidade</h4>
                            <p>Ajuste sua capacidade logística instantaneamente para atender a picos sazonais (Ex: Black Friday)
                                sem comprometer a estrutura.</p>
                            {/* Conversão de botão com onclick para Link - USANDO MÚLTIPLAS CLASSES LOCAIS */}
                            <Link href="/armazem/escalabilidade" className={`${styles.cardBtn} ${styles.cardBtnAcento}`}>Soluções
                                Sazonais</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h3>Integração Total com Seu WMS/ERP</h3>
                    <div className={styles.cards}>

                        <div className={styles.card}>
                            <i className="fas fa-code-branch"></i>
                            <h4>APIs de Conexão Rápida</h4>
                            <p>Integre nossa plataforma de Cross-Docking com seus sistemas de gestão (ERP/WMS) em menos de 48
                                horas, garantindo sincronia de estoque.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link href="/armazem/api" className={styles.cardBtn}>Documentação Técnica</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-chart-area"></i>
                            <h4>Relatórios de Performance em Tempo Real</h4>
                            <p>Monitore KPIs como taxa de giro, tempo de doca, e volume de cross-docking com painéis de controle
                                em tempo real (BI Logístico).</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link href="/armazem/kpis" className={styles.cardBtn}>Ver Demonstração</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-shield-alt"></i>
                            <h4>Auditoria e Compliance</h4>
                            <p>Garantia de que todos os movimentos de carga seguem rigorosos padrões de segurança e compliance,
                                com rastreabilidade completa.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link href="/armazem/compliance" className={styles.cardBtn}>Padrões de Qualidade</Link>
                        </div>
                    </div>
                </section>

                <div className={styles.ctaButtons}>
                    {/* Conversão de <a> para Link - USANDO CLASSE LOCAL */}
                    <Link href="/armazem-virtual-simulacao" className={styles.ctaDestaque}>
                        <i className="fas fa-boxes"></i> Comece a Otimizar Seu Estoque Hoje!
                    </Link>
                </div>
            </main>

            {/* Rodapé (Footers) - USANDO CLASSE LOCAL `.footer` */}
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
                        <li><Link href="/energia-limpa">Frota e-Logistics (Energia Limpa)</Link></li>
                    </ul>
                </div>

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer >
        </>
    );
}