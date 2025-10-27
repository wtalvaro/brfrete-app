// app/alimentos/page.jsx
import Link from 'next/link';
// 1. IMPORTAÇÃO DO CSS MODULE
import styles from './alimentos.module.css';

// 1. Definição da Metadata para SEO e Título
export const metadata = {
    title: 'BRFrete - Balcão do Pequeno Produtor: Alimentos, Quitutes e Renda',
    description: 'Apoie o pequeno produtor! Encontre alimentos artesanais e negocie a entrega direto para sua mesa.',
};

// 2. Componente de Página Principal
export default function AlimentosPage() {
    return (
        // O elemento pai único (Fragmento)
        <>
            {/* O cabeçalho (<header>) */}
            <header className={styles.bannerContainer}>
                {/* Box de Login */}
                <div className={styles.loginBox}>
                    <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>

                <h1><i className="fas fa-carrot"></i> Feito no Bairro: Quitutes e Alimentos Frescos</h1>
                <p>Apoie o pequeno produtor! Encontre alimentos artesanais e negocie a entrega direto para sua mesa.</p>

                <form className={styles.freteForm} action="/cotacao/alimentos" method="GET">
                    <input type="text" name="origem" placeholder="Origem (Ponto de Coleta/Feira)" required />
                    <input type="text" name="destino" placeholder="Destino (Sua Casa/Comércio)" required />
                    <input type="text" name="produto" placeholder="O que será entregue? (Ex: Pães, Bolos)" required />
                    <button type="submit"><i className="fas fa-bicycle"></i> Entregadores Locais / Frete Rápido</button>
                </form>
            </header>

            {/* A barra de navegação (<nav>) - USANDO A CLASSE LOCAL `.navBar` */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/mercadolocal">Mercado Local</Link>
                <Link href="/receitas">Receitas</Link>
                <Link href="/eventos">Eventos/Feiras</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal - USANDO A CLASSE LOCAL `.main` */}
            <main className={styles.main}>
                <h2>Do Produtor Local para a Sua Mesa: Renda Familiar e Sabor Caseiro! 🧺</h2>

                <section className={styles.section}>
                    <p
                        style={{ textAlign: 'center', fontSize: '17px', maxWidth: '800px', margin: '0 auto 40px auto', color: '#444', fontWeight: 400 }}>
                        Seu doce caseiro, seus legumes da horta ou seu pão artesanal merecem um mercado justo.
                        Aqui você negocia a venda e a logística com **entregadores de confiança** da sua região.
                    </p>

                    <div className={styles.negociacaoGrid}>

                        <div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}>
                            <i className={`fas fa-utensils ${styles.negociacaoIcon}`}></i>
                            <h3>QUERO VENDER MEUS PRODUTOS FRESCOS</h3>
                            <p>Crie sua loja virtual grátis em minutos! Publique seu catálogo: marmitas, bolos, licores, pães e
                                mais. Venda para todo o bairro ou cidade!</p>
                            <Link href="/vender-alimentos" className={`${styles.btnAcao} ${styles.btnVender}`}><i className="fas fa-cash-register"></i> Vender
                                e Fazer Renda Extra</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={`fas fa-truck-ramp-box ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-alimentos-principal)' }}></i>
                            <h3>QUERO NEGOCIAR O TRANSPORTE DO MEU ESTOQUE</h3>
                            <p>Precisa de um frete maior para ingredientes (farinha, grãos) ou para levar sua produção a uma
                                feira? Publique um pedido e receba ofertas.</p>
                            <Link href="/negociar-logistica" className={`${styles.btnAcao} ${styles.btnNegociar}`}><i className="fas fa-truck"></i> Negociar
                                Frete Grande</Link>
                        </div>

                        <div className={styles.negociacaoCard} style={{ borderColor: 'var(--cor-alimentos-suporte)' }}>
                            <i className={`fas fa-cheese ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-alimentos-suporte)' }}></i>
                            <h3>QUERO ENCONTRAR INGREDIENTES E FORNECEDORES</h3>
                            <p>Busque produtores de queijos artesanais, orgânicos ou hortaliças perto de você. Faça parcerias
                                para obter produtos frescos e de qualidade.</p>
                            <Link href="/buscar-ingredientes" className={`${styles.btnAcao} ${styles.btnComprar}`}><i className="fas fa-search"></i> Buscar
                                Fornecedores Locais</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={`fas fa-hands-helping ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-secundaria)' }}></i>
                            <h3>QUERO COMPRAR EM GRUPO COM DESCONTO</h3>
                            <p>Organize uma **compra coletiva** com vizinhos ou outros comerciantes para diminuir o custo do
                                frete e conseguir melhores preços nos ingredientes.</p>
                            <Link href="/compra-coletiva" className={`${styles.btnAcao} ${styles.btnComprar}`}
                                style={{ backgroundColor: 'var(--cor-secundaria)' }}><i className="fas fa-users"></i> Juntar-se a um
                                Grupo</Link>
                        </div>
                    </div>
                </section>

                <hr />

                <section className={styles.section} style={{ padding: '20px 0', backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                    <h3
                        style={{ textAlign: 'center', color: 'var(--cor-alimentos-principal)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '30px' }}>
                        Como Garantimos a Entrega Rápida e Segura?</h3>

                    <div className={styles.freteFlexibility}>
                        <div className={styles.freteOption}>
                            <i className="fas fa-motorcycle"></i>
                            <h4>Opção 1: Entrega Local (Moto/Bike)</h4>
                            <p>Contrate entregadores autônomos próximos, ideais para **alimentos prontos** e entregas rápidas no
                                mesmo dia, mantendo a qualidade e frescor.</p>
                            <button className={`${styles.btn} ${styles.btnFrete}`} style={{ backgroundColor: 'var(--cor-alimentos-destaque)' }}>Calcular
                                Entrega Rápida</button>
                        </div>
                        <div className={styles.freteOption}>
                            <i className="fas fa-box-tissue"></i>
                            <h4>Opção 2: Frete de Insumos (Caminhonete/Carro)</h4>
                            <p>Para ingredientes a granel, cestas de hortifrúti e estoques. Negocie um veículo maior com
                                parceiros
                                BRFrete para um transporte seguro e com capacidade ideal.</p>
                            <button className={`${styles.btn} ${styles.btnFrete}`} style={{ backgroundColor: 'var(--cor-alimentos-acento)' }}>Negociar Frete
                                para Insumos</button>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link href="/cadastro" className={`${styles.btnAcao} ${styles.btnVender}`} style={{ fontSize: '18px' }}><i
                            className="fas fa-hand-point-right"></i>
                            Cadastre Seu Quitute e Comece a Vender!</Link>
                    </div>
                </section>

                <hr />

                <section className={styles.section} style={{ marginTop: '40px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--cor-destaque-txt)', fontWeight: 700, fontSize: '24px' }}>Dicas de Sucesso para
                        Pequenos
                        Produtores</h3>
                    <div className={styles.negociacaoGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)' }}>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-seedling" style={{ color: 'var(--cor-alimentos-principal)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Destaque o Sabor Local</h4>
                            <p>Use fotos apetitosas e conte a história da sua produção. O cliente valoriza o que é feito com
                                carinho e perto dele.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-certificate" style={{ color: 'var(--cor-alimentos-acento)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Venda por Encomenda</h4>
                            <p>Minimize o desperdício vendendo por encomenda. O Balcão BRFrete facilita a gestão dos pedidos
                                para
                                o dia de produção.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-boxes" style={{ color: 'var(--cor-alimentos-suporte)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Embalagem Inteligente</h4>
                            <p>Dicas de como embalar para garantir que seu produto chegue fresco e intacto, usando materiais
                                sustentáveis e econômicos.</p>
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
                    <h4>Recursos do Produtor de Alimentos</h4>
                    <ul>
                        {/* Links internos */}
                        <li><Link href="/recursos/higiene">Guia de Boas Práticas de Higiene</Link></li>
                        <li><Link href="/recursos/embalagem">Embalagens Sustentáveis para Alimentos</Link></li>
                        <li><Link href="/recursos/rotulagem">Normas de Rotulagem e Vencimento</Link></li>
                        <li><Link href="/recursos/preco">Como Calcular o Preço de Venda Justo</Link></li>
                        <li><Link href="/recursos/microcredito">Opções de Microcrédito para Negócios</Link></li>
                        <li><Link href="/recursos/marketingsocial">Marketing no Bairro (Redes Sociais)</Link></li>
                        <li><Link href="/recursos/desperdicio">Dicas para Reduzir o Desperdício</Link></li>
                        <li><Link href="/recursos/feira">Como se Destacar em Feiras Gastronômicas</Link></li>
                    </ul>
                </div>
                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer >
        </>
    );
}