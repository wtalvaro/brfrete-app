// app/moda/page.jsx
import Link from 'next/link';
// 1. IMPORTAÇÃO DO CSS MODULE
import styles from './moda.module.css';

// 1. Definição da Metadata para SEO e Título (Sem tipagem TS, usando sintaxe JSX/JS)
export const metadata = {
    title: 'BRFrete - Balcão do Pequeno Vendedor: Moda, Renda e Comunidade', // Título do HTML
    description: 'Conectamos o seu estoque único com compradores em todo o Brasil. Comece a lucrar hoje!', // Descrição baseada no banner do HTML
};

// 2. Componente de Página Principal
export default function ModaPage() {
    return (
        // O elemento pai único (Fragmento)
        <>
            {/* 3. Aplica a classe raiz para carregar estilos globais se necessário, mas aqui usamos o banner-container diretamente */}

            {/* O cabeçalho (<header>) - Usa a classe do CSS Module */}
            <header className={styles.bannerContainer}> {/* Classe banner-container do HTML */}
                {/* Box de Login (Mantido, mas usando className) */}
                <div className={styles.loginBox}> {/* Classe login-box do HTML */}
                    <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>

                <h1><i className="fas fa-store"></i> Balcão BRFrete: Sua Loja, Sua Renda</h1>
                <p>Conectamos o seu estoque único com compradores em todo o Brasil. Comece a lucrar hoje!</p>

                <form className={styles.freteForm} action="/cotacao" method="GET"> {/* Classe frete-form do HTML */}
                    <input type="text" name="origem" placeholder="Origem (CEP, Cidade)" required />
                    <input type="text" name="destino" placeholder="Destino (CEP, Cidade)" required />
                    <input type="number" name="peso" placeholder="Peso (kg)" required />
                    <button type="submit"><i className="fas fa-truck-loading"></i> Consultar Frete</button>
                </form>
            </header>

            {/* A barra de navegação (<nav>) */}
            <nav>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/moda">Moda Sustentável</Link>
                <Link href="/vender-pecas">Vender Peças</Link>
                <Link href="/comprar-lotes">Comprar Lotes</Link>
                <Link href="/comunidade">Comunidade</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal */}
            <main className={styles.main}>
                <h2>Transforme Suas Peças Únicas em Renda Extra e Impacto Social</h2>

                <section className={styles.section}>
                    <p
                        style={{ textAlign: 'center', fontSize: '17px', maxWidth: '800px', margin: '0 auto 40px auto', color: '#444', fontWeight: 400 }}>
                        {/* Texto original com aspas ajustadas */}
                        Seja você um **brechó de garagem**, um artesão de **upcycling** ou um lojista com estoque diferenciado.
                        O Balcão BRFrete é a vitrine que o seu negócio precisa, com a logística que você confia.
                    </p>

                    <div className={styles.negociacaoGrid}>

                        <div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}>
                            <i className={`fas fa-money-bill-wave ${styles.negociacaoIcon}`}></i>
                            <h3>QUERO VENDER MINHAS PEÇAS (Renda)</h3>
                            <p>Anuncie suas peças, lotes de reuso ou coleções de brechó diretamente. Defina seu preço ou aceite
                                a melhor oferta de compradores interessados.</p>
                            <Link href="/vender-moda" className={`${styles.btnAcao} ${styles.btnVender}`}><i className="fas fa-hand-holding-usd"></i> Publicar
                                para Lucrar</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={`${styles.negociacaoIcon} fas fa-people-carry`}></i>
                            <h3>QUERO ENCONTRAR MEU PRÓXIMO ESTOQUE</h3>
                            <p>Publique uma **Oferta de Compra** por um tipo de item (ex: camisas dos anos 90, couro de
                                descarte). Fornecedores te procuram.</p>
                            <Link href="/comprar-moda" className={`${styles.btnAcao} ${styles.btnComprar}`}><i className="fas fa-box-open"></i> Criar Pedido de
                                Compra</Link>
                        </div>

                        <div className={styles.negociacaoCard} style={{ borderColor: 'var(--cor-negociacao)' }}>
                            <i className={`${styles.negociacaoIcon} fas fa-handshake`} style={{ color: 'var(--cor-negociacao)' }}></i>
                            <h3>NEGOCIE O FRETE POR LOTE OU DISTÂNCIA</h3>
                            <p>Para grandes volumes ou rotas especiais, peça a um parceiro BRFrete para fazer uma oferta de
                                frete personalizada. Mais economia e flexibilidade.</p>
                            <Link href="/negociar-frete" className={`${styles.btnAcao} ${styles.btnNegociar}`}><i className="fas fa-comments-dollar"></i>
                                Negociar Frete Agora</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={`${styles.negociacaoIcon} fas fa-map-marked-alt`}></i>
                            <h3>ENTREGA DIRETA/LOCAL</h3>
                            <p>Combine a coleta ou entrega em mãos com o comprador/vendedor local. Ideal para brechós e ateliês
                                com circulação próxima.</p>
                            <Link href="/local-combinado" className={`${styles.btnAcao} ${styles.btnComprar}`}><i className="fas fa-search-location"></i> Ver Opções
                                Locais</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ padding: '20px 0', backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                    <h3
                        style={{ textAlign: 'center', color: 'var(--cor-suporte)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '30px' }}>
                        Como Você Quer Mover Seus Produtos?</h3>

                    <div className={styles.freteFlexibility}>
                        <div className={styles.freteOption}>
                            <i className="fas fa-truck-loading"></i>
                            <h4>Opção 1: Frete BRFrete (Recomendado)</h4>
                            <p>Contrate nossa logística integrada. Nós calculamos o custo de coleta/transporte e descontamos do
                                valor final da negociação. **Mais segurança e rastreio para ambos os lados.**</p>
                            <button className={styles.btn}>Calcular Frete Integrado</button>
                        </div>
                        <div className={styles.freteOption}>
                            <i className="fas fa-user-friends"></i>
                            <h4>Opção 2: Frete Combinado com o Parceiro</h4>
                            <p>O comprador ou vendedor pode optar por cuidar da própria coleta/transporte (logística reversa). A
                                plataforma facilita o contato, mas a responsabilidade do frete é das partes.</p>
                            <button className={`${styles.btn} ${styles.btnCombinado}`}>Ver Termos de
                                Combinação</button>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link href="/cadastro" className={`${styles.btnAcao} ${styles.btnVender}`} style={{ fontSize: '18px' }}><i className="fas fa-medal"></i>
                            Crie sua Conta e Venda Agora!</Link>
                    </div>
                </section>

                <section className={styles.section} style={{ marginTop: '40px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--cor-destaque-txt)', fontWeight: 700, fontSize: '24px' }}>Conteúdo de Apoio para
                        Vendedores</h3>
                    <div className={styles.negociacaoGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-camera" style={{ color: 'var(--cor-suporte)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Dicas de Fotografia</h4>
                            <p>Aprenda a tirar fotos que vendem: luz natural, fundo limpo e destaque para os detalhes.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-palette" style={{ color: 'var(--cor-acento)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Como Montar Looks</h4>
                            <p>Inspiração para criar combinações e mostrar a versatilidade das suas peças para o cliente.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-handshake" style={{ color: 'var(--cor-secundaria)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Negociação Vencedora</h4>
                            <p>Melhores práticas para fechar negócios justos e rápidos no balcão de ofertas.</p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Rodapé (Footers) */}
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
                    <h4>Apoio ao Vendedor</h4>
                    <ul>
                        <li><Link href="/vender#precificacao">Guia de Precificação</Link></li>
                        <li><Link href="/vender#fotos">Melhores Práticas de Fotos</Link></li>
                        <li><Link href="/vender#embalagem">Dicas de Embalagem Sustentável</Link></li>
                        <li><Link href="/vender#lotes">Montagem de Lotes e Kits</Link></li>
                        <li><Link href="/comunidade#eventos">Eventos e Feiras Locais</Link></li>
                        <li><Link href="/legal#mei">Formalização (MEI)</Link></li>
                        <li><Link href="/rastreamento#devolucao">Gestão de Devoluções</Link></li>
                        <li><Link href="/ajuda#atendimento">Suporte Rápido ao Vendedor</Link></li>
                    </ul>
                </div>
                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer >
        </>
    );
}