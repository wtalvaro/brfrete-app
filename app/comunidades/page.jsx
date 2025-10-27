// app/comunidades/page.jsx
import Link from 'next/link';
import { Metadata } from 'next';
// 1. IMPORTAÇÃO DO CSS MODULE
import styles from './comunidades.module.css';

// 1. Definição da Metadata para SEO e Título (Permitido em Server Components)
export const metadata = {
    title: 'BRFrete - Frete para Comunidades: Apoio Social e Logística 100% Local',
    description: 'Logística 100% local, focada em apoio social, rateio de frete e entregas a pé/bike para pequenos lojistas e microempreendedores.',
};

// 2. Componente de Página Principal
export default function ComunidadesPage() {
    return (
        // 3. O Fragmento React (<>) envolve todo o conteúdo
        <>
            {/* Container Principal do Banner */}
            <header className={styles.bannerContainer}>
                {/* Login Box */}
                <div className={styles.loginBox}>
                    <Link href="/login-comunidade"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro-entregador"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>

                <h1><i className="fas fa-hand-holding-heart"></i> Frete para Comunidades: Entrega Local, Preço Justo</h1>
                <p>Logística 100% no seu bairro: apoiando o **pequeno lojista**, microempreendedor e a **entrega residencial**
                    simples.</p>

                {/* Formulário de Frete (GET Request padrão - funciona bem em Server Component) */}
                <form className={styles.freteForm} action="/cotacao-comunidade" method="GET">
                    <input type="text" name="origem" placeholder="Loja/Ponto de Coleta (Seu Bairro)" required />
                    <input type="text" name="destino" placeholder="Rua/Casa do Cliente (No Mesmo Bairro)" required />
                    <input type="text" name="tipo_carga" placeholder="Ex: Gás, Marmita, Remédio, Produto de Limpeza" required />
                    <button type="submit" className={styles.btnSolicitarRural}><i className="fas fa-bicycle"></i>
                        Cotar Entrega no Bairro</button>
                </form>
            </header>

            {/* Nav Bar */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/cotacao-fretes-local">Cotação de Fretes</Link>
                <Link href="/comunidade-mapa">Mapa de Lojas Parceiras</Link>
                <Link href="/rateio-servicos">Rateio de Serviços (Mutirão)</Link>
                <Link href="/trabalhe-conosco-local">Seja um Entregador Local (A Pé/Bike)</Link>
                <Link href="/ajuda-social">Central de Apoio</Link>
                <Link href="/contato-comunidade">Contato</Link>
            </nav>

            {/* Conteúdo Principal (main) */}
            <main className={styles.mainContent}>
                <h2>Logística Acessível: A Solução de Entrega Feita Por e Para a Comunidade.</h2>

                <section className={styles.section}>
                    <p
                        style={{ textAlign: 'center', fontSize: '17px', maxWidth: '800px', margin: '0 auto 40px auto', color: '#444', fontWeight: '400' }}>
                        Nosso foco é a mobilidade de **pequenos volumes** e entregas urgentes dentro da sua região. Oferecemos
                        fretes com rateio de custos e o serviço de **Entrega a Pé**, ideal para itens leves e curtas distâncias,
                        reduzindo drasticamente o preço final para o morador e lojista.
                    </p>

                    <div className={styles.negociacaoGrid}>

                        <div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}>
                            <i className={`fas fa-shopping-bag ${styles.negociacaoIcon}`}></i>
                            <h3>ENTREGAS DE LOJISTAS LOCAIS (Microentregas)</h3>
                            <p>Entrega de **itens de mercado, remédios e bebidas** para seus clientes residenciais. Rapidez e
                                confiança na porta de casa, feita por vizinhos.</p>
                            <Link href="/pedir-delivery" className={`${styles.btnAcao} ${styles.btnSolicitarRural}`}><i className="fas fa-store-alt"></i>
                                Entrega Rápida do Comércio</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={`fas fa-people-carry-box ${styles.negociacaoIcon}`}></i>
                            <h3>RATEIO DE FRETE (Serviços Compartilhados)</h3>
                            <p>Junte-se a vizinhos e divida o custo de um frete de pequeno caminhão para a compra de água, gás,
                                areia ou cimento. Economia e **mutirão** logístico.</p>
                            <Link href="/rateio-simulacao" className={`${styles.btnAcao} ${styles.btnRastrear}`}><i className="fas fa-handshake"></i>
                                Simular Rateio de Custo</Link>
                        </div>

                        <div className={styles.negociacaoCard} style={{ borderColor: 'var(--cor-urgencia-rural)' }}>
                            <i className={`fas fa-walking ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-urgencia-rural)' }}></i>
                            <h3>SERVIÇO DE MENSAGEIRO E ENTREGAS LEVES</h3>
                            <p>Entregas de **documentos, chaves ou alimentos** que podem ser feitas a pé ou de bicicleta.
                                Solução
                                mais rápida, segura e **super econômica** para a vizinhança.</p>
                            <Link href="/entregador-a-pe" className={`${styles.btnAcao} ${styles.btnUrgenciaRural}`}><i className="fas fa-running"></i>
                                Chamar Mensageiro Local</Link>
                        </div>

                        <div className={styles.negociacaoCard} style={{ borderColor: 'var(--cor-secundaria)' }}>
                            <i className={`fas fa-shield-alt ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-secundaria)' }}></i>
                            <h3>PONTO DE COLETA CONFIÁVEL NA COMUNIDADE</h3>
                            <p>Use locais de confiança (padarias, bazares) como ponto seguro para deixar ou buscar encomendas
                                maiores, minimizando a necessidade de expor endereços residenciais.</p>
                            <Link href="/ver-pontos-seguros" className={`${styles.btnAcao} ${styles.btnPrincipalRural}`}><i className="fas fa-home"></i>
                                Ver Pontos de Apoio</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ padding: '20px 0', backgroundColor: '#f7fffb', borderRadius: '10px' }}>
                    <h3 className={styles.tituloFlex} style={{ textAlign: 'center' }}>
                        Por que o Frete Local é a Melhor Solução para Você?</h3>

                    <div className={styles.servicosFlex}>
                        <div className={styles.servicoCard}>
                            <i className="fas fa-money-bill-wave"></i>
                            <h4>Custos Mínimos Garantidos</h4>
                            <p>Com a proximidade e o frete a pé/bike, eliminamos custos de combustível e longas distâncias,
                                passando a economia diretamente para o lojista e o morador.</p>
                            <Link href="/tabela-de-precos" className={`${styles.btn} ${styles.btnFlex} ${styles.btnSolicitarRural}`}>Ver Tabela de Preços</Link>
                        </div>
                        <div className={styles.servicoCard}>
                            <i className="fas fa-clock"></i>
                            <h4>Entrega em Minutos (Não em Horas)</h4>
                            <p>Seu entregador está, literalmente, na próxima rua. As entregas são finalizadas em minutos, sendo
                                ideais para quem precisa de algo imediatamente ou para alimentos quentes.</p>
                            <Link href="/tempo-de-entrega" className={`${styles.btn} ${styles.btnFlex} ${styles.btnPrincipalRural}`}>Ver Regiões de Atendimento</Link>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link href="/cadastro-comerciante-local" className={`${styles.btnAcao} ${styles.btnUrgenciaRural}`} style={{ fontSize: '18px' }}><i
                            className="fas fa-store-alt"></i>
                            Cadastre Seu Comércio e Comece a Vender!</Link>
                    </div>
                </section>

                <section className={styles.section} style={{ marginTop: '40px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--cor-destaque-txt)', fontWeight: '700', fontSize: '24px' }}>Compromisso BRFrete
                        Comunidade: Transparência e Apoio Local</h3>

                    <div className={styles.negociacaoGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-star" style={{ color: 'var(--cor-foco-rural)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Entregadores da Vizinhança</h4>
                            <p>Gerando **renda extra** para moradores locais que utilizam métodos de entrega simples (a pé,
                                bike,
                                moto), mantendo o dinheiro circulando na comunidade.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-lock" style={{ color: 'var(--cor-urgencia-rural)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Rotas Conhecidas e Seguras</h4>
                            <p>Os entregadores conhecem cada rua e atalho, garantindo a chegada rápida e segura das mercadorias,
                                sem depender de GPS complexo.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-hand-holding-usd" style={{ color: 'var(--cor-principal)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Sem Taxas Abusivas</h4>
                            <p>Nossas taxas são transparentes e focadas no social, garantindo que o lojista não perca a margem
                                de lucro e o cliente pague pouco.</p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Rodapé (Footer) */}
            <footer className={styles.footer}>
                <div>
                    <h4>BRFrete</h4>
                    <ul>
                        <li><Link href="/sobre-comunidade">Sobre a Iniciativa</Link></li>
                        <li><Link href="/carreiras-local">Trabalhe Conosco (Local)</Link></li>
                        <li><Link href="/blog-comunitario">Notícias e Eventos do Bairro</Link></li>
                        <li><Link href="/parceiros-comercio">Lojas Parceiras</Link></li>
                        <li><Link href="/sustentabilidade-local">Sustentabilidade Local</Link></li>
                        <li><Link href="/investidores-social">Apoio e Patrocínio Social</Link></li>
                        <li><Link href="/imprensa-local">Mídia e Notícias</Link></li>
                        <li><Link href="/novidades-comunidade">Novidades no Serviço</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Suporte</h4>
                    <ul>
                        <li><Link href="/faq-comunidade">Perguntas Frequentes</Link></li>
                        <li><Link href="/contato-emergencia">Contato (Emergência)</Link></li>
                        <li><Link href="/ajuda-entregador">Central de Ajuda (Entregador)</Link></li>
                        <li><Link href="/rastreamento-local">Rastreamento Simples</Link></li>
                        <li><Link href="/seguranca-local">Segurança de Entregas</Link></li>
                        <li><Link href="/cancelamento-local">Política de Cancelamento</Link></li>
                        <li><Link href="/pagamentos-local">Formas de Pagamento</Link></li>
                        <li><Link href="/avaliacoes-local">Avaliações de Clientes</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Legal</h4>
                    <ul>
                        <li><Link href="/privacidade">Política de Privacidade</Link></li>
                        <li><Link href="/termos-comunidade">Termos de Uso Local</Link></li>
                        <li><Link href="/cookies">Política de Cookies</Link></li>
                        <li><Link href="/licencas-local">Licenças e Acordos</Link></li>
                        <li><Link href="/compliance">Compliance e Ética</Link></li>
                        <li><Link href="/lgpd">LGPD e Proteção de Dados</Link></li>
                        <li><Link href="/responsabilidade-social">Responsabilidade Social</Link></li>
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
                    <h4>Recursos para o Bairro</h4>
                    <ul>
                        <li><Link href="/cursos#online">Cursos e Capacitação (Local)</Link></li>
                        <li><Link href="/eventos#comunidade">Calendário de Eventos</Link></li>
                        <li><Link href="/saude#local">Telefones Úteis (Saúde/Seg.)</Link></li>
                        <li><Link href="/credito#micro">Microcrédito para Comerciantes</Link></li>
                        <li><Link href="/assistencia-social">Assistência Social</Link></li>
                        <li><Link href="/cooperativas-comercio">Cooperativas de Comerciantes</Link></li>
                        <li><Link href="/dicas-vendas">Dicas de Vendas e Marketing</Link></li>
                        <li><Link href="/receitas-baixa-renda">Receitas e Aproveitamento</Link></li>
                    </ul>
                </div>
                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete Comunidade. Todos os direitos reservados. Logística 100% Local.
                </div>
            </footer>

        </>
    );
}