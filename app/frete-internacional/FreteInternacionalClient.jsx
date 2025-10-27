"use client"; // ESSENCIAL: Permite usar useState e outros hooks.

import React, { useState } from 'react';
import Link from 'next/link';
// Importa o CSS Module
import styles from './frete-internacional.module.css';

/**
 * Componente do Cliente (Client Component) para a página de Frete Internacional.
 * Contém toda a interatividade e o corpo da página.
 */
const FreteInternacionalClient = () => {

    // 1. Estados para gerenciar o formulário de cotação simplificado (interatividade)
    const [cotacaoData, setCotacaoData] = useState({
        nome: '',
        email: '',
        paisDestino: 'EUA' // Valor inicial
    });

    // 2. Handler para mudanças no formulário
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setCotacaoData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // 3. Handler para envio do formulário (simulado para demonstrar o uso do Client Component)
    const handleCotacaoSubmit = (e) => {
        e.preventDefault();
        
        // Simulação de validação/envio
        if (cotacaoData.nome && cotacaoData.email && cotacaoData.paisDestino) {
            alert(`✅ Sucesso! Cotação solicitada para ${cotacaoData.paisDestino} por ${cotacaoData.nome}. Um especialista entrará em contato via ${cotacaoData.email} em até 24h.`);
            // Aqui você integraria com uma API de cotação real.
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        // CLASSE RAIZ: Contém o reset de margin/font-family e aplica o background-color
        <div className={styles.internacionalRoot}>

            {/* O cabeçalho (<header>) */}
            {/* CLASSE DO BANNER: Responsável pelo fundo e alinhamento do conteúdo principal do topo */}
            <header className={styles.bannerContainer}>
                {/* Box de Login */}
                <div className={styles.loginBox}>
                    <Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"><i className="fas fa-user-plus"></i> Cadastro</Link>
                </div>

                <h1><i className="fas fa-globe-americas"></i> BRFrete Global: Seu Frete Internacional Facilitado</h1>
                <p>Simplifique suas remessas globais com **Cotações Inteligentes**, **Rastreamento 24h** e **Suporte completo** para documentação internacional.</p>

                {/* Formulário Interativo */}
                {/* CLASSE DO CONTAINER DE COTAÇÃO: Define a caixa centralizada com fundo de suporte */}
                <div className={styles.cotacaoContainer}>
                    <h2 className={styles.titleCotacao}>Solicite uma Cotação Expressa</h2>
                    {/* CLASSE DO FORMULÁRIO: Para aplicar o flex/grid interno */}
                    <form onSubmit={handleCotacaoSubmit} className={styles.cotacaoForm}>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Seu Nome/Nome da Empresa"
                            value={cotacaoData.nome}
                            onChange={handleFormChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu Melhor E-mail"
                            value={cotacaoData.email}
                            onChange={handleFormChange}
                            required
                        />
                        <select
                            name="paisDestino"
                            value={cotacaoData.paisDestino}
                            onChange={handleFormChange}
                            required
                        >
                            <option value="" disabled>Selecione o País de Destino</option>
                            <option value="EUA">Estados Unidos (EUA)</option>
                            <option value="Portugal">Portugal</option>
                            <option value="China">China</option>
                            <option value="Chile">Chile</option>
                            <option value="Alemanha">Alemanha</option>
                            <option value="Japao">Japão</option>
                        </select>
                        {/* CLASSE DO BOTÃO: Usa a cor de acento do tema */}
                        <button type="submit" className={styles.btnCotarInternacional}><i className="fas fa-search-dollar"></i> Cotação em 24h</button>
                    </form>
                    <p className={styles.cotacaoInfo}><i className="fas fa-info-circle"></i> Foco em **Pequenas e Médias Empresas** (PMEs) e E-commerce.</p>
                </div>
            </header>

            {/* A barra de navegação (<nav>) */}
            <nav className={styles.navMenu}>
                <Link href="/home">Home</Link>
                <Link href="/rastreamento">Rastreamento Global</Link>
                <Link href="/documentacao">Documentação</Link>
                <Link href="/modais">Modais de Transporte</Link>
                <Link href="/seguro-internacional">Seguro e Garantia</Link>
                <Link href="/parceiros-globais">Nossos Agentes</Link>
            </nav>

            {/* O conteúdo principal (<main>) */}
            {/* CLASSE DO CONTEÚDO PRINCIPAL: Aplica o max-width e padding para o corpo da página */}
            <main className={styles.mainContent}>

                {/* 1. Secção de Vantagens */}
                <section className={styles.sectionVantagens}>
                    <h2 className={styles.sectionTitle}><i className="fas fa-check-double"></i> Por Que Escolher a BRFrete Global?</h2>
                    {/* CLASSE DA GRELHA DE CARDS: Aplica o layout de grid ou flex */}
                    <div className={styles.cardsGrid}>
                        <div className={styles.cardItem}>
                            <h3>Suporte 24/7</h3>
                            <p>Equipe especializada em comércio exterior pronta para auxiliar em qualquer fuso horário.</p>
                        </div>
                        <div className={styles.cardItem}>
                            <h3>Conexão Aérea Prioritária</h3>
                            <p>Parcerias exclusivas garantem espaço para suas cargas mais urgentes, mesmo em alta temporada.</p>
                        </div>
                        <div className={styles.cardItem}>
                            <h3>Desembaraço Simplificado</h3>
                            <p>Reduza burocracia e custos com nossa consultoria e processo automatizado de documentação.</p>
                        </div>
                        <div className={styles.cardItem}>
                            <h3>Rastreamento Imediato</h3>
                            <p>Visibilidade de ponta a ponta, desde a coleta até a entrega final no país de destino.</p>
                        </div>
                    </div>
                </section>

                {/* 2. Secção de Documentação */}
                <section className={styles.sectionDocumentacao}>
                    <h2 className={styles.sectionTitle}><i className="fas fa-file-alt"></i> Guia Rápido de Documentação</h2>
                    <p>Facilitamos o processo para os documentos mais comuns no transporte marítimo e aéreo.</p>

                    {/* CLASSE DA GRELHA DE DOCUMENTOS: Aplica o layout de grid ou flex */}
                    <div className={styles.docGrid}>
                        <div className={styles.docItem}>
                            <h4>1. Commercial Invoice (Fatura Comercial)</h4>
                            <p>Descrição detalhada dos produtos, valores e termos de venda (Incoterms).</p>
                        </div>
                        <div className={styles.docItem}>
                            <h4>2. Packing List (Romaneio)</h4>
                            <p>Lista o conteúdo exato de cada volume (caixa/palete), peso e dimensões.</p>
                        </div>
                        <div className={styles.docItem}>
                            <h4>3. Conhecimento de Embarque</h4>
                            <p>O título de posse da carga. Emitimos AWB (Aéreo) e BL (Marítimo).</p>
                        </div>
                        <div className={styles.docItem}>
                            <h4>4. Certificado de Origem</h4>
                            <p>Necessário para acordos fiscais, comprovando onde o produto foi fabricado.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <Link href="/documentacao/guia-completo" className={styles.btnSecundario}><i className="fas fa-book"></i> Ver Guia Completo de Exportação/Importação</Link>
                    </div>
                </section>

                {/* 3. Secção de Modais */}
                <section className={styles.sectionModais}>
                    <h2 className={styles.sectionTitle}><i className="fas fa-ship"></i> Nossos Modais de Transporte</h2>
                    <p>Ajustamos o modal à sua necessidade, seja custo (marítimo) ou velocidade (aéreo).</p>

                    {/* CLASSE DA GRELHA DE MODAIS: Aplica o layout de grid ou flex */}
                    <div className={styles.modaisGrid}>
                        <div className={styles.modalCard}>
                            <i className="fas fa-plane-departure"></i>
                            <h3>Frete Aéreo (Air Cargo)</h3>
                            <p>Ideal para cargas de alto valor agregado, amostras ou urgentes.</p>
                            <ul>
                                <li>Tempo de trânsito: 2-7 dias.</li>
                                <li>Alta segurança.</li>
                                <li>Cobertura global expressa.</li>
                            </ul>
                            <Link href="/modais/aereo" className={styles.modalLink}>Saber Mais</Link>
                        </div>

                        <div className={styles.modalCard}>
                            <i className="fas fa-truck-loading"></i>
                            <h3>Frete Marítimo (Sea Cargo)</h3>
                            <p>Solução mais econômica para grandes volumes (LCL ou FCL).</p>
                            <ul>
                                <li>Tempo de trânsito: 20-45 dias.</li>
                                <li>Baixo custo unitário.</li>
                                <li>Contêiner completo (FCL) ou parcial (LCL).</li>
                            </ul>
                            <Link href="/modais/maritimo" className={styles.modalLink}>Saber Mais</Link>
                        </div>

                        <div className={styles.modalCard}>
                            <i className="fas fa-box-open"></i>
                            <h3>Courrier Expresso (DDP)</h3>
                            <p>Pequenas remessas com impostos pagos na origem (DDP) e entrega na porta.</p>
                            <ul>
                                <li>Ideal para E-commerce B2C.</li>
                                <li>Processo simplificado.</li>
                                <li>Máximo de 30kg/volume.</li>
                            </ul>
                            <Link href="/modais/courrier" className={styles.modalLink}>Saber Mais</Link>
                        </div>
                    </div>
                </section>

            </main>

            {/* O rodapé (<footer>) */}
            {/* CLASSE DO RODAPÉ: Aplica a cor de fundo e o layout de grid das colunas */}
            <footer className={styles.footerContainer}>
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
                    <h4>Suporte Global</h4>
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
                    <h4>Legal & Compliance</h4>
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
        </div>
    );
};

export default FreteInternacionalClient;