// app/reuso/page.jsx
import Link from 'next/link';
// 1. IMPORTAÇÃO DO CSS MODULE
import styles from './reuso.module.css';

// 1. Definição da Metadata para SEO e Título
export const metadata = {
    title: 'BRFrete - Balcão do Pequeno Vendedor: Materiais de Reuso', // Título do HTML
    description: 'Venda e compre materiais de construção, móveis, madeiras e eletrônicos para reuso. Frete negociado para volumes.',
};

// 2. Componente de Página Principal
export default function ReusoPage() {
    return (
        // O elemento pai único (Fragmento)
        <>
            {/* O cabeçalho (<header>) - Usa a classe do CSS Module */}
            <header className={styles.bannerContainer}>
                {/* Box de Login (Usando a classe do módulo, se definida, ou global, se você tiver uma) */}
                <div className={styles.loginBox}>
                    <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>

                <h1><i className="fas fa-recycle"></i> Balcão BRFrete: Materiais de Reuso</h1>
                <p>O seu mercado de itens de construção, móveis, madeiras e eletrônicos para um novo ciclo de vida. Frete especializado para volumes.</p>

                <form className={styles.freteForm} action="/cotacao" method="GET">
                    <input type="text" name="origem" placeholder="Origem (CEP, Cidade)" required />
                    <input type="text" name="destino" placeholder="Destino (CEP, Cidade)" required />
                    <input type="text" name="material" placeholder="Material (Ex: Janela, Pallet, Tinta)" required />
                    <button type="submit"><i className="fas fa-truck-loading"></i> Consultar Frete por Lote</button>
                </form>
            </header>

            {/* A barra de navegação (<nav>) - USANDO A CLASSE LOCAL `.navBar` */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/reuso">Materiais de Reuso</Link>
                <Link href="/vender-reuso">Vender Itens</Link>
                <Link href="/comprar-reuso">Comprar Lotes</Link>
                <Link href="/comunidade-reuso">Comunidade</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal - USANDO A CLASSE LOCAL `.main` */}
            <main className={styles.main}>
                <h2>Encontre ou Descarte de Forma Sustentável e Econômica</h2>

                <section className={styles.section}>
                    <p
                        style={{ textAlign: 'center', fontSize: '17px', maxWidth: '800px', margin: '0 auto 40px auto', color: '#444', fontWeight: 400 }}>
                        {/* Texto original */}
                        Seja você um **profissional de demolição**, um ateliê de **marcenaria** ou um consumidor consciente.
                        Dê um novo propósito para o que seria lixo, economize e lucre.
                    </p>

                    <div className={styles.negociacaoGrid}>

                        <div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}>
                            <i className={`fas fa-store-alt ${styles.negociacaoIcon}`}></i>
                            <h3>QUERO VENDER MEU MATERIAL DE REUSO</h3>
                            <p>Anuncie tijolos, madeiras, pallets, móveis usados ou eletrônicos para reuso. Defina o preço e
                                encontre compradores que valorizam a sustentabilidade.</p>
                            <Link href="/vender-reuso" className={`${styles.btnAcao} ${styles.btnVender}`}><i className="fas fa-leaf"></i> Anunciar
                                Itens de Reuso</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={`fas fa-tools ${styles.negociacaoIcon}`}></i>
                            <h3>QUERO COMPRAR PARA O MEU PROJETO</h3>
                            <p>Publique uma **Oferta de Compra** por um tipo de material (ex: 50m² de piso de madeira, janelas de
                                demolição, fardos de papel). Fornecedores te procuram.</p>
                            <Link href="/comprar-reuso" className={`${styles.btnAcao} ${styles.btnComprar}`}><i className="fas fa-th-large"></i> Criar Pedido de
                                Material</Link>
                        </div>

                        <div className={styles.negociacaoCard} style={{ borderColor: 'var(--cor-negociacao)' }}>
                            <i className={`fas fa-dolly ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-negociacao)' }}></i>
                            <h3>FRETE PARA GRANDES VOLUMES E DISTÂNCIAS</h3>
                            <p>Transporte de pallets, móveis e materiais de construção exigem atenção. Peça a um parceiro BRFrete
                                para fazer uma oferta de frete personalizada. Mais segurança no deslocamento.</p>
                            <Link href="/negociar-frete-reuso" className={`${styles.btnAcao} ${styles.btnNegociar}`}><i className="fas fa-truck-moving"></i>
                                Negociar Frete de Volume</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={`fas fa-hands-helping ${styles.negociacaoIcon}`}></i>
                            <h3>DOAÇÃO OU TROCA</h3>
                            <p>Nem tudo precisa ser vendido. Utilize o balcão para doar materiais excedentes a projetos sociais ou
                                trocar itens de reuso com outros membros da comunidade.</p>
                            <Link href="/doar-trocar" className={`${styles.btnAcao} ${styles.btnComprar}`}><i className="fas fa-heart"></i> Explorar Doações e
                                Trocas</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ padding: '20px 0', backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                    <h3
                        style={{ textAlign: 'center', color: 'var(--cor-reuso-principal)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '30px' }}>
                        Logística Adaptada para Reuso</h3>

                    <div className={styles.freteFlexibility}>
                        <div className={styles.freteOption}>
                            <i className="fas fa-box-open"></i>
                            <h4>Opção 1: Frete Fracionado (Itens menores)</h4>
                            <p>Para móveis, eletrônicos ou volumes menores (até 150kg). Utilizamos parceiros de logística
                                integrada com coleta na porta. **Ideal para pequenos vendedores e artesãos.**</p>
                            <button className={styles.btn}>Calcular Frete Fracionado</button>
                        </div>
                        <div className={styles.freteOption}>
                            <i className="fas fa-warehouse"></i>
                            <h4>Opção 2: Frete Carga Fechada (Grandes Volumes)</h4>
                            <p>Para lotes de construção, demolição ou estoque completo de pallets. Receba propostas de
                                transportadoras que se especializam em fretes pesados e volumosos. **Garantia de segurança.**</p>
                            <button className={`${styles.btn} ${styles.btnCombinado}`}>Ver Cotação para Carga</button>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link href="/vender-reuso" className={`${styles.btnAcao} ${styles.btnVender}`} style={{ fontSize: '18px' }}><i className="fas fa-hand-holding-usd"></i>
                            Anuncie e Lucrar com o Reuso!</Link>
                    </div>
                </section>

                <section className={styles.section} style={{ marginTop: '40px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--cor-destaque-txt)', fontWeight: 700, fontSize: '24px' }}>Conteúdo de Apoio para Reuso
                        e Sustentabilidade</h3>
                    <div className={styles.negociacaoGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-lightbulb" style={{ color: 'var(--cor-reuso-acento)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Ideias de Upcycling</h4>
                            <p>Inspirações para transformar materiais simples em peças de decoração ou utilidade.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-ruler-combined" style={{ color: 'var(--cor-reuso-principal)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Guia de Medidas e Peso</h4>
                            <p>Saiba como medir corretamente seus materiais (m², unidades, volume) para garantir a cotação correta.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-project-diagram" style={{ color: 'var(--cor-secundaria)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Acompanhamento de Projetos</h4>
                            <p>Ferramenta para acompanhar o uso dos seus materiais comprados e medir seu impacto ambiental.</p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Rodapé (Footers) - USANDO A CLASSE LOCAL `.footer` */}
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
                    <h4>Sustentabilidade e Reuso</h4>
                    <ul>
                        {/* Links com estilos inline convertidos para estilos JSX */}
                        <li style={{ color: 'var(--cor-reuso-principal)' }}><Link href="/reuso#descarte-correto">Guia de Descarte Correto</Link></li>
                        <li style={{ color: 'var(--cor-reuso-principal)' }}><Link href="/reuso#materiais-proibidos">Materiais Perigosos e Proibidos</Link></li>
                        <li style={{ color: 'var(--cor-reuso-principal)' }}><Link href="/reuso#economia-circular">Princípios da Economia Circular</Link></li>
                        <li style={{ color: 'var(--cor-reuso-principal)' }}><Link href="/reuso#recicladores">Rede de Recicladores Parceiros</Link></li>
                        <li style={{ color: 'var(--cor-reuso-principal)' }}><Link href="/reuso#upcycling-obra">Upcycling na Construção Civil</Link></li>
                        <li style={{ color: 'var(--cor-reuso-principal)' }}><Link href="/reuso#incentivos">Incentivos Fiscais para Reuso</Link></li>
                        <li style={{ color: 'var(--cor-reuso-principal)' }}><Link href="/reuso#comunidade-reforma">Comunidade "Reforma Consciente"</Link></li>
                    </ul>
                </div>

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer >
        </>
    );
}