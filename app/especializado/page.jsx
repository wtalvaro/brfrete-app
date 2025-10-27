// app/especializado/page.jsx
import Link from 'next/link';

// 1. IMPORTAÇÃO DO CSS MODULE
// O arquivo de estilos para este componente
import styles from './especializado.module.css';

// 2. Definição da Metadata para SEO e Título (baseado no HTML original)
export const metadata = {
    title: 'BRFrete - Frete Especializado: Cuidado Máximo para Sua Encomenda',
    description: 'Cargas que exigem atenção extra: frágeis, medicamentos, obras de arte, refrigerados e logística crítica.',
};

// 3. Componente de Página Principal
export default function EspecializadoPage() {
    // A tag raiz do componente, que aplica os estilos de 'body' do HTML
    return (
        <div className={styles.especializadoRoot}>

            {/* Container Principal do Banner */}
            <header className={styles.bannerContainer}>
                {/* Login Box */}
                <div className={styles.loginBox}>
                    <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>

                {/* O título e o ícone Roxo Ametista */}
                <h1><i className="fas fa-box-open"></i> Frete Especializado</h1>
                <p>Cuidado Máximo para Cargas que Exigem Atenção Extra (Frágeis, Medicamentos, Obras de Arte e Mais)</p>

                {/* Formulário/CTA no Banner - Adaptei para ter 3 campos */}
                <form className={styles.freteForm} action="/cotacao-especializada" method="POST">
                    <input type="text" name="origem" placeholder="Cidade de Origem" required />
                    <input type="text" name="destino" placeholder="Cidade de Destino" required />
                    <input type="text" name="tipo_carga" placeholder="Tipo de Carga (Ex: Frágil/Refrigerado)" required />
                    {/* Botão SOLICITAR FRETE ESPECIALIZADO com a classe de destaque */}
                    <button type="submit" className={styles.btnSolicitarEspecial}><i className="fas fa-hands-helping"></i> Solicitar Cotação Especializada</button>
                </form>
            </header>

            {/* Nav Bar */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação Padrão</Link>
                <Link href="/especializado#fragil">Frágeis</Link>
                <Link href="/especializado#refrigerado">Refrigerado</Link>
                <Link href="/especializado#obras-arte">Obras de Arte</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal */}
            <main className={styles.mainContent}>
                <h2>Seu Frete de Alto Valor e Alto Cuidado</h2>

                {/* Seção 1: Balcão de Negociação (4 cards) */}
                <section className={styles.section}>
                    <h3>Protocolos Rigorosos para a sua Tranquilidade</h3>

                    <div className={styles.negociacaoGrid}>

                        {/* Card 1: Logística Crítica e Urgente (DESTAQUE URGENCE - Laranja) */}
                        <div className={styles.negociacaoCard}>
                            <i className={`${styles.negociacaoIcon} fas fa-heartbeat`}></i>
                            <h3>Logística Crítica (Órgãos/Medicamentos)</h3>
                            <p>Transporte urgente com controle total de temperatura, rastreio em tempo real e veículos exclusivos.</p>
                            <Link href="/solicitar-critico" className={`${styles.btnAcao} ${styles.btnUrgenciaEspecial}`}>
                                <i className="fas fa-ambulance"></i> Solicitar Frete Crítico
                            </Link>
                        </div>

                        {/* Card 2: Carga Frágil (DESTAQUE ESPECIAL - Roxo) */}
                        <div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}>
                            <i className={`${styles.negociacaoIcon} fas fa-glass-whiskey`}></i>
                            <h3>Frágeis e Delicados (Vidros, Cerâmicas)</h3>
                            <p>Embalagem e manuseio sob normas internacionais. Seguro total da carga de ponta a ponta.</p>
                            <Link href="/solicitar-fragil" className={`${styles.btnAcao} ${styles.btnSolicitarEspecial}`}>
                                <i className="fas fa-hand-holding-box"></i> Cotação para Frágeis
                            </Link>
                        </div>

                        {/* Card 3: Obras de Arte (DESTAQUE ESPECIAL - Roxo) */}
                        <div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}>
                            <i className={`${styles.negociacaoIcon} fas fa-palette`}></i>
                            <h3>Obras de Arte e Coleções de Valor</h3>
                            <p>Transporte climatizado, escolta dedicada e equipe com experiência em museologia e galerias.</p>
                            <Link href="/solicitar-arte" className={`${styles.btnAcao} ${styles.btnSolicitarEspecial}`}>
                                <i className="fas fa-shield-alt"></i> Contratar Escolta
                            </Link>
                        </div>

                        {/* Card 4: Refrigerado (DESTAQUE CONFIANÇA - Verde) */}
                        <div className={styles.negociacaoCard}>
                            <i className={`${styles.negociacaoIcon} fas fa-temperature-low`}></i>
                            <h3>Carga Refrigerada e Congelada (-20ºC a +8ºC)</h3>
                            <p>Monitoramento contínuo de temperatura e umidade, com relatórios auditáveis para a ANVISA.</p>
                            <Link href="/solicitar-refrigerado" className={`${styles.btnAcao} ${styles.btnConfianca}`}>
                                <i className="fas fa-truck-container"></i> Agendar Frete Refrigerado
                            </Link>
                        </div>

                    </div>
                </section>

                {/* Seção 2: Flexibilidade de Frete */}
                <section className={styles.section}>
                    <h3>Você Escolhe o Nível de Cuidado e Acompanhamento</h3>
                    <div className={styles.servicosFlex}>
                        {/* Card 1: Frete Dedicado (100% Exclusivo) */}
                        <div className={styles.servicoCard}>
                            <i className="fas fa-route"></i>
                            <h4>Frete Exclusivo e Dedicado</h4>
                            <p>O veículo é reservado apenas para sua carga, eliminando o risco de extravio ou danos por contato com outras mercadorias. Ideal para alto valor e fragilidade.</p>
                            <Link href="/contratar-dedicado" className={styles.btn}>Contratar Exclusivo</Link>
                        </div>
                        {/* Card 2: Frete Fracionado Premium (Garantia de Espaço) */}
                        <div className={styles.servicoCard}>
                            <i className="fas fa-boxes"></i>
                            <h4>Frete Fracionado Premium</h4>
                            <p>Você compartilha o caminhão para economizar, mas sua carga recebe um espaço reservado e tratamento especial no manuseio, com reforço de embalagem.</p>
                            <Link href="/contratar-fracionado" className={styles.btnAcento}>Contratar Fracionado</Link>
                        </div>
                    </div>
                </section>


                {/* Seção 3: Rastreio com Tecnologia de Ponta */}
                <section className={styles.section}>
                    <h3>Segurança e Transparência: Rastreio Inviolável</h3>
                    <p className={styles.rastreioDesc}>
                        Todos os fretes especializados contam com rastreamento via satélite, bloqueio remoto do veículo e a opção de **seguro total da carga** contra perdas e danos.
                    </p>
                    <div className={styles.rastreioContainer}>
                        <input type="text" placeholder="Insira o Código de Rastreio Especializado (BRF-ESP-XXXXX)" />
                        <button className={styles.btnRastrear}><i className="fas fa-search-location"></i> Rastrear Agora</button>
                    </div>
                </section>


                {/* Seção CTA de Rodapé */}
                <div className={styles.ctaButtons}>
                    <Link href="/solicitar-especial" className={styles.ctaDestaque}>
                        <i className="fas fa-shipping-fast"></i> Cuidar da Sua Carga Crítica com a BRFrete
                    </Link>
                </div>
            </main>

            {/* Rodapé (Footer) - As classes foram mantidas de forma agnóstica para reuso (footer, footerBottom) */}
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
                    <h4>Tendências de Decoração</h4>
                    <ul>
                        <li><Link href="/decor#rustico">Rústico Moderno</Link></li>
                        <li><Link href="/decor#upcycling">Móveis Reaproveitados</Link></li>
                    </ul>
                    <h4 className={styles.footerCotacaoTitle}>Cotações de Metais</h4>
                    <ul>
                        <li><strong>Cobre:</strong> R$10.263,00 / tonelada</li>
                        <li><strong>Alumínio:</strong> R$2.683,50 / tonelada</li>
                    </ul>
                </div>

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer>

        </div>
    );
}