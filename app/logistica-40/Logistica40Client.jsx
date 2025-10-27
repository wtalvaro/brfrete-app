// app/logistica-40/Logistica40Client.jsx

"use client";

import Link from 'next/link';
// Importa o CSS Module
import styles from './logistica-40.module.css';

/**
 * Componente do Cliente (Client Component) para a página Consultoria Logística 4.0.
 */
const Logistica40Client = () => {
    return (
        <>
            {/* === 1. HEADER (BANNER) === */}
            <header className={styles.bannerContainer}>
                {/* Login Box */}
                <div className={styles.loginBox}>
                    <Link href="/login">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </Link>
                    <Link href="/cadastro">
                        <i className="fas fa-user-plus"></i> Cadastro
                    </Link>
                </div>

                <h1>
                    <i className="fas fa-microchip"></i> Consultoria Logística 4.0
                </h1>
                <p>Inteligência Artificial, Automação e Otimização Total: Redefina a eficiência da sua cadeia de suprimentos.</p>

                {/* Formulário CTA - Solicitação de Contato */}
                <form className={styles.consultoriaForm} action="/consultoria-contato" method="POST">
                    <input type="text" name="nome" placeholder="Seu Nome/Empresa" required />
                    <input type="email" name="email" placeholder="Seu E-mail Corporativo" required />
                    <select name="area" required>
                        <option value="">Área de Foco</option>
                        <option value="last-mile">Otimização Last Mile</option>
                        <option value="roteirizacao">Roteirização Avançada</option>
                        <option value="wms">Implantação WMS/TMS</option>
                        <option value="gestao-risco">Gestão de Risco Preditiva</option>
                    </select>
                    <button type="submit">
                        <i className="fas fa-paper-plane"></i> Solicitar Consultoria
                    </button>
                </form>
            </header>

            {/* === 2. NAVEGAÇÃO SECUNDÁRIA === */}
            <nav className={styles.navBar}>
                <Link href="#pilares">Pilares</Link>
                <Link href="#case">Estudo de Caso</Link>
                <Link href="/last-mile-ia">Last Mile IA</Link>
                <Link href="/frete-internacional">Global</Link>
            </nav>

            {/* === 3. CONTEÚDO PRINCIPAL === */}
            <main className={styles.mainContent}>

                <section id="pilares">
                    <h2>Os 4 Pilares da Logística 4.0</h2>
                    <div className={styles.pilaresGrid}>

                        {/* Pilar 1: Conectividade (IoT) */}
                        <div className={styles.cardPilar}>
                            <i className="fas fa-wifi"></i>
                            <h4>Conectividade e IoT</h4>
                            <p>Sensores em frotas e armazéns fornecem dados em tempo real, permitindo visibilidade total e manutenção preditiva.</p>
                        </div>

                        {/* Pilar 2: Big Data & Analytics */}
                        <div className={styles.cardPilar}>
                            <i className="fas fa-database"></i>
                            <h4>Big Data & Analytics</h4>
                            <p>Análise de grandes volumes de dados para prever tendências, otimizar estoques e identificar gargalos operacionais.</p>
                        </div>

                        {/* Pilar 3: Automação & Robótica */}
                        <div className={styles.cardPilar}>
                            <i className="fas fa-robot"></i>
                            <h4>Automação e Robótica</h4>
                            <p>Implementação de sistemas autônomos (AGVs, drones, WMS) para maximizar a velocidade e reduzir erros humanos.</p>
                        </div>

                        {/* Pilar 4: Cibersegurança */}
                        <div className={styles.cardPilar}>
                            <i className="fas fa-shield-alt"></i>
                            <h4>Cibersegurança Avançada</h4>
                            <p>Proteção integral de toda a cadeia de dados e transações logísticas contra ataques e fraudes digitais.</p>
                        </div>

                    </div>
                </section>

                <section id="case">
                    <h2>Estudo de Caso: Otimização de Armazém</h2>
                    <div className={styles.caseGrid}>

                        <div>
                            <h3>BRFrete: +35% de Eficiência em Picking</h3>
                            <p>Através da nossa consultoria, uma grande empresa de varejo implementou um sistema híbrido de WMS e robótica colaborativa, resultando em ganhos massivos na separação de pedidos e na redução de custos de armazenamento.</p>

                            <div className={styles.estatisticas}>
                                <div>
                                    <h5>35%</h5>
                                    <span>Aumento de Produtividade</span>
                                </div>
                                <div>
                                    <h5>18%</h5>
                                    <span>Redução de Erros</span>
                                </div>
                                <div>
                                    <h5>7 Meses</h5>
                                    <span>Retorno sobre o Investimento</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.imagePlaceholder}>
                            <i className="fas fa-warehouse" style={{ fontSize: '50px', marginRight: '15px' }}></i>
                            Simulação de Armazém Inteligente
                        </div>

                    </div>
                </section>

                <div className={styles.ctaRodape}>
                    <Link href="/contato-especialista">
                        <i className="fas fa-chevron-right"></i> Fale com um Especialista em Logística 4.0
                    </Link>
                </div>

            </main>

            {/* === 4. RODAPÉ (FOOTER) - Estrutura completa === */}
            <footer className={styles.footerContainer}>
                <div>
                    <h4>BRFrete: Frete Inteligente</h4>
                    <ul>
                        <li><Link href="/sobre-nos">Sobre Nós</Link></li>
                        <li><Link href="/carreiras">Carreiras</Link></li>
                        <li><Link href="/blog">Blog e Notícias</Link></li>
                        <li><Link href="/imprensa">Sala de Imprensa</Link></li>
                        <li><Link href="/contato">Contato e Suporte</Link></li>
                        <li><Link href="/termos">Termos de Serviço</Link></li>
                        <li><Link href="/privacidade">Política de Privacidade</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Logística Social & Transparência</h4>
                    <ul>
                        <li><Link href="/impacto-social">Impacto Social</Link></li>
                        <li><Link href="/responsabilidade">Responsabilidade Social</Link></li>
                        <li><Link href="/transparencia">Transparência</Link></li>
                        <li><Link href="/energia-limpa">Frota E-Logistics</Link></li>
                        <li><Link href="/parceiros">Programa de Parceiros</Link></li>
                        <li><Link href="/integracoes-api">Integração API</Link></li>
                    </ul>
                </div>

                {/* === SEÇÃO FALTANTE: Canais de Venda & Ferramentas === */}
                <div>
                    <h4>Canais de Venda & Ferramentas</h4>
                    <ul>
                        <li><Link href="/frete-pf">Cotação PF</Link></li>
                        <li><Link href="/frete-pj">Cotação PJ</Link></li>
                        <li><Link href="/rastreio">Rastreamento Avançado</Link></li>
                        <li><Link href="/frete-agronegocio">Agronegócio</Link></li>
                        <li><Link href="/frete-ecommerce">E-commerce e Marketplaces</Link></li>
                        <li><Link href="/simulacao-custos">Simulador de Custos</Link></li>
                        <li><Link href="/suporte-whatsapp">Suporte via WhatsApp</Link></li>
                    </ul>
                </div>
                {/* =================================================== */}


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

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
}

export default Logistica40Client;