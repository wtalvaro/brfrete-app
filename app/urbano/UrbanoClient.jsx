// app/urbano/UrbanoClient.jsx

"use client";

import Link from 'next/link';
import styles from './urbano.module.css';

/**
 * Componente do Cliente (Client Component) para a página Frete Urbano.
 * Contém a estrutura completa da UI (Header, Nav, Main, Footer) com o tema Urbano.
 */
const UrbanoClient = () => {

    /* Variáveis de estilo inline convertidas do HTML */
    const introParagraphStyle = { textAlign: 'center', fontSize: '17px', maxWidth: '800px', margin: '0 auto 40px auto', color: '#444', fontWeight: '400' };
    const flexSectionStyle = { padding: '20px 0', backgroundColor: '#f7fff8', borderRadius: '10px' };
    const titleFlexStyle = { textAlign: 'center', color: 'var(--cor-agil)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '30px' };
    const btnAcaoStyle = { marginTop: '25px' };
    const btnSecundarioStyle = { marginTop: '20px' };

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
                                {link.icon && <i className={`${link.icon} ${styles.socialIcon}`}></i>} {link.text}
                            </a>
                        ) : (
                            <Link href={link.href}>
                                {link.icon && <i className={`${link.icon} ${styles.socialIcon}`}></i>} {link.text}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );

    const brFreteLinks = [
        { href: '/sobre', text: 'Sobre a Empresa' },
        { href: '/carreiras', text: 'Trabalhe Conosco' },
        { href: '/blog', text: 'Notícias e Artigos' },
        { href: '/parceiros', text: 'Nossos Fornecedores' },
        { href: '/imprensa', text: 'Sala de Imprensa' },
        { href: '/franquias', text: 'Seja um Franqueado' },
        { href: '/sustentabilidade', text: 'Compromisso Ambiental' },
        { href: '/investidores', text: 'Relações com Investidores' },
    ];

    const suporteLinks = [
        { href: '/faq', text: 'Dúvidas Frequentes' },
        { href: '/contato', text: 'Canais de Atendimento' },
        { href: '/ajuda', text: 'Acesso à Central de Ajuda' },
        { href: '/rastreamento', text: 'Acompanhe Seu Pedido' },
        { href: '/seguranca', text: 'Proteção de Dados' },
        { href: '/cancelamento', text: 'Pedido de Cancelamento' },
        { href: '/pagamentos', text: 'Métodos de Pagamento' },
        { href: '/avaliacoes', text: 'Opinião dos Clientes' },
    ];

    const legalLinks = [
        { href: '/privacidade', text: 'Política de Privacidade' },
        { href: '/termos', text: 'Termos de Serviço' },
        { href: '/cookies', text: 'Uso de Cookies' },
        { href: '/licencas', text: 'Nossas Certificações' },
        { href: '/compliance', text: 'Código de Conduta' },
        { href: '/lgpd', text: 'Regulamento de Dados (LGPD)' },
        { href: '/responsabilidade', text: 'Responsabilidade Corporativa' },
        { href: '/transparencia', text: 'Relatórios de Transparência' },
    ];

    const socialLinks = [
        { href: '#', text: 'Facebook', icon: 'fab fa-facebook' },
        { href: '#', text: 'Instagram', icon: 'fab fa-instagram' },
        { href: '#', text: 'LinkedIn', icon: 'fab fa-linkedin' },
        { href: '#', text: 'YouTube', icon: 'fab fa-youtube' },
        { href: '#', text: 'Twitter', icon: 'fab fa-twitter' },
        { href: '#', text: 'Pinterest', icon: 'fab fa-pinterest' },
        { href: '#', text: 'TikTok', icon: 'fab fa-tiktok' },
        { href: '#', text: 'WhatsApp', icon: 'fab fa-whatsapp' },
    ];

    const servicosUrbanosLinks = [
        { href: '/moto-frete', text: 'Moto Frete Expresso' },
        { href: '/van-cargas', text: 'Van para Pequenas Cargas' },
        { href: '/bike-entrega', text: 'Entrega Sustentável (Bike)' },
        { href: '/frete-hora', text: 'Frete por Hora Contratada' },
        { href: '/servicos/farmacia', text: 'Logística Farmacêutica' },
        { href: '/servicos/delivery', text: 'Serviço de Delivery' },
        { href: '/servicos/malote', text: 'Transporte de Malotes' },
        { href: '/servicos/alimentos', text: 'Entrega de Alimentos' },
    ];

    return (
        // A classe 'bodyContainer' substitui a tag <body>
        <div className={styles.bodyContainer}>

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
                    <i className="fas fa-motorcycle"></i> Frete Urbano: Entregas Rápidas e Conexão Local
                </h1>
                <p>Otimize sua logística de última milha. Entregas no mesmo dia ou em poucas horas na sua cidade.</p>

                {/* Formulário de Cotação de Frete */}
                <form className={styles.freteForm} action="/cotacao-urbana" method="GET">
                    <input type="text" name="origem" placeholder="Retirada (Endereço, Ponto de Referência)" required />
                    <input type="text" name="destino" placeholder="Entrega (CEP, Cidade)" required />
                    <input type="text" name="pacote" placeholder="Detalhes da Encomenda (Ex: Documento, E-commerce)" required />
                    <button type="submit">
                        <i className="fas fa-route"></i> Consultar Rotas Urbanas
                    </button>
                </form>
            </header>

            {/* === 2. NAVEGAÇÃO SECUNDÁRIA === */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/frete-express">Frete Expresso</Link>
                <Link href="/solucoes-ecommerce">Soluções E-commerce</Link>
                <Link href="/sustentabilidade-frete">Sustentabilidade</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* === 3. CONTEÚDO PRINCIPAL === */}
            <main className={styles.mainContent}>
                <h2>A Logística da Última Milha ao Seu Alcance, Rápida e Sustentável.</h2>

                <section className={styles.section}>
                    <p style={introParagraphStyle}>
                        A **BRFrete** conecta sua empresa ou negócio local a uma frota diversificada de entregadores urbanos.
                        Use motos, carros e vans para garantir que seus produtos cheguem ao cliente final com **agilidade** e
                        **transparência** total.
                    </p>

                    <div className={styles.vantagensGrid}>

                        {/* Card 1 */}
                        <div className={styles.vantagemCard}>
                            <i className={`fas fa-tachometer-alt ${styles.vantagemIcon}`}></i>
                            <h3>ENTREGAS EXPRESSAS (LAST MILE)</h3>
                            <p>Opções de entrega em 1, 3 ou 5 horas dentro da área metropolitana. Ideal para e-commerce local e
                                documentos urgentes.</p>
                            <Link href="/agendar-express" className={styles.btnAcao}>
                                <i className="fas fa-stopwatch"></i> Agendar Frete Já
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.vantagemCard}>
                            <i className={`fas fa-store ${styles.vantagemIcon}`}></i>
                            <h3>SOLUÇÃO PARA E-COMMERCE LOCAL</h3>
                            <p>Integração simples com plataformas de venda online. Gestão automatizada de pedidos, rastreio
                                personalizado para seu cliente.</p>
                            <Link href="/integracao-ecommerce" className={`${styles.btnAcao} ${styles.btnSecundario}`}>
                                <i className="fas fa-plug"></i> Integrar Plataforma
                            </Link>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.vantagemCard}>
                            <i className={`fas fa-map-marked-alt ${styles.vantagemIcon}`}></i>
                            <h3>RASTREAMENTO AO VIVO (GPS)</h3>
                            <p>Seu cliente acompanha o entregador no mapa, garantindo visibilidade e previsão exata de chegada.
                                Maior confiança e satisfação.</p>
                            <Link href="/rastreio-detalhado" className={styles.btnAcao}>
                                <i className="fas fa-search-location"></i> Ver Demo Rastreio
                            </Link>
                        </div>

                        {/* Card 4 - Sustentável */}
                        <div className={styles.vantagemCard}>
                            <i className={`fas fa-bicycle ${styles.vantagemIcon}`} style={{ color: 'var(--cor-local)' }}></i>
                            <h3>FROTA DIVERSIFICADA E SUSTENTÁVEL</h3>
                            <p>Escolha entre motos, utilitários ou até mesmo bicicletas (em rotas curtas) para reduzir custos e
                                impacto ambiental na cidade.</p>
                            <Link href="/sustentabilidade-urbana" className={`${styles.btnAcao} ${styles.btnSecundario}`}>
                                <i className="fas fa-leaf"></i> Saiba Mais
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Seção 2: Soluções */}
                <section className={styles.section} style={flexSectionStyle}>
                    <h3 style={titleFlexStyle}>
                        Como Funciona o Frete Inteligente BRFrete
                    </h3>

                    <div className={styles.solucoesGrid}>
                        <div className={styles.solucaoInfo}>
                            <h3>Otimização de Rotas para Menor Custo</h3>
                            <p>Nosso algoritmo calcula a rota mais rápida e econômica, considerando o trânsito em tempo real,
                                restrições de circulação e tipo de veículo. Isso se traduz em mais entregas por hora e economia
                                para seu negócio.</p>

                            <ul className={styles.checklist}>
                                <li><i className="fas fa-check-circle"></i> Retirada flexível em múltiplos endereços.</li>
                                <li><i className="fas fa-check-circle"></i> Prova de entrega digital com foto e assinatura.</li>
                                <li><i className="fas fa-check-circle"></i> Entrega noturna e aos finais de semana disponível.</li>
                                <li><i className="fas fa-check-circle"></i> Seguros inclusos contra roubo ou extravio.</li>
                            </ul>
                            <Link href="/teste-gratis-urbano" className={styles.btnAcao} style={btnAcaoStyle}>
                                <i className="fas fa-cogs"></i> Comece a Otimizar Hoje!
                            </Link>
                        </div>
                        <div className={styles.solucaoImgCard}>
                            <i className="fas fa-route"></i>
                            <h4>Tecnologia de Roteirização Dinâmica</h4>
                            <p>Nossa plataforma ajusta a rota do entregador em tempo real, minimizando atrasos e maximizando a
                                eficiência em ambientes urbanos complexos.</p>
                            <Link href="/area-parceiro" className={`${styles.btnAcao} ${styles.btnSecundario}`} style={btnSecundarioStyle}>
                                <i className="fas fa-user-tie"></i> Área do Entregador Parceiro
                            </Link>
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
                {renderFooterLinks('Serviços Urbanos', servicosUrbanosLinks)}

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados. Foco em Frete Urbano.
                </div>
            </footer>
        </div>
    );
}

export default UrbanoClient;