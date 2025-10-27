// app/drones/page.jsx
import Link from 'next/link';
// Importação do tipo Metadata (para TypeScript, mas boa prática)
// import { Metadata } from 'next'; 
import styles from './drones.module.css';

// 1. Definição da Metadata para SEO e Título (Permitido em Server Components)
export const metadata = {
    title: 'BRFrete - Entrega com Drones em Zonas Rurais: Precisão Corporativa',
    description: 'A logística de última milha que conecta sua empresa ao campo com velocidade e precisão GPS.',
};

// 2. Componente de Página Principal
export default function DronesPage() {
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

                <h1><i className="fas fa-satellite-dish"></i> Entrega com Drones em Zonas Rurais</h1>
                <p>A logística de **última milha** que conecta sua empresa ao campo com **velocidade** e **precisão GPS**.</p>

                {/* Formulário de Cotação de Drone (GET Request padrão) */}
                <form className={styles.freteForm} action="/drone-rurais-cotacao" method="GET">
                    <input type="text" name="coordenadas_rural" placeholder="Endereço ou Coordenadas de Entrega" required />
                    <input type="text" name="peso_carga" placeholder="Peso Máx. da Carga (kg)" required />
                    <button type="submit"><i className="fas fa-paper-plane"></i> Simular Entrega por Drone!</button>
                </form>
            </header>

            {/* Nav Bar */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/inovacao">Inovação & Logística Global</Link>
                <Link href="/cobertura">Mapa de Cobertura Rural</Link>
                <Link href="/api-drone">API de Rastreamento Aéreo</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal (main) */}
            <main className={styles.mainContent}>
                <h2>Alcançando o Inalcançável: Logística Aérea para o Agro e Comunidades Isoladas</h2>

                <section className={styles.section}>
                    <h3>Benefícios da Frota Aérea BRFrete</h3>
                    <div className={styles.cards}>

                        <div className={styles.card}>
                            <i className="fas fa-mountain"></i>
                            <h4>Acesso a Locais Remotos</h4>
                            <p>Contorne estradas ruins, rios e terrenos complexos. Entregamos medicamentos, peças e suprimentos
                                essenciais onde veículos terrestres não chegam.</p>
                            {/* Botão estático convertido para Link do Next.js */}
                            <Link href="/drone/cobertura" className={styles.cardBtn}>Ver Mapa de Rota</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-clock"></i>
                            <h4>Velocidade e Urgência</h4>
                            <p>O tempo é crítico no agronegócio e saúde. Nossos drones reduzem o tempo de entrega em horas,
                                garantindo agilidade em situações urgentes.</p>
                            {/* Botão estático convertido para Link do Next.js */}
                            <Link href="/drone/urgencia" className={styles.cardBtn}>Casos de Uso Rápido</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-crosshairs"></i>
                            <h4>Precisão GPS e Segurança</h4>
                            <p>Entrega de alta precisão baseada em coordenadas GPS. Aterrissagem segura em áreas predefinidas,
                                minimizando erros e riscos de extravio.</p>
                            {/* Botão estático convertido para Link do Next.js */}
                            <Link href="/drone/seguranca" className={styles.cardBtn}>Protocolos de Segurança</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ backgroundColor: '#f7faff', padding: '40px 20px', borderRadius: '10px' }}>
                    <h3 className={styles.sectionH3Acento}>
                        Do CD à Fazenda: A Rota Aérea Segura</h3>

                    <div className={styles.flexCards}>

                        <div className={styles.card}>
                            <i className="fas fa-box"></i>
                            <h4>1. Preparação e Lançamento da Carga</h4>
                            <p>Sua encomenda é acondicionada em caixas aerodinâmicas e o drone é programado com o destino exato.
                                O peso máximo de carga é de 5kg.</p>
                            {/* Botão de Destaque ACENTO convertido para Link do Next.js */}
                            <Link href="/drone/preparacao" className={`${styles.cardBtn} ${styles.cardBtnAcento}`}>Guia de
                                Cargas</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-chart-line"></i>
                            <h4>2. Voo Autônomo e Monitoramento</h4>
                            <p>O voo é realizado de forma autônoma e monitorado por nossa central de controle. O cliente recebe
                                rastreamento em tempo real via plataforma.</p>
                            {/* Botão de Destaque ACENTO convertido para Link do Next.js */}
                            <Link href="/drone/rastreamento" className={`${styles.cardBtn} ${styles.cardBtnAcento}`}>Rastreamento
                                em Tempo Real</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h3>Setores que Transformamos no Campo</h3>
                    <div className={styles.cards}>

                        <div className={styles.card}>
                            <i className="fas fa-seedling"></i>
                            <h4>Agronegócio (Peças e Insumos)</h4>
                            <p>Entrega rápida de peças de reposição para máquinas paradas e insumos agrícolas urgentes, evitando
                                prejuízos na produção por paralisação.</p>
                            <Link href="/drone/agro" className={styles.cardBtn}>Ver Casos de Sucesso</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-heartbeat"></i>
                            <h4>Saúde e Medicamentos</h4>
                            <p>Transporte prioritário de vacinas, soros e kits de primeiros socorros para comunidades isoladas e
                                acampamentos. Mantemos a cadeia de frio.</p>
                            <Link href="/drone/saude" className={styles.cardBtn}>Política de Manuseio</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-people-carry"></i>
                            <h4>Comércio e E-commerce Rural</h4>
                            <p>Permita que seu e-commerce alcance clientes em fazendas e pequenas vilas rurais. Expansão de
                                mercado com baixo custo de última milha.</p>
                            <Link href="/drone/ecommerce-rural" className={styles.cardBtn}>Falar com Vendas</Link>
                        </div>
                    </div>
                </section>

                <div className={styles.ctaButtons}>
                    {/* CTA Destacado convertido para Link do Next.js */}
                    <Link href="/drone-rurais-cotacao" className={styles.ctaDestaque}>
                        <i className="fas fa-map-marked"></i> Leve Seus Produtos Onde Ninguém Mais Chega!
                    </Link>
                </div>
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
                    <h4>Inovação & Logística Global</h4>
                    <ul>
                        <li><Link href="/blockchain">Blockchain para Rastreio Seguro</Link></li>
                        <li><Link href="/drones">Entrega com Drones em Zonas Rurais</Link></li>
                        <li><Link href="/micromobilidade">Micromobilidade Urbana (Bikes/Patinetes)</Link></li>
                        <li><Link href="/logistica-40">Consultoria Logística 4.0</Link></li>
                        <li><Link href="/armazenamento-virtual">Armazenagem Virtual e Cross-Docking</Link></li>
                        <li><Link href="/last-mile-ia">Last Mile Otimizado por Machine Learning</Link></li>
                        <li><Link href="/frete-internacional">Frete Internacional Facilitado</Link></li>
                        <li><Link href="/energia-limpa">Frota e-Logistics (Energia Limpa)</Link></li>
                    </ul>
                </div>

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer>

        </>
    );
}