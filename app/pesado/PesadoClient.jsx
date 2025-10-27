// app/pesado/PesadoClient.jsx

"use client";

import Link from 'next/link';
// Importa o CSS Module
import styles from './pesado.module.css';

/**
 * Componente do Cliente (Client Component) para a página Frete Pesado.
 * Contém toda a UI estática e interativa.
 */
const PesadoClient = () => {
    // Nota: O HTML original não tinha JS, mas marcamos como 'use client' para futuras interações (como o formulário).

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
                    <i className="fas fa-truck-monster"></i> Frete Pesado: O Centro Logístico de Carga e Indústria
                </h1>
                <p>Logística especializada em cargas industriais, maquinário, minério e projetos especiais. Força, segurança e agilidade para seu negócio.</p>

                {/* Formulário CTA - Cotação de Volumes */}
                <form className={styles.freteForm} action="/cotacao-pesada" method="POST">
                    <input type="text" name="cep_origem" placeholder="CEP de Coleta" required />
                    <input type="text" name="cep_destino" placeholder="CEP de Entrega" required />
                    <select name="tipo_carga" required>
                        <option value="">Tipo de Carga</option>
                        <option value="maquinario">Maquinário Industrial</option>
                        <option value="minerio">Minério/Granéis</option>
                        <option value="quimico">Químicos (Regulamentados)</option>
                        <option value="projeto">Carga de Projeto Especial</option>
                    </select>
                    <button type="submit">
                        <i className="fas fa-box-open"></i> Solicitar Cotação Industrial
                    </button>
                </form>
            </header>

            {/* === 2. NAVEGAÇÃO SECUNDÁRIA === */}
            <nav className={styles.navBar}>
                <Link href="#seguranca">Segurança</Link>
                <Link href="#documentacao">Documentação</Link>
                <Link href="/rastreio-satelital">Rastreio Satelital</Link>
                <Link href="/consultoria-icms">Consultoria ICMS</Link>
            </nav>

            {/* === 3. CONTEÚDO PRINCIPAL === */}
            <main className={styles.main}>

                <h2 className={styles.sectionTitle}>Força e Segurança para Sua Cadeia de Suprimentos</h2>

                <div className={styles.featuresGrid}>

                    {/* Card 1: Rastreamento */}
                    <div className={styles.featureCard}>
                        <i className="fas fa-satellite-dish"></i>
                        <h3>Rastreamento Satelital 24h</h3>
                        <p>Acompanhamento em tempo real de cargas de alto valor e sensíveis, com monitoramento de risco ativo.</p>
                        <Link href="/rastreio-satelital" className={styles.modalLink}>Ver Dashboard</Link>
                    </div>

                    {/* Card 2: Documentação */}
                    <div className={styles.featureCard}>
                        <i className="fas fa-file-contract"></i>
                        <h3>Gestão de Documentação Complexa</h3>
                        <p>Suporte completo para licenças, NFs-e, CTe e MTRs (Movimentação de Resíduos) para cargas regulamentadas.</p>
                        <Link href="/docs-carga-pesada" className={styles.modalLink}>Ver Guia</Link>
                    </div>

                    {/* Card 3: Maquinário */}
                    <div className={styles.featureCard}>
                        <i className="fas fa-industry"></i>
                        <h3>Transporte de Maquinário Especializado</h3>
                        <p>Logística de plataformas, guindastes e peças de grande porte com veículos e equipe de içamento homologados.</p>
                        <Link href="/guia-maquinario" className={styles.modalLink}>Detalhes</Link>
                    </div>

                    {/* Card 4: Cobertura de Risco */}
                    <div className={styles.featureCard}>
                        <i className="fas fa-handshake"></i>
                        <h3>Seguro de Risco Total</h3>
                        <p>Cobertura de seguro robusta e flexível para acidentes, roubos e avarias em todo o percurso nacional.</p>
                        <Link href="/seguro-industrial" className={styles.modalLink}>Cálculo de Cobertura</Link>
                    </div>

                </div>

                {/* CTA - Logística Personalizada */}
                <div className={styles.ctaContainer}>
                    <h2>Logística Personalizada para Projetos Industriais</h2>
                    <p>Tem um projeto complexo, grandes volumes ou rotas não convencionais? Nossa equipe de projetos está pronta para otimizar sua operação.</p>
                    <Link href="/contato-projetos">
                        <i className="fas fa-headset"></i> Falar com um Especialista
                    </Link>
                </div>

            </main>

            {/* === 4. RODAPÉ (FOOTER) - ESTRUTURA PADRÃO COMPLETA (5 COLUNAS) === */}
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
                    <h4>Impacto e Transparência</h4>
                    <ul>
                        <li><Link href="/impacto-social">Impacto Social</Link></li>
                        <li><Link href="/responsabilidade">Responsabilidade Social</Link></li>
                        <li><Link href="/transparencia">Transparência</Link></li>
                        <li><Link href="/lgpd">Proteção de Dados</Link></li>
                        <li><Link href="/parceiros">Programa de Parceiros</Link></li>
                        <li><Link href="/integracoes-api">Integração API</Link></li>
                        <li><Link href="/energia-limpa">Frota e-Logistics</Link></li>
                    </ul>
                </div>

                {/* Coluna 3: Canais de Venda & Ferramentas (Padrão de 5 colunas) */}
                <div>
                    <h4>Canais de Venda</h4>
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

                {/* Coluna 5: Ferramentas Úteis (Links do HTML original) */}
                <div>
                    <h4>Ferramentas Úteis</h4>
                    <ul>
                        <li><Link href="/calculadora-cubagem"><i className="fas fa-calculator"></i> Calculadora de Cubagem</Link></li>
                        <li><Link href="/simulador-icms"><i className="fas fa-stamp"></i> Simulação de ICMS/Impostos</Link></li>
                        <li><Link href="/docs-carga-pesada"><i className="fas fa-file-contract"></i> Documentação para Carga Pesada</Link></li>
                        <li><Link href="/guia-maquinario"><i className="fas fa-wrench"></i> Guia de Transporte de Maquinário</Link></li>
                        <li><Link href="/tabelas-frete"><i className="fas fa-table"></i> Tabela Nacional de Fretes</Link></li>
                        <li><Link href="/mapa-rotas"><i className="fas fa-route"></i> Mapa de Rotas Críticas</Link></li>
                        <li><Link href="/rastreio-satelital"><i className="fas fa-satellite-dish"></i> Rastreamento Satelital</Link></li>
                    </ul>
                </div>

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
}

export default PesadoClient;