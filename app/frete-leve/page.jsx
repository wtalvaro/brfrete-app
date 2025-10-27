// app/frete-leve/page.jsx

import Link from 'next/link';
import styles from './frete-leve.module.css'; // Importa o CSS Module

// 1. Configuração de Metadata (SEO)
export const metadata = {
    title: 'BRFrete - Frete Leve: O Balcão de Logística do Varejista',
    description: 'Soluções rápidas e econômicas para o pequeno e médio varejo: envios leves, rastreio simplificado e logística ponto-a-ponto.',
};

export default function FreteLeve() {

    return (
        <>
            <header className={styles.bannerLeve}>
                {/* CORRIGIDO: Classe .loginBox em camelCase */}
                <div className={styles.loginBox}>
                    <Link href="/login">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </Link>
                    <Link href="/cadastro">
                        <i className="fas fa-user-plus"></i> Cadastro
                    </Link>
                </div>

                <h1>
                    <i className="fas fa-truck-moving"></i> Frete Leve: O Balcão de Logística do Varejista
                </h1>
                <p>Soluções rápidas e econômicas para o pequeno e médio varejo: envios leves, rastreio simplificado e logística ponto-a-ponto.</p>

                {/* Formulário CTA - Classe .freteForm em camelCase */}
                <form className={styles.freteForm} action="/cotacao-leve" method="POST">
                    <input type="text" name="cep_origem" placeholder="CEP de Origem" required />
                    <input type="text" name="cep_destino" placeholder="CEP de Destino" required />
                    <input type="text" name="peso_gramas" placeholder="Peso (em gramas)" required />
                    <button type="submit">
                        <i className="fas fa-bolt"></i> Cotação Super Rápida!
                    </button>
                </form>
            </header>

            {/* Navegação - Classe .navLeve em camelCase */}
            <nav className={styles.navLeve}>
                <Link href="/home">Home</Link>
                <Link href="/cotacao-simples">Cotação Simples</Link>
                <Link href="/integracoes">Integrações E-commerce</Link>
                <Link href="/pontos-coleta">Pontos de Coleta Próximos</Link>
                <Link href="/comunidade-varejo">Comunidade Varejista</Link>
                <Link href="/suporte-mei">Suporte MEI</Link>
            </nav>

            {/* Conteúdo Principal - Classe .mainContent em camelCase */}
            <main className={styles.mainContent}>
                <h2>Agilidade e Economia Feitas para o Seu Negócio</h2>

                {/* Seção 1: Benefícios Chave do Frete Leve */}
                <section className={styles.section}>
                    <h3>Foco na Velocidade e Redução de Custos</h3>
                    {/* Classe .cardsGrid em camelCase */}
                    <div className={styles.cardsGrid}>

                        {/* Card 1 - Classe .cardLeve em camelCase */}
                        <div className={styles.cardLeve}>
                            <i className="fas fa-box-open"></i>
                            <h4>Envios até 5kg: Tarifas Especiais</h4>
                            <p>Acordos exclusivos que garantem os melhores preços para pacotes pequenos e leves, otimizando sua margem de lucro.</p>
                            {/* Classe .cardLeveBtn em camelCase */}
                            <Link href="/tarifas-leves" className={styles.cardLeveBtn}>Ver Tabela de Preços</Link>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.cardLeve}>
                            <i className="fas fa-map-marker-alt"></i>
                            <h4>Rastreio Ponto-a-Ponto Simplificado</h4>
                            <p>Seus clientes acompanham cada etapa em uma interface limpa e intuitiva, sem complicações ou links quebrados.</p>
                            <Link href="/rastreio-leve" className={styles.cardLeveBtn}>Demonstração</Link>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.cardLeve}>
                            <i className="fas fa-truck-loading"></i>
                            <h4>Logística de Última Milha Otimizada</h4>
                            <p>Nossa rede prioriza entregas expressas em áreas urbanas, garantindo o menor tempo do clique à porta do cliente.</p>
                            <Link href="/logistica-urbana" className={styles.cardLeveBtn}>Conhecer a Rede</Link>
                        </div>

                        {/* Card 4 - Destaque Comunidade - Classes .cardLeve e .cardComunidade em camelCase */}
                        <div className={`${styles.cardLeve} ${styles.cardComunidade}`}>
                            <i className="fas fa-handshake"></i>
                            <h4>Comunidade Varejista BRFrete</h4>
                            <p>Faça parte da nossa rede exclusiva: troque dicas, obtenha suporte de outros empreendedores e acesse webinars de logística.</p>
                            <Link href="/comunidade" className={styles.cardLeveBtn}>Entrar na Comunidade</Link>
                        </div>

                    </div>
                </section>

                {/* Seção 2: Recursos para o Seu E-commerce */}
                <section className={styles.section}>
                    <h3>Recursos Essenciais para o E-commerce</h3>

                    <div className={styles.cardsGrid}>
                        {/* Card 5 */}
                        <div className={styles.cardLeve}>
                            <i className="fas fa-code-branch"></i>
                            <h4>Integração Fácil com Marketplaces (APIs)</h4>
                            <p>Conecte sua loja virtual (WooCommerce, Shopify, Nuvemshop) em minutos e automatize a emissão de etiquetas.</p>
                            <Link href="/integracoes" className={styles.cardLeveBtn}>Ver Tutoriais</Link>
                        </div>

                        {/* Card 6 */}
                        <div className={styles.cardLeve}>
                            <i className="fas fa-calculator"></i>
                            <h4>Calculadora de Frete em Tempo Real</h4>
                            <p>Ferramenta que integra o cálculo de frete diretamente ao carrinho do seu cliente, mostrando o valor exato no checkout.</p>
                            <Link href="/calculadora" className={styles.cardLeveBtn}>Acessar Ferramenta</Link>
                        </div>

                        {/* Card 7 */}
                        <div className={styles.cardLeve}>
                            <i className="fas fa-file-invoice"></i>
                            <h4>Emissão Simplificada de Notas e Etiquetas</h4>
                            <p>Elimine a burocracia. Crie notas fiscais e etiquetas de envio de forma rápida, tudo dentro da nossa plataforma.</p>
                            <Link href="/emissao" className={styles.cardLeveBtn}>Começar a Emitir</Link>
                        </div>

                        {/* Card 8 - Destaque Comunidade */}
                        <div className={`${styles.cardLeve} ${styles.cardComunidade}`}>
                            <i className="fas fa-leaf"></i>
                            <h4>Dicas de Embalagem Sustentável</h4>
                            <p>Reduza o impacto ambiental e os custos. Materiais recicláveis, volumetria otimizada e certificações verdes.</p>
                            <Link href="/sustentabilidade" className={styles.cardLeveBtn}>Ver Guia</Link>
                        </div>
                    </div>
                </section>

                {/* Seção CTA de Rodapé - CORRIGIDO: Classe .ctaButtons e .ctaDestaque em camelCase */}
                <div className={styles.ctaButtons}>
                    <Link href="/cotacao-leve" className={styles.ctaDestaque}>
                        <i className="fas fa-paper-plane"></i> Comece a Enviar Leve Hoje!
                    </Link>
                </div>
            </main>

            {/* Rodapé - Classe .footerArea e .footerBottom em camelCase */}
            <footer className={styles.footerArea}>
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
                        <li><Link href="#"><i className="fab fa-facebook"></i> Facebook</Link></li>
                        <li><Link href="#"><i className="fab fa-instagram"></i> Instagram</Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin"></i> LinkedIn</Link></li>
                        <li><Link href="#"><i className="fab fa-youtube"></i> YouTube</Link></li>
                        <li><Link href="#"><i className="fab fa-twitter"></i> Twitter</Link></li>
                        <li><Link href="#">Pinterest</Link></li>
                        <li><Link href="#">TikTok</Link></li>
                        <li><Link href="#">WhatsApp</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Recursos para Varejistas</h4>
                    <ul>
                        <li><Link href="/calculadora-dimensoes">Calculadora de Dimensões</Link></li>
                        <li><Link href="/tutorial-etiquetas">Tutorial de Impressão de Etiquetas</Link></li>
                        <li><Link href="/integracoes-ecommerce">Integrações E-commerce (8+)</Link></li>
                        <li><Link href="/envio-pacotes-mei">Envio de Pacotes para MEI</Link></li>
                        <li><Link href="/embalagem-sustentavel">Embalagem Sustentável e Econômica</Link></li>
                        <li><Link href="/pontos-coleta-proximos">Encontre Pontos de Coleta Próximos</Link></li>
                        <li><Link href="/otimizacao-prazos">Como Otimizar Prazos de Entrega</Link></li>
                        <li><Link href="/comparativo-fretes">Comparativo de Fretes Nacionais</Link></li>
                    </ul>
                </div>

                <div className={styles.footerBottom}>
                    &copy; 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
}