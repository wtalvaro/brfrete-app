// app/blockchain/page.jsx
import Link from 'next/link';
// 1. IMPORTAÇÃO DO CSS MODULE
import styles from './blockchain.module.css';

// 1. Definição da Metadata para SEO e Título
export const metadata = {
    title: 'BRFrete - Blockchain para Rastreio Seguro: Transparência e Imutabilidade',
    description: 'A tecnologia que garante transparência e imutabilidade em cada etapa da sua logística.',
};

// 2. Componente de Página Principal
export default function BlockchainPage() {
    return (
        // O elemento pai único (Fragmento)
        <>
            {/* O cabeçalho (<header>) - USANDO CLASSE LOCAL */}
            <header className={styles.bannerContainer}>
                {/* Box de Login - USANDO CLASSE LOCAL */}
                <div className={styles.loginBox}>
                    <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>
                <h1><i className="fas fa-network-wired"></i> Blockchain para Rastreio Seguro</h1>
                <p>A tecnologia que garante **transparência** e **imutabilidade** em cada etapa da sua logística.</p>

                {/* Formulário/CTA no Banner - USANDO CLASSE LOCAL */}
                <form className={styles.freteForm} action="/blockchain-api-cadastro" method="POST">
                    <input type="email" name="email_api" placeholder="Seu E-mail Corporativo" required />
                    <button type="submit"><i className="fas fa-code-branch"></i> Solicitar Acesso à API Blockchain</button>
                </form>
            </header>

            {/* A barra de navegação (<nav>) - USANDO CLASSE LOCAL `.navBar` */}
            <nav className={styles.navBar}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/inovacao">Inovação & Logística Global</Link>
                <Link href="/api">Documentação API</Link>
                <Link href="/casos-de-uso">Casos de Uso</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* Conteúdo Principal - USANDO CLASSE LOCAL `.main` */}
            <main className={styles.main}>
                <h2>A Nova Era de Confiança na Cadeia de Suprimentos BRFrete</h2>

                <section className={styles.section}>
                    <h3>Benefícios Imediatos do Rastreio em Cadeia</h3>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <i className="fas fa-eye"></i>
                            <h4>Transparência Total</h4>
                            <p>Todos os participantes da cadeia (embarcador, transportador, cliente) têm acesso à mesma e única
                                versão do histórico da carga. Sem intermediários.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link className={styles.cardBtn} href="/blockchain/transparencia">Ver Histórico</Link>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-lock"></i>
                            <h4>Dados Imutáveis</h4>
                            <p>Uma vez que o dado é registrado na Blockchain, ele não pode ser alterado ou falsificado. Zero
                                risco de fraude no status da entrega.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link className={styles.cardBtn} href="/blockchain/imutabilidade">Saiba Mais sobre
                                Segurança</Link>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-code-branch"></i>
                            <h4>Conectividade Simplificada</h4>
                            <p>Integre seus sistemas (ERP/WMS) via API e registre automaticamente cada etapa do transporte na
                                nossa rede Blockchain. Rastreio ponta-a-ponta.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link className={styles.cardBtn} href="/blockchain/integracao">Documentação API</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ backgroundColor: '#f7faff', padding: '40px 20px', borderRadius: '10px' }}>
                    <h3 style={{ borderBottomColor: 'var(--cor-blockchain-acento)', color: 'var(--cor-blockchain-principal)' }}>
                        O Fluxo BRFrete Blockchain em 2 Passos</h3>

                    {/* USANDO CLASSE LOCAL flexCards */}
                    <div className={styles.flexCards}>
                        <div className={styles.card}>
                            <i className="fas fa-truck-moving"></i>
                            <h4>1. Registro do Frete (Bloco Gênese)</h4>
                            <p>Ao solicitar o frete, as informações de origem, destino e peso são criptografadas e adicionadas ao
                                primeiro bloco da cadeia. Este registro é a prova de partida.</p>
                            {/* Conversão de botão com onclick para Link - USANDO MÚLTIPLAS CLASSES LOCAIS */}
                            <Link className={`${styles.cardBtn} ${styles.cardBtnCiano}`} href="/blockchain/registro">Ver
                                Regras de Inclusão</Link>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-cubes"></i>
                            <h4>2. Validação e Rastreio (Novos Blocos)</h4>
                            <p>Cada checkpoint (coleta, transporte, entrega) gera um novo bloco, validado por nós e parceiros. O
                                status é atualizado em tempo real e não pode ser desfeito.</p>
                            {/* Conversão de botão com onclick para Link - USANDO MÚLTIPLAS CLASSES LOCAIS */}
                            <Link className={`${styles.cardBtn} ${styles.cardBtnCiano}`} href="/blockchain/rastreio-detalhado">Ver
                                Mapa de Rastreio</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h3>Integrações Avançadas e Smart Contracts</h3>
                    <div className={styles.cards}>

                        <div className={styles.card}>
                            <i className="fas fa-file-contract"></i>
                            <h4>Smart Contracts para Pagamento</h4>
                            <p>O pagamento ao transportador é liberado automaticamente quando o status de "Entrega Concluída" é
                                validado e registrado de forma imutável na cadeia.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link className={styles.cardBtn} href="/blockchain/smart-contracts">Saber Mais</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-balance-scale"></i>
                            <h4>Auditoria e Compliance</h4>
                            <p>Geramos relatórios inquestionáveis para auditoria, seguro e prestação de contas. Total
                                conformidade
                                com regulamentações do setor e da LGPD.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link className={styles.cardBtn} href="/blockchain/compliance">Detalhes de
                                Auditoria</Link>
                        </div>

                        <div className={styles.card}>
                            <i className="fas fa-certificate"></i>
                            <h4>Certificação de Origem e Sustentabilidade</h4>
                            <p>Rastreie a origem de materiais (metais, moda) e certifique a jornada do produto, provando a
                                procedência sustentável para o consumidor final.</p>
                            {/* Conversão de botão com onclick para Link */}
                            <Link className={styles.cardBtn} href="/blockchain/certificacao-origem">Ver Casos
                                Sustentáveis</Link>
                        </div>
                    </div>
                </section>

                {/* Seção CTA de Rodapé - USANDO CLASSE LOCAL ctaButtons */}
                <div className={styles.ctaButtons}>
                    {/* Conversão de <a> para Link - USANDO CLASSE LOCAL */}
                    <Link href="/blockchain-api-cadastro" className={styles.ctaDestaque}>
                        <i className="fas fa-rocket"></i> Eleve a Segurança do Seu E-commerce com a Tecnologia Blockchain!
                    </Link>
                </div>
            </main>

            {/* Rodapé (Footers) - USANDO CLASSE LOCAL `.footer` */}
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

                {/* Rodapé Inferior - USANDO CLASSE LOCAL footerBottom */}
                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer >
        </>
    );
}