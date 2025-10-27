// app/moveis/MoveisClient.jsx

"use client";

import Link from 'next/link';
// Importa o CSS Module
import styles from './moveis.module.css';

/**
 * Componente do Cliente (Client Component) para a página Balcão Móveis.
 */
const MoveisClient = () => {
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
                    <i className="fas fa-paint-roller"></i> Balcão do Pequeno Vendedor: Móveis & Decoração
                </h1>
                <p>Logística especializada em peças únicas, móveis de reuso e artigos de artesanato. Seu negócio de criatividade com frete seguro.</p>

                {/* Formulário CTA - Cotação de Volumes */}
                <form className={styles.freteForm} action="/cotacao-moveis" method="POST">
                    <input type="text" name="cep_origem" placeholder="CEP de Coleta" required />
                    <input type="text" name="cep_destino" placeholder="CEP de Entrega" required />
                    <select name="tipo_carga" required>
                        <option value="">Tipo de Item</option>
                        <option value="arte-fragil">Artesanato Frágil</option>
                        <option value="moveis-pequenos">Móvel Pequeno/Desmontado</option>
                        <option value="moveis-grandes">Móvel Grande/Antigo</option>
                    </select>
                    <button type="submit">
                        <i className="fas fa-box-open"></i> Calcular Frete para Móveis
                    </button>
                </form>
            </header>

            {/* === 2. NAVEGAÇÃO SECUNDÁRIA === */}
            <nav className={styles.navBar}>
                <Link href="#logistica">Logística Segura</Link>
                <Link href="#recursos">Recursos</Link>
                <Link href="/cursos-restauracao">Cursos de Restauração</Link>
                <Link href="/financiamento-moveis">Financiamento</Link>
            </nav>

            {/* === 3. CONTEÚDO PRINCIPAL === */}
            <main className={styles.main}>

                <h2 className={styles.sectionTitle}>Sua Logística para Peças Únicas</h2>

                <div className={styles.cardsGrid}>

                    {/* Card 1: Embalagem */}
                    <div className={styles.cardItem}>
                        <i className="fas fa-box"></i>
                        <h3>Guia de Embalagem Específico</h3>
                        <p>Aprenda a embalar peças frágeis, como vidros de quadros ou móveis restaurados, minimizando riscos de avaria.</p>
                        <Link href="/guia-embalagem-moveis" className={styles.modalLink}>Ver Guia</Link>
                    </div>

                    {/* Card 2: Segurança */}
                    <div className={styles.cardItem}>
                        <i className="fas fa-shield-alt"></i>
                        <h3>Seguro para Peças de Alto Valor</h3>
                        <p>Cobertura especializada para móveis antigos, obras de arte e itens de decoração com alto valor agregado e sentimental.</p>
                        <Link href="/seguro-pecas-valor" className={styles.modalLink}>Saiba Mais</Link>
                    </div>

                    {/* Card 3: Carga Consolidada */}
                    <div className={styles.cardItem}>
                        <i className="fas fa-truck-loading"></i>
                        <h3>Logística Consolidada</h3>
                        <p>Cargas fracionadas e consolidação de fretes para otimizar o transporte de móveis grandes e pesados por todo o Brasil.</p>
                        <Link href="/logistica-personalizada" className={styles.modalLink}>Cotação Personalizada</Link>
                    </div>

                    {/* Card 4: Financiamento */}
                    <div className={styles.cardItem}>
                        <i className="fas fa-hand-holding-usd"></i>
                        <h3>Financiamento de Matéria-Prima</h3>
                        <p>Linhas de crédito para artesãos e restauradores comprarem madeiras, tintas e insumos para seus projetos de reuso.</p>
                        <Link href="/financiamento-artesanal" className={styles.modalLink}>Solicitar Crédito</Link>
                    </div>

                </div>

                {/* CTA - Contato com Especialista */}
                <div className={styles.ctaContainer}>
                    <h2>Fale com um Especialista em Logística para Móveis</h2>
                    <p>Tem uma encomenda especial, um móvel de família ou uma grande remessa? Nossa equipe de suporte está pronta para te atender.</p>
                    <Link href="/contato-especialista">
                        <i className="fas fa-envelope"></i> Contato Direto
                    </Link>
                </div>

            </main>

            {/* === 4. RODAPÉ (FOOTER) - ESTRUTURA PADRÃO COMPLETA (5 COLUNAS) === */}
            <footer className={styles.footerContainer}>
                {/* Coluna 1: Institucional (Extraída do HTML) */}
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

                {/* Coluna 2: Logística Social & Transparência (Extraída do HTML) */}
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

                {/* Coluna 3: Canais de Venda & Ferramentas (Inserida, seguindo o template completo) */}
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

                {/* Coluna 4: Redes Sociais (Extraída do HTML) */}
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

                {/* Coluna 5: Inovação & Logística Global (Título Padrão, Links Adaptados do HTML) */}
                <div>
                    <h4>Inovação & Logística Global</h4>
                    <ul>
                        <li><Link href="/guia-embalagem-moveis">Guia de Embalagem para Móveis Frágeis</Link></li>
                        <li><Link href="/cursos-restauracao">Cursos Online de Restauração (8+)</Link></li>
                        <li><Link href="/calculadora-cubagem">Calculadora de Cubagem de Carga</Link></li>
                        <li><Link href="/catalogo-reuso">Catálogo de Fornecedores de Material de Reuso</Link></li>
                        <li><Link href="/logistica-personalizada">Cotação de Logística para Grandes Volumes</Link></li>
                        <li><Link href="/seguro-pecas-valor">Seguro para Peças de Alto Valor Agregado</Link></li>
                        <li><Link href="/oficina-virtual-brfrete">Oficina Virtual BRFrete (Live)</Link></li>
                        <li><Link href="/financiamento-artesanal">Financiamento para Materiais</Link></li>
                    </ul>
                </div>

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
}

export default MoveisClient;