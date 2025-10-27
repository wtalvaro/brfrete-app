// app/metais/page.tsx
import Link from 'next/link';
// 1. IMPORTAÇÃO DO CSS MODULE
import styles from './metais.module.css';

// 1. Definição da Metadata para SEO e Título
export const metadata = {
    title: 'Balcão BRFrete: Mercado da Sucata | Metais Recicláveis',
    description: 'Compre e venda sucata (Cobre, Alumínio, Ferro) por peso com frete integrado e cotações transparentes.',
};

// 2. Componente de Página Principal
export default function MetaisPage() {
    return (
        // O elemento pai único (Fragmento) que envolve todo o componente
        <>
            {/* 3. Aplica a classe raiz do módulo para carregar as variáveis CSS (metaisRoot) */}
            <div className={styles.metaisRoot}>

                {/* O cabeçalho (<header>) - Usando a classe do módulo */}
                <header className={styles.metaisBannerContainer}>
                    {/* Classes globais podem ser usadas diretamente: login-box */}
                    <div className="login-box">
                        <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                        <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                    </div>

                    <h1><i className="fas fa-balance-scale"></i> Balcão BRFrete: Mercado da Sucata</h1>
                    <p>O melhor lugar para catadores, pequenos comerciantes e ferros-velhos negociarem metais por peso.</p>

                    <form className={styles.metaisFreteForm} action="/cotacao" method="GET">
                        <input type="text" name="origem" placeholder="Origem (CEP, Cidade)" required />
                        <input type="text" name="destino" placeholder="Destino (CEP, Cidade)" required />
                        <input type="number" name="peso" placeholder="Peso Total (kg)" required />
                        <button type="submit"><i className="fas fa-truck-loading"></i> Consultar Frete por Lote</button>
                    </form>
                </header>

                {/* A barra de navegação (<nav>) - Mantendo a classe padrão para usar o estilo de globals.css */}
                <nav>
                    <Link href="/home">Home</Link>
                    <Link href="/fretes">Cotação de Fretes</Link>
                    <Link href="/cotacoes-metais">Cotação de Metais</Link>
                    <Link href="/vender-sucata">Vender Sucata</Link>
                    <Link href="/comprar-lotes">Comprar Lotes</Link>
                    <Link href="/contato">Contato</Link>
                </nav>

                <main className={styles.metaisMain}>
                    <h2>Transforme Ferro Velho e Sucata em Dinheiro Vivo</h2>

                    <section className="section">
                        <p
                            style={{ textAlign: 'center', fontSize: '17px', maxWidth: '800px', margin: '0 auto 40px auto', color: '#444', fontWeight: 400 }}>
                            Pessoas físicas e pequenos catadores: Anuncie sua sucata por peso (Cobre, Alumínio, Ferro, Latão, etc.).
                            Garantimos frete acessível e cotações transparentes.
                        </p>

                        <div className={styles.negociacaoGrid}>

                            <div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}>
                                <i className={`fas fa-hand-holding-usd ${styles.negociacaoIcon}`}></i>
                                <h3>QUERO VENDER MINHA SUCATA POR PESO</h3>
                                <p>Publique a cotação da sua sucata (lote mínimo 50kg). Use nossas tabelas de preço por material
                                    para maximizar seus lucros. Transação e frete facilitados.</p>
                                <Link href="/vender-sucata" className={`${styles.btnAcao} ${styles.btnVender}`}><i className="fas fa-weight-hanging"></i>
                                    Anunciar Metais Agora</Link>
                            </div>

                            <div className={styles.negociacaoCard}>
                                <i className={`fas fa-magnet ${styles.negociacaoIcon}`}></i>
                                <h3>QUERO COMPRAR MATERIAIS ESPECÍFICOS</h3>
                                <p>Grandes e pequenos ferros-velhos podem buscar lotes específicos (ex: Bobinas de Cobre, Latas de
                                    Alumínio por fardo). Publique sua necessidade de compra para ser atendido.</p>
                                <Link href="/comprar-metais" className={`${styles.btnAcao} ${styles.btnComprar}`}><i className="fas fa-search"></i> Criar Pedido de
                                    Compra</Link>
                            </div>

                            <div className={styles.negociacaoCard} style={{ borderColor: 'var(--cor-negociacao)' }}>
                                <i className={`fas fa-truck-moving ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-negociacao)' }}></i>
                                <h3>FRETE ESPECIAL PARA GRANDES VOLUMES</h3>
                                <p>Negocie o transporte de lotes pesados (&gt;500kg) diretamente com transportadoras parceiras BRFrete.
                                    Receba propostas por viagem ou por tonelada. Sucata a granel tem desconto.</p>
                                <Link href="/negociar-frete-sucata" className={`${styles.btnAcao} ${styles.btnNegociar}`}><i className="fas fa-shipping-fast"></i>
                                    Propostas de Frete Lote</Link>
                            </div>

                            <div className={styles.negociacaoCard}>
                                <i className={`fas fa-chart-line ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-negociacao)' }}></i>
                                <h3>COTAÇÃO EM TEMPO REAL E TENDÊNCIAS</h3>
                                <p>Acesse o painel de preços atualizado diariamente (Cobre, Alumínio, Aço). Negocie com base no
                                    mercado e receba alertas de alta para vender na hora certa.</p>
                                <Link href="/cotacoes-metais" className={`${styles.btnAcao} ${styles.btnComprar}`}
                                    style={{ backgroundColor: 'var(--cor-metal-principal)' }}><i className="fas fa-bell"></i> Ver Cotações
                                    Atuais</Link>
                            </div>
                        </div>
                    </section>

                    <section className="section" style={{ padding: '20px 0', backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                        <h3
                            style={{ textAlign: 'center', color: 'var(--cor-metal-principal)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '30px' }}>
                            Logística Feita Para o Catador e o Pequeno Empresário</h3>

                        <div className={styles.freteFlexibility}>
                            <div className={styles.freteOption}>
                                <i className="fas fa-receipt"></i>
                                <h4>Opção 1: Frete Integrado (Para Pesos Medianos)</h4>
                                <p>Nós cuidamos da coleta no seu ponto de origem. O custo é calculado e descontado do valor da
                                    venda. **Praticidade e Segurança no pagamento.**</p>
                                <button className={`btn ${styles.btnIntegrado}`}>Calcular Frete na Venda</button>
                            </div>
                            <div className={styles.freteOption}>
                                <i className="fas fa-handshake"></i>
                                <h4>Opção 2: Frete Combinado / Retirada Própria</h4>
                                <p>O comprador assume a responsabilidade da coleta (logística reversa). Ideal para grandes volumes
                                    ou sucata de demolição. A plataforma garante a negociação, mas o frete é por conta.</p>
                                <button className={`btn ${styles.btnCombinado}`}>Detalhes sobre Retirada</button>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '50px' }}>
                            <Link href="/cadastro" className={`${styles.btnAcao} ${styles.btnVender}`} style={{ fontSize: '18px', color: 'white' }}><i
                                className="fas fa-coins"></i> Comece a Fazer Dinheiro com Sucata!</Link>
                        </div>
                    </section>

                    <section className="section" style={{ marginTop: '40px', textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--cor-destaque-txt)', fontWeight: 700, fontSize: '24px' }}>Conteúdo de Apoio ao Mercado
                            de Sucata</h3>
                        <div className={styles.negociacaoGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                            <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                                <i className="fas fa-vial" style={{ color: 'var(--cor-metal-principal)', fontSize: '30px' }}></i>
                                <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Guia de Separação de Ligas</h4>
                                <p>Aprenda a identificar e separar corretamente os tipos de metal (Latão, Bronze, Inox) para obter o
                                    melhor preço.</p>
                            </div>
                            <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                                <i className="fas fa-gavel" style={{ color: 'var(--cor-metal-destaque)', fontSize: '30px' }}></i>
                                <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Legislação e Notas Fiscais</h4>
                                <p>Dicas sobre como pequenos comerciantes e catadores devem proceder com a emissão de notas para
                                    venda legalizada.</p>
                            </div>
                            <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                                <i className="fas fa-hand-holding-water" style={{ color: 'var(--cor-secundaria)', fontSize: '30px' }}></i>
                                <h4 style={{ fontSize: '18px', marginTop: '10px' }}>O Impacto da Reciclagem</h4>
                                <p>Entenda como a sua venda apoia a sustentabilidade e a redução do consumo de recursos naturais.
                                </p>
                            </div>
                        </div>
                    </section>

                </main>

                <footer>
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
                        <h4>Cotações de Metais (R$/Ton.)</h4>
                        <ul>
                            {/* 4. Uso das classes de Metais para cores específicas do tema no rodapé */}
                            <li className={styles.cotacaoValorStrong}><strong>Cobre:</strong> R$10.263,00 <i
                                className={`fas fa-caret-up ${styles.cotacaoCaretUp}`}></i></li>
                            <li className={styles.cotacaoValorStrong}><strong>Alumínio:</strong> R$2.683,50 <i
                                className={`fas fa-caret-down ${styles.cotacaoCaretDown}`}></i></li>
                            <li className={styles.cotacaoValorStrong}><strong>Latão:</strong> R$3.850,00 <i
                                className={`fas fa-caret-up ${styles.cotacaoCaretUp}`}></i>
                            </li>
                            <li className={styles.cotacaoValorStrong}><strong>Ferro Fundido:</strong> R$650,00 <i
                                className={`fas fa-caret-up ${styles.cotacaoCaretUp}`}></i></li>
                            <li className={styles.cotacaoValorStrong}><strong>Aço Inox:</strong> R$5.900,00 <i
                                className={`fas fa-caret-up ${styles.cotacaoCaretUp}`}></i></li>
                            <li className={styles.cotacaoValorStrong}><strong>Chumbo:</strong> R$2.120,00 <i
                                className={`fas fa-caret-down ${styles.cotacaoCaretDown}`}></i></li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        &copy; 2025 BRFrete. Todos os direitos reservados.
                    </div>
                </footer >
            </div>
        </>
    );
}