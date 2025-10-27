// app/agronegocio/page.jsx
import Link from 'next/link';
// 1. IMPORTAÇÃO DO CSS MODULE
import styles from './agronegocio.module.css';

// 1. Definição da Metadata para SEO e Título
export const metadata = {
    title: 'BRFrete - Agronegócio do Pequeno Produtor: Frete de Ração, Insumos e Pequena Safra',
    description: 'Logística que cabe no seu bolso: do saco de ração à pequena colheita. Mais valor para quem cultiva.',
};

// 2. Componente de Página Principal
export default function AgronegocioPage() {
    return (
        // O elemento pai único (Fragmento)
        <>
            {/* O cabeçalho (<header>) - Usa a classe do CSS Module */}
            <header className={styles.bannerContainer}>
                {/* Box de Login */}
                <div className={styles.loginBox}> {/* Aplicando a classe local */}
                    <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>

                <h1><i className="fas fa-sack-dollar"></i> BRFrete Rural: Frete Justo para o Pequeno Produtor</h1>
                <p>Logística que cabe no seu bolso: do saco de ração à pequena colheita. Mais valor para quem cultiva.</p>

                <form className={styles.freteForm} action="/cotacao" method="GET"> {/* Aplicando a classe local */}
                    <input type="text" name="origem" placeholder="Origem (Sua Fazenda, Cidade)" required />
                    <input type="text" name="destino" placeholder="Destino (Feira, Armazém, Cooperativa)" required />
                    <input type="number" name="peso" placeholder="Volume (sacas, kg ou ton)" required />
                    <button type="submit"><i className="fas fa-truck-moving"></i> Consultar Rota Rural</button>
                </form>
            </header>

            {/* A barra de navegação (<nav>) - USANDO A CLASSE LOCAL `.navBar` */}
            <nav className={styles.navBar}> {/* Aplicando a classe local */}
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/insumos">Insumos</Link>
                <Link href="/safra">Pequena Safra</Link>
                <Link href="/feira">Feira/Local</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal - USANDO A CLASSE LOCAL `.main` */}
            <main className={styles.main}> {/* Aplicando a classe local */}
                <h2>Escoamento da Produção e Abastecimento de Insumos para o Comerciante Local</h2>

                <section className={styles.section}> {/* Aplicando a classe local */}
                    <p
                        style={{ textAlign: 'center', fontSize: '17px', maxWidth: '800px', margin: '0 auto 40px auto', color: '#444', fontWeight: 400 }}>
                        Seu negócio rural merece uma logística acessível. Temos soluções para **pequenos volumes**, **caminhões
                        fracionados** e a **segurança** que você precisa para vender sua colheita.
                    </p>

                    <div className={styles.negociacaoGrid}> {/* Aplicando a classe local */}

                        <div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}> {/* Aplicando classes locais */}
                            <i className={`fas fa-hand-holding-usd ${styles.negociacaoIcon}`}></i>
                            <h3>MEU FRETE É PEQUENO (Carga Fracionada)</h3>
                            <p>Tem poucas sacas, caixas de hortifrúti ou produtos artesanais? Encontre caminhões que já estão na
                                rota e têm espaço para sua mercadoria.</p>
                            <Link href="/frete-fracionado-rural" className={`${styles.btnAcao} ${styles.btnCarga}`}><i className="fas fa-box-open"></i>
                                Publicar Carga Fracionada</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={styles.negociacaoIcon} style={{ color: 'var(--cor-agronegocio)' }}><i className="fas fa-people-carry-box"></i></i>
                            <h3>BUSCAR INSUMOS (Ração, Semente, Adubo)</h3>
                            <p>Diminua o custo do seu estoque. Encontre fretes de distribuidores ou negocie a retirada de
                                insumos essenciais em cidades próximas.</p>
                            <Link href="/buscar-insumos-rural" className={`${styles.btnAcao} ${styles.btnCompartilhado}`}><i
                                className="fas fa-truck-ramp-box"></i> Buscar Frete Compartilhado</Link>
                        </div>

                        <div className={styles.negociacaoCard} style={{ borderColor: 'var(--cor-secundaria)' }}>
                            <i className={styles.negociacaoIcon} style={{ color: 'var(--cor-secundaria)' }}><i className="fas fa-clock-rotate-left"></i></i>
                            <h3>FRETE DE ÚLTIMA HORA/EMERGÊNCIA</h3>
                            <p>Precisa de um veículo urgente para evitar perdas na colheita ou para uma entrega crucial?
                                Publique seu pedido e receba propostas imediatas.</p>
                            <Link href="/frete-emergencia-rural" className={`${styles.btnAcao} ${styles.btnLocal}`}><i className="fas fa-bolt"></i> Pedir Frete
                                Urgente</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={styles.negociacaoIcon} style={{ color: 'var(--cor-sustentavel)' }}><i className="fas fa-user-tag"></i></i>
                            <h3>VENDA DIRETA NA FEIRA/MERCADO</h3>
                            <p>Otimize o transporte para feiras e mercados locais. Combine fretes com outros produtores da sua
                                região para rachar o custo do caminhão.</p>
                            <Link href="/combinar-feiras" className={`${styles.btnAcao} ${styles.btnCarga}`}><i className="fas fa-city"></i> Ver Fretes para
                                Feiras</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ padding: '20px 0', backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                    <h3
                        style={{ textAlign: 'center', color: 'var(--cor-agronegocio)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '30px' }}>
                        Economia e Segurança no Transporte Rural</h3>

                    <div className={styles.freteFlexibility}> {/* Aplicando a classe local */}
                        <div className={styles.freteOption}> {/* Aplicando a classe local */}
                            <i className="fas fa-piggy-bank"></i>
                            <h4>Opção 1: Frete BRFrete (Pagamento Facilitado)</h4>
                            <p>Contrate nossa logística, pague com cartão ou boleto e parcele o frete. Nós cuidamos do
                                caminhoneiro e do rastreio. **Sem surpresas no preço final.**</p>
                            <button className={styles.btn}>Simular Parcelamento do Frete</button>
                        </div>
                        <div className={styles.freteOption}> {/* Aplicando a classe local */}
                            <i className="fas fa-users-viewfinder"></i>
                            <h4>Opção 2: Frete Combinado Comunitário</h4>
                            <p>Junte-se a outros produtores. Use a plataforma para encontrar vizinhos com destino comum e
                                dividir os custos do frete por **volume ocupado**. Economia de verdade!</p>
                            <button className={`${styles.btn} ${styles.btnCombinado}`}>Acessar Grupo de
                                Combinação</button>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link href="/cadastro" className={`${styles.btnAcao} ${styles.btnCarga}`} style={{ fontSize: '18px' }}><i className="fas fa-map-pin"></i>
                            Mapeie sua Produção e Comece a Economizar!</Link>
                    </div>
                </section>

                <section className={styles.section} style={{ marginTop: '40px', textAlign: 'center' }}> {/* Aplicando a classe local */}
                    <h3 style={{ color: 'var(--cor-destaque-txt)', fontWeight: 700, fontSize: '24px' }}>Ferramentas para o Seu
                        Crescimento Rural</h3>
                    <div className={styles.negociacaoGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)' }}>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-hand-holding-heart" style={{ color: 'var(--cor-agronegocio)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Comunidade Rural</h4>
                            <p>Troque dicas de cultivo, negocie insumos em grupo e encontre apoio com outros produtores BRFrete.
                            </p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-chart-line" style={{ color: 'var(--cor-sustentavel)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Cotação de Safra</h4>
                            <p>Acompanhe o preço atualizado de grãos, café e outros produtos para negociar seu frete na melhor
                                hora.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-file-contract" style={{ color: 'var(--cor-secundaria)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Nota Fiscal Simples</h4>
                            <p>Apoio na emissão de documentos fiscais obrigatórios para pequenas cargas. Menos burocracia!</p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Rodapé (Footers) - USANDO A CLASSE LOCAL `.footer` */}
            <footer className={styles.footer}> {/* Aplicando a classe local */}
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
                    <h4>Dicas de Cultivo & Sustentabilidade</h4>
                    <ul>
                        {/* Links internos */}
                        <li><Link href="/dicas#irrigacao">1. Otimização de Irrigação</Link></li>
                        <li><Link href="/dicas#solo">2. Saúde e Nutrição do Solo</Link></li>
                        <li><Link href="/dicas#agroecologia">3. Princípios de Agroecologia</Link></li>
                        <li><Link href="/dicas#combate">4. Combate Natural a Pragas</Link></li>
                        <li><Link href="/dicas#colheita">5. Melhores Práticas de Colheita</Link></li>
                        <li><Link href="/dicas#armazenamento">6. Técnicas de Armazenamento Seguro</Link></li>
                        <li><Link href="/dicas#organicos">7. Certificação de Produtos Orgânicos</Link></li>
                        <li><Link href="/dicas#credito">8. Acesso a Crédito Rural</Link></li>
                    </ul>
                </div>
                <div className={styles.footerBottom}> {/* Aplicando a classe local */}
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer >
        </>
    );
}