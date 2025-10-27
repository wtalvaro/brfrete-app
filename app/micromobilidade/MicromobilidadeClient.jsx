// app/micromobilidade/MicromobilidadeClient.jsx

"use client";

import Link from 'next/link';
// Importa o CSS Module
import styles from './micromobilidade.module.css';

/**
 * Componente do Cliente (Client Component) para a página Micromobilidade Urbana.
 * Contém a estrutura de UI e links.
 */
const MicromobilidadeClient = () => {
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
                    <i className="fas fa-bicycle"></i> Micromobilidade Urbana
                </h1>
                <p>O Futuro do Last Mile: Entregas rápidas, zero emissão e total rastreabilidade com bikes e patinetes elétricos.</p>

                {/* Formulário CTA - Cotação Last Mile */}
                <form className={styles.freteForm} action="/cotacao-micro" method="POST">
                    <input type="text" name="cep_origem" placeholder="CEP de Origem" required />
                    <input type="text" name="cep_destino" placeholder="CEP de Destino" required />
                    <select name="modalidade" required>
                        <option value="">Modalidade de Entrega</option>
                        <option value="bike-eletrica">Bike Elétrica (Curto Prazo)</option>
                        <option value="patinete">Patinete/Scooter (Ultra Rápido)</option>
                        <option value="cargo-bike">Cargo Bike (Volumes Maiores)</option>
                    </select>
                    <button type="submit">
                        <i className="fas fa-search"></i> Calcular Frete Verde
                    </button>
                </form>
            </header>

            {/* === 2. NAVEGAÇÃO SECUNDÁRIA === */}
            <nav className={styles.navBar}>
                <Link href="#beneficios">Benefícios</Link>
                <Link href="#modalidades">Modalidades</Link>
                <Link href="/rastreio">Rastreamento</Link>
                <Link href="/impacto-social">Impacto Social</Link>
            </nav>

            {/* === 3. CONTEÚDO PRINCIPAL === */}
            <main className={styles.mainContent}>

                <section id="beneficios" className={styles.section}>
                    <h2>Por Que Escolher a Micromobilidade?</h2>
                    <div className={styles.beneficiosGrid}>

                        {/* Card 1: Agilidade */}
                        <div className={styles.cardBeneficio}>
                            <i className="fas fa-location-arrow"></i>
                            <h4>Agilidade no Trânsito Urbano</h4>
                            <p>Desvia de engarrafamentos, garantindo entregas até 40% mais rápidas em zonas centrais e de difícil acesso.</p>
                        </div>

                        {/* Card 2: Sustentabilidade */}
                        <div className={styles.cardBeneficio}>
                            <i className="fas fa-leaf"></i>
                            <h4>Emissão Zero (e-Logistics)</h4>
                            <p>Compromisso total com o meio ambiente, utilizando frota 100% elétrica e não poluente, reduzindo a pegada de carbono.</p>
                        </div>

                        {/* Card 3: Custo */}
                        <div className={styles.cardBeneficio}>
                            <i className="fas fa-tag"></i>
                            <h4>Redução de Custo Operacional</h4>
                            <p>Custo de manutenção e energia drasticamente reduzidos em comparação com veículos motorizados tradicionais.</p>
                        </div>

                        {/* Card 4: Rastreo */}
                        <div className={styles.cardBeneficio}>
                            <i className="fas fa-map-marked-alt"></i>
                            <h4>Rastreamento em Tempo Real</h4>
                            <p>Visibilidade total da entrega com GPS de alta precisão e notificações automáticas para o cliente final.</p>
                        </div>

                    </div>
                </section>

                <section id="modalidades" className={styles.section}>
                    <h3>Nossas Soluções de Micromobilidade</h3>

                    <div className={styles.modalidadeGrid}>
                        {/* Imagem (Placeholder) */}
                        <div style={{ textAlign: 'center' }}>
                            {/* Uso de cor do CSS Module para o estilo inline */}
                            <i className="fas fa-shipping-fast" style={{ fontSize: '80px', color: 'var(--cor-micro-principal)' }}></i>
                            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Simulação: Rotas Otimizadas para Last Mile</p>
                        </div>

                        {/* Descrição */}
                        <div>
                            <h4>Frota Otimizada por IA</h4>
                            <p>A BRFrete utiliza algoritmos de Machine Learning para determinar a melhor combinação de modalidade, rota e entregador para cada encomenda.</p>
                            <ul>
                                <li>Entrega Ultra-Rápida (menos de 1 hora) para documentos e itens pequenos.</li>
                                <li>Cargo Bikes para volumes médios em centros urbanos, substituindo furgões.</li>
                                <li>Integração direta com o seu sistema de pedidos (API).</li>
                                <li>Seguro completo contra roubo e avaria.</li>
                            </ul>
                            <Link href="/contratar-micro" className={styles.ctaDestaque} style={{ marginTop: '20px', display: 'inline-block' }}>
                                <i className="fas fa-check-circle"></i> Comece a Enviar com Frota Verde
                            </Link>
                        </div>
                    </div>
                </section>

                <div className={styles.ctaRodape}>
                    <Link href="/parceria-entregadores">
                        <i className="fas fa-chevron-right"></i> Quer ser um Entregador Parceiro de Micromobilidade?
                    </Link>
                </div>

            </main>

            {/* === 4. RODAPÉ (FOOTER) - ESTRUTURA COMPLETA === */}
            <footer className={styles.footerContainer}>
                {/* Coluna 1: Institucional */}
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

                {/* Coluna 2: Logística Social & Transparência */}
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

                {/* Coluna 3: Canais de Venda & Ferramentas (SEÇÃO FALTANTE ADICIONADA) */}
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

                {/* Coluna 4: Redes Sociais */}
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

                {/* Coluna 5: Inovação & Logística Global */}
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

export default MicromobilidadeClient;