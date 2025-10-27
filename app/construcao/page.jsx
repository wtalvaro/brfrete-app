// app/construcao/page.jsx
import Link from 'next/link';
import { Metadata } from 'next';
// 1. IMPORTAÇÃO DO CSS MODULE
import styles from './construcao.module.css';

// 1. Definição da Metadata para SEO e Título (Permitido em Server Components)
export const metadata = {
    title: 'BRFrete - Balcão da Obra: Materiais de Construção, Entulho e Frete Fracionado',
    description: 'Logística sob medida para pequenos depósitos e reformas. Frete de materiais e remoção de entulho com preço justo.',
};

// 2. Componente de Página Principal
export default function ConstrucaoPage() {
    return (
        // O Fragmento React (<>) envolve todo o conteúdo
        <>
            {/* Container Principal do Banner */}
            <header className={styles.bannerContainer}>
                {/* Login Box */}
                <div className={styles.loginBox}>
                    <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>

                <h1><i className="fas fa-hard-hat"></i> BRFrete Construção: Sua Obra Anda Mais Rápido!</h1>
                <p>Logística sob medida para pequenos depósitos e reformas. Frete de materiais e remoção de entulho com preço
                    justo.</p>

                {/* Formulário de Frete (GET Request padrão - funciona bem em Server Component) */}
                <form className={styles.freteForm} action="/cotacao" method="GET">
                    <input type="text" name="origem" placeholder="Origem (Depósito/Loja)" required />
                    <input type="text" name="destino" placeholder="Destino (CEP da Obra)" required />
                    <input type="number" name="volume" placeholder="Volume (m³ ou Ton)" required />
                    <button type="submit"><i className="fas fa-dumpster"></i> Consultar Frete Obra</button>
                </form>
            </header>

            {/* Nav Bar */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/materiais">Materiais</Link>
                <Link href="/entulho-descarte">Entulho e Descarte</Link>
                <Link href="/logistica-pesada">Logística Pesada</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal (main) */}
            <main className={styles.mainContent}>
                <h2>A Logística Certa para o Seu Negócio de Construção Local e Pequenas Obras</h2>

                <section className={styles.section}>
                    <p
                        style={{ textAlign: 'center', fontSize: '17px', maxWidth: '800px', margin: '0 auto 40px auto', color: '#444', fontWeight: '400' }}>
                        Pequenos depósitos, pedreiros autônomos e reformadores encontram no BRFrete a solução para **comprar com
                        frete acessível** e **escoar materiais rapidamente**, garantindo o prazo da obra.
                    </p>

                    <div className={styles.negociacaoGrid}>

                        <div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}>
                            <i className={`fas fa-toolbox ${styles.negociacaoIcon}`}></i>
                            <h3>FRETE DE MATERIAIS (Cimento, Areia, Tijolo)</h3>
                            <p>Publique sua necessidade de frete para materiais. Motoristas de caçamba e furgões próximos te
                                fazem uma oferta pelo volume exato que você precisa.</p>
                            <Link href="/frete-materiais-obra" className={`${styles.btnAcao} ${styles.btnMateriais}`}><i className="fas fa-box"></i> Publicar
                                Necessidade de Frete</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={`fas fa-dumpster-fire ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-construcao)' }}></i>
                            <h3>REMOÇÃO E DESCARTE DE ENTULHO</h3>
                            <p>Encontre transportadores e caçambas para a retirada legal de entulho da sua obra. Opções rápidas
                                para manter o local de trabalho limpo e organizado.</p>
                            <Link href="/remocao-entulho" className={`${styles.btnAcao} ${styles.btnEntulho}`}><i className="fas fa-trash-alt"></i> Contratar
                                Remoção de Entulho</Link>
                        </div>

                        <div className={styles.negociacaoCard} style={{ borderColor: 'var(--cor-ferramenta)' }}>
                            <i className={`fas fa-truck-ramp-box ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-ferramenta)' }}></i>
                            <h3>COMPRA COM FRETE (Depósitos Locais)</h3>
                            <p>Compre materiais em pequenos depósitos e use o BRFrete para garantir a entrega. Otimize a rota e
                                o custo por distância curta ou volume de carrinho.</p>
                            <Link href="/compra-deposito-local" className={`${styles.btnAcao} ${styles.btnLocal}`}><i className="fas fa-truck-fast"></i> Buscar
                                Lojas com Frete BRFrete</Link>
                        </div>

                        <div className={styles.negociacaoCard}>
                            <i className={`fas fa-people-arrows-left-right ${styles.negociacaoIcon}`} style={{ color: 'var(--cor-seguranca)' }}></i>
                            <h3>COMPARTILHAMENTO DE FERRAMENTAS</h3>
                            <p>Plataforma para que construtores locais possam negociar e combinar o transporte de equipamentos e
                                ferramentas mais caras entre si.</p>
                            <Link href="/combinar-ferramentas" className={styles.btnAcao}
                                style={{ backgroundColor: 'var(--cor-ferramenta)', color: 'white' }}><i className="fas fa-handshake"></i>
                                Ver Opções de Compartilhamento</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ padding: '20px 0', backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                    <h3
                        style={{ textAlign: 'center', color: 'var(--cor-construcao)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '30px' }}>
                        Tipos de Logística para a Sua Obra</h3>

                    <div className={styles.freteFlexibility}>
                        <div className={styles.freteOption}>
                            <i className="fas fa-truck-loading"></i>
                            <h4>Opção 1: Frete Dedicado (Rapidez e Segurança)</h4>
                            <p>Contrate um veículo BRFrete dedicado, ideal para materiais sensíveis (vidros, louças) ou entregas
                                com prazo apertado. **Seguro contra quebras e avarias.**</p>
                            <button className={styles.btn}>Contratar Frete com Seguro</button>
                        </div>
                        <div className={styles.freteOption}>
                            <i className="fas fa-person-digging"></i>
                            <h4>Opção 2: Frete Fracionado (Economia Garantida)</h4>
                            <p>Para materiais pequenos (uma pá de areia, alguns sacos de cimento), utilize o frete fracionado.
                                Sua carga viaja junto com outras na mesma rota, **diminuindo o custo.**</p>
                            <button className={`${styles.btn} ${styles.btnCombinado}`}>Simular Carga
                                Fracionada</button>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link href="/cadastro" className={`${styles.btnAcao} ${styles.btnMateriais}`} style={{ fontSize: '18px' }}><i
                            className="fas fa-check-circle"></i>
                            Cadastre sua Obra e Facilite sua Logística!</Link>
                    </div>
                </section>

                <section className={styles.section} style={{ marginTop: '40px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--cor-destaque-txt)', fontWeight: '700', fontSize: '24px' }}>Conteúdo de Apoio para
                        Pequenos Empreiteiros</h3>
                    <div className={styles.negociacaoGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-money-check-dollar" style={{ color: 'var(--cor-ferramenta)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Gestão de Custos</h4>
                            <p>Planilhas e dicas para calcular o custo real do frete embutido no orçamento da obra.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-file-invoice" style={{ color: 'var(--cor-seguranca)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Descarte Legal</h4>
                            <p>Normas e parceiros credenciados para garantir o descarte correto do entulho da sua reforma.</p>
                        </div>
                        <div className={styles.negociacaoCard} style={{ border: '1px solid #ddd', padding: '20px' }}>
                            <i className="fas fa-people-group" style={{ color: 'var(--cor-secundaria)', fontSize: '30px' }}></i>
                            <h4 style={{ fontSize: '18px', marginTop: '10px' }}>Rede de Pedreiros</h4>
                            <p>Encontre profissionais da área na sua região para indicações e parcerias em grandes projetos.</p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Rodapé (Footer) */}
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
                    <h4>Logística da Construção</h4>
                    <ul>
                        <li><Link href="/logistica#tipos-veiculos">Tipos de Veículos para Obra</Link></li>
                        <li><Link href="/logistica#seguro-carga">Cobertura e Seguro de Carga Bruta</Link></li>
                        <li><Link href="/logistica#frete-fracionado-guia">Guia do Frete Fracionado</Link></li>
                        <li><Link href="/logistica#rotas-otimizadas">Otimização de Rotas Urbanas</Link></li>
                        <li><Link href="/logistica#entregas-programadas">Entregas e Coletas Programadas</Link></li>
                        <li><Link href="/logistica#cargas-perigosas">Transporte de Cargas Perigosas (Químicos)</Link></li>
                        <li><Link href="/logistica#parcerias-depositos">Programa de Parceria para Depósitos</Link></li>
                        <li><Link href="/logistica#manuseio-pesado">Manuseio e Içamento de Materiais</Link></li>
                    </ul>
                </div>
                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer>

        </>
    );
}