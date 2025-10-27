// app/rural/RuralClient.jsx

"use client";

import Link from 'next/link';
import styles from './rural.module.css';

/**
 * Componente do Cliente (Client Component) para a página Frete Rural.
 * Contém a estrutura completa da UI (Header, Nav, Main, Footer).
 */
const RuralClient = () => {

    /* Variáveis de estilo inline convertidas do HTML */
    const introParagraphStyle = { textAlign: 'center', fontSize: '17px', maxWidth: '800px', margin: '0 auto 40px auto', color: '#444', fontWeight: '400' };
    const flexSectionStyle = { padding: '20px 0', backgroundColor: '#f7fffb', borderRadius: '10px' };
    const lastSectionTitleStyle = { color: 'var(--cor-destaque-txt)', fontWeight: '700', fontSize: '24px' };
    const lastSectionCardStyle = { border: '1px solid #ddd', padding: '20px' };
    const lastSectionIconStyle = { fontSize: '30px', marginTop: '10px' };
    const lastSectionInnerTitleStyle = { fontSize: '18px', marginTop: '10px' };
    const urgenciaCardStyle = { borderColor: 'var(--cor-urgencia-rural)' };
    const principalCardStyle = { borderColor: 'var(--cor-principal)' };

    /* Variáveis e Função para o Footer */
    const renderFooterLinks = (title, links) => (
        <div>
            <h4>{title}</h4>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        {/* Se o link for '#' (Redes Sociais), usa <a> normal. Caso contrário, usa Link do Next.js */}
                        {link.href === '#' ? (
                            <a href="#">
                                {link.icon && <i className={`${link.icon}`}></i>} {link.text}
                            </a>
                        ) : (
                            <Link href={link.href}>
                                {link.icon && <i className={`${link.icon}`}></i>} {link.text}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );

    const brFreteLinks = [
        { href: '/sobre', text: 'Sobre Nós' },
        { href: '/carreiras', text: 'Trabalhe Conosco' },
        { href: '/blog', text: 'Notícias do Transporte' },
        { href: '/parceiros', text: 'Frota Parceira' },
        { href: '/sustentabilidade', text: 'Sustentabilidade Rural' },
        { href: '/investidores', text: 'Área do Investidor' },
        { href: '/imprensa', text: 'Sala de Imprensa' },
        { href: '/novidades', text: 'Novidades' },
    ];

    const suporteLinks = [
        { href: '/faq', text: 'Perguntas Frequentes' },
        { href: '/contato', text: 'Fale Conosco' },
        { href: '/ajuda', text: 'Central de Ajuda (24h)' },
        { href: '/rastreamento', text: 'Rastreamento Simples' },
        { href: '/seguranca', text: 'Segurança da Carga' },
        { href: '/cancelamento', text: 'Política de Cancelamento' },
        { href: '/pagamentos', text: 'Formas de Pagamento' },
        { href: '/avaliacoes', text: 'Avaliações de Clientes' },
    ];

    const legalLinks = [
        { href: '/privacidade', text: 'Política de Privacidade' },
        { href: '/termos', text: 'Termos de Uso' },
        { href: '/cookies', text: 'Política de Cookies' },
        { href: '/licencas', text: 'Licenças e Certificações' },
        { href: '/compliance', text: 'Compliance e Ética' },
        { href: '/lgpd', text: 'LGPD e Proteção de Dados' },
        { href: '/responsabilidade', text: 'Responsabilidade Social' },
        { href: '/transparencia', text: 'Transparência' },
    ];

    const socialLinks = [
        { href: '#', text: 'Facebook', icon: 'fab fa-facebook' },
        { href: '#', text: 'Instagram', icon: 'fab fa-instagram' },
        { href: '#', text: 'LinkedIn', icon: 'fab fa-linkedin' },
        { href: '#', text: 'YouTube', icon: 'fab fa-youtube' },
        { href: '#', text: 'Twitter', icon: 'fab fa-twitter' },
        { href: '#', text: 'Pinterest' },
        { href: '#', text: 'TikTok' },
        { href: '#', text: 'WhatsApp' },
    ];

    const agroLinks = [
        { href: '/clima#previsao', text: 'Previsão do Tempo (Agro)' },
        { href: '/bolsa#commodities', text: 'Cotações Simples (Feira)' },
        { href: '/estradas#condicoes', text: 'Condições de Estradas Rurais' },
        { href: '/credito#facil', text: 'Microcrédito para Produtor' },
        { href: '/assistencia', text: 'Assistência Técnica Local' },
        { href: '/cooperativas', text: 'Junte-se a Cooperativas' },
        { href: '/irrigacao-simples', text: 'Dicas de Irrigação Simples' },
        { href: '/receitas-vendas', text: 'Receitas para Vender Mais' },
    ];

    return (
        // A classe 'body' do CSS é aplicada no container principal, substituindo a tag <body>
        <div className={styles.body}>

            {/* === 1. HEADER (BANNER) === */}
            <header className={styles.bannerContainer}>
                {/* Box de Login */}
                <div className={styles.loginBox}>
                    <Link href="/login">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </Link>
                    <Link href="/cadastro">
                        <i className="fas fa-user-plus"></i> Cadastro
                    </Link>
                </div>

                {/* Título do Banner */}
                <h1>
                    <i className="fas fa-tractor"></i> Frete Rural: Logística Acessível para Seu Negócio Familiar
                </h1>
                <p>Conectamos sua pequena produção rural aos mercados da cidade com baixo custo e confiança.</p>

                {/* Formulário de Cotação de Frete */}
                <form className={styles.freteForm} action="/cotacao-rural" method="GET">
                    <input type="text" name="origem" placeholder="Ponto de Coleta/Sua Propriedade" required />
                    <input type="text" name="destino" placeholder="Feira/Comércio/Centro de Distribuição" required />
                    <input type="text" name="tipo_carga" placeholder="Ex: Frutas, Legumes, Artesanato, Leite" required />
                    <button type="submit" className={styles.btnSolicitarRural}>
                        <i className="fas fa-truck-moving"></i> Calcular Frete Comunitário
                    </button>
                </form>
            </header>

            {/* === 2. NAVEGAÇÃO SECUNDÁRIA === */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/feira-local">Pequenas Entregas / Feiras</Link>
                <Link href="/insumos-basicos">Insumos/Ferramentas</Link>
                <Link href="/pontos-coleta">Pontos de Coleta na Cidade</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* === 3. CONTEÚDO PRINCIPAL === */}
            <main className={styles.mainContent}>
                <h2>Apoio e Custo-Benefício para o Transporte da Agricultura Familiar.</h2>

                <section className={styles.section}>
                    <p style={introParagraphStyle}>
                        Nosso serviço é dimensionado para o pequeno produtor, o artesão rural e o negócio familiar. Oferecemos
                        soluções de transporte para remessas menores (caixas, sacas) com tarifas fixas e justas, garantindo que
                        seu produto chegue fresco e seguro.
                    </p>

                    <div className={styles.negociacaoGrid}>
                        {/* Card 1 - Destaque */}
                        <div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}>
                            <i className={`fas fa-box ${styles.negociacaoIcon}`}></i>
                            <h3>TRANSPORTE DE COLHEITA E PRODUTOS FINAIS</h3>
                            <p>Envie caixas de frutas, verduras, ovos e laticínios para feiras e clientes na cidade. Coleta
                                flexível na sua propriedade com agendamento.</p>
                            <Link href="/enviar-colheita" className={`${styles.btnAcao} ${styles.btnSolicitarRural}`}>
                                <i className="fas fa-shopping-basket"></i> Cotar Pequena Remessa
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.negociacaoCard}>
                            <i className={`fas fa-hand-holding-water ${styles.negociacaoIcon}`}></i>
                            <h3>INSUMOS BÁSICOS E MATERIAIS DE REUSO</h3>
                            <p>Transporte acessível de sementes, rações, ferramentas leves e materiais de construção para
                                reparos básicos. Fretes conjuntos para economia da comunidade.</p>
                            <Link href="/cotar-insumos-basicos" className={`${styles.btnAcao} ${styles.btnRastrear}`}>
                                <i className="fas fa-lightbulb"></i> Ver Frete de Apoio
                            </Link>
                        </div>

                        {/* Card 3 - Urgência */}
                        <div className={styles.negociacaoCard} style={urgenciaCardStyle}>
                            <i className={styles.negociacaoIcon} style={{ color: 'var(--cor-urgencia-rural)' }}>
                                <i className="fas fa-tools"></i>
                            </i>
                            <h3>PEÇAS DE REPOSIÇÃO URGENTE E MÁQUINAS LEVES</h3>
                            <p>Entrega prioritária de peças de moto-serra, bomba d&apos;água ou pequenos equipamentos que não podem
                                esperar. Manutenção rápida para o sustento.</p>
                            <Link href="/contato-manutencao-familiar" className={`${styles.btnAcao} ${styles.btnUrgenciaRural}`}>
                                <i className="fas fa-wrench"></i> Frete Reparo Rápido
                            </Link>
                        </div>

                        {/* Card 4 - Principal */}
                        <div className={styles.negociacaoCard} style={principalCardStyle}>
                            <i className={styles.negociacaoIcon} style={{ color: 'var(--cor-principal)' }}>
                                <i className="fas fa-map-marked-alt"></i>
                            </i>
                            <h3>PONTOS DE COLETA FÁCIL (LOCKERS COMUNITÁRIOS)</h3>
                            <p>Use comércios parceiros na cidade como pontos seguros para deixar ou buscar suas encomendas.
                                Facilidade para quem não tem endereço comercial fixo.</p>
                            <Link href="/ver-pontos-coleta" className={`${styles.btnAcao} ${styles.btnPrincipalRural}`}>
                                <i className="fas fa-map-pin"></i> Encontre um Ponto
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Seção 2: Soluções Simples e Seguras (servicos-flex) */}
                <section className={styles.section} style={flexSectionStyle}>
                    <h3 className={styles.tituloFlex} style={{ textAlign: 'center' }}>
                        Soluções Simples e Seguras para Sua Produção
                    </h3>

                    <div className={styles.servicosFlex}>
                        {/* Servico Card 1 */}
                        <div className={styles.servicoCard}>
                            <i className="fas fa-box-open"></i>
                            <h4>Embalagens Baratas e Reaproveitáveis</h4>
                            <p>Oferecemos orientação para embalar seus produtos (frutas, geleias, artesanato) usando materiais
                                acessíveis e sustentáveis, garantindo a chegada intacta com baixo custo.</p>
                            <Link href="/dicas-embalagem" className={`${styles.btn} ${styles.btnFlex} ${styles.btnSolicitarRural}`}>
                                Ver Dicas de Embalagem
                            </Link>
                        </div>
                        {/* Servico Card 2 */}
                        <div className={styles.servicoCard}>
                            <i className="fas fa-location-arrow"></i>
                            <h4>Rastreamento Simples por SMS ou WhatsApp</h4>
                            <p>Acompanhe sua entrega de forma descomplicada, sem precisar de aplicativos complexos. Receba
                                atualizações por mensagem de texto ou pelo seu WhatsApp.</p>
                            <Link href="/rastreio-simples" className={`${styles.btn} ${styles.btnFlex} ${styles.btnRastrear}`}>
                                Acompanhar Remessa
                            </Link>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link href="/cadastro-produtor-familiar" className={`${styles.btnAcao} ${styles.btnUrgenciaRural}`} style={{ fontSize: '18px' }}>
                            <i className="fas fa-hand-holding-heart"></i> Cadastre-se e Apoie Sua Renda Familiar!
                        </Link>
                    </div>
                </section>

                {/* Seção 3: Vantagens */}
                <section className={styles.section} style={{ marginTop: '40px', textAlign: 'center' }}>
                    <h3 style={lastSectionTitleStyle}>Vantagens BRFrete Rural: Foco na Comunidade e no Custo-Benefício</h3>

                    <div className={styles.negociacaoGrid}>
                        {/* Vantagem 1 */}
                        <div className={styles.negociacaoCard} style={lastSectionCardStyle}>
                            <i className="fas fa-piggy-bank" style={{ color: 'var(--cor-foco-rural)', ...lastSectionIconStyle }}></i>
                            <h4 style={lastSectionInnerTitleStyle}>Tarifas Fixas e Baixas</h4>
                            <p>Preços pré-determinados por saca ou caixa, sem surpresas. Ideal para quem trabalha com margem de
                                lucro apertada.</p>
                        </div>
                        {/* Vantagem 2 */}
                        <div className={styles.negociacaoCard} style={lastSectionCardStyle}>
                            <i className="fas fa-users" style={{ color: 'var(--cor-urgencia-rural)', ...lastSectionIconStyle }}></i>
                            <h4 style={lastSectionInnerTitleStyle}>Frete Compartilhado Comunitário</h4>
                            <p>Opção de dividir o caminhão com vizinhos e outros produtores da região, reduzindo o custo
                                individual da viagem.</p>
                        </div>
                        {/* Vantagem 3 */}
                        <div className={styles.negociacaoCard} style={lastSectionCardStyle}>
                            <i className="fas fa-receipt" style={{ color: 'var(--cor-secundaria)', ...lastSectionIconStyle }}></i>
                            <h4 style={lastSectionInnerTitleStyle}>Ajuda com Nota Fiscal (Simples)</h4>
                            <p>Suporte simplificado para emitir documentos fiscais básicos (NFT-e) necessários para transporte,
                                sem burocracia.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* === 4. RODAPÉ (FOOTER) - ESTRUTURA COMPLETA === */}
            <footer className={styles.footer}>
                {renderFooterLinks('BRFrete', brFreteLinks)}
                {renderFooterLinks('Suporte', suporteLinks)}
                {renderFooterLinks('Legal', legalLinks)}
                {renderFooterLinks('Redes Sociais', socialLinks)}
                {renderFooterLinks('Recursos do Agronegócio', agroLinks)}

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados. Foco em Logística Comunitária e Familiar.
                </div>
            </footer>
        </div>
    );
}

export default RuralClient;