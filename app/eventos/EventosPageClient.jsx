"use client"; // ESSENCIAL: Declara este como um Client Component

import React, { useState } from 'react';
import Link from 'next/link';
// Importa o CSS Module, garantindo o carregamento dos estilos
import styles from './eventos.module.css';

/**
 * Componente do Cliente (Client Component) para a página de Eventos.
 * Contém toda a lógica de interatividade e a renderização da UI.
 */
const EventosPageClient = () => {

    // 1. Estados para gerir a entrada e o resultado da cotação
    const [cepDestino, setCepDestino] = useState('');
    const [resultadoFrete, setResultadoFrete] = useState({
        mensagem: '',
        estilo: {},
        display: 'none'
    });

    // 2. Função para formatar o CEP enquanto o usuário digita (XX-XXX-XXX)
    const formatCEP = (value) => {
        let cleanValue = value.replace(/\D/g, '');
        if (cleanValue.length > 5) {
            cleanValue = cleanValue.substring(0, 5) + '-' + cleanValue.substring(5, 8);
        }
        return cleanValue;
    };

    // 3. Handler para a mudança no input do CEP
    const handleCepChange = (e) => {
        const formattedCep = formatCEP(e.target.value);
        setCepDestino(formattedCep);
    };

    // 4. Função que simula a cotação de frete (executada ao clicar no botão)
    const cotarFrete = () => {
        const cep = cepDestino.replace(/\D/g, '');

        if (cep.length !== 8) {
            setResultadoFrete({
                mensagem: '<strong>CEP inválido.</strong> Por favor, digite 8 dígitos.',
                estilo: { backgroundColor: '#f44336', color: 'white' },
                display: 'block'
            });
            return;
        }

        let preco, prazo;
        const primeiroDigito = cep.charAt(0);

        // Simulação de cálculo de frete
        switch (primeiroDigito) {
            case '0':
            case '1':
                preco = 'R$ 35,00';
                prazo = '1 dia útil';
                break;
            case '2':
                preco = 'R$ 60,00';
                prazo = '2 dias úteis';
                break;
            case '3':
                preco = 'R$ 75,00';
                prazo = '2-3 dias úteis';
                break;
            case '9':
                preco = 'R$ 120,00';
                prazo = '4 dias úteis';
                break;
            default:
                preco = 'R$ 180,00';
                prazo = '5-7 dias úteis';
                break;
        }

        setResultadoFrete({
            mensagem: `
                <i class="fas fa-tag"></i> **Melhor Oferta:** ${preco} <br>
                <i class="fas fa-business-time"></i> **Prazo Estimado:** ${prazo}
            `,
            // Usa as variáveis CSS definidas no eventos.module.css
            estilo: { backgroundColor: 'var(--evento-cor-acento)', color: 'var(--cor-destaque-txt)' },
            display: 'block'
        });
    };

    return (
        // Aplica a classe local para carregar o tema e variáveis de cor
        <div className={styles.eventosTheme}>
            <header className={styles.headerEventoContainer}>
                {/* Ícones de Login/Cadastro - Usam as variáveis globais sobrescritas */}
                <div style={{ position: 'absolute', top: '20px', right: '30px', display: 'flex', gap: '15px' }}>
                    <Link href="/login"
                        // Estilo inline usando variáveis CSS (adaptado para usar variáveis LOCAIS)
                        style={{ backgroundColor: 'var(--evento-cor-secundaria)', color: 'white', padding: '8px 14px', borderRadius: '4px', fontSize: '14px', textDecoration: 'none' }}><i
                            className="fas fa-sign-in-alt"></i> Login</Link>
                    <Link href="/cadastro"
                        style={{ backgroundColor: 'var(--evento-cor-secundaria)', color: 'white', padding: '8px 14px', borderRadius: '4px', fontSize: '14px', textDecoration: 'none' }}><i
                            className="fas fa-user-plus"></i> Cadastro</Link>
                </div>

                <h1>Feira "Garimpo do Bairro"</h1>
                <p>A maior feira de moda circular e sustentável da Vila Alegre.</p>
            </header>

            <nav className={styles.navMenu}>
                <Link href="/home">Home</Link>
                <Link href="/fretes">Cotação de Fretes</Link>
                <Link href="/eventos">Agenda de Eventos</Link>
                <Link href="/expositores">Área do Expositor</Link>
                <Link href="/regulamento">Regulamento</Link>
                <Link href="/contato">Contato</Link>
            </nav>

            {/* APLICAÇÃO DA CLASSE DE CONTEÚDO PRINCIPAL (.mainContent) */}
            <main className={styles.mainContent}>
                <div className={styles.eventContentGrid}>

                    <div className={styles.mainInfo}>

                        <h2>Detalhes do Evento</h2>

                        <div className={styles.infoBlock}>
                            <div className={styles.infoItem}>
                                <i className="fas fa-calendar-alt"></i>
                                <span>**Data:** <strong>Sábado, 25 de Outubro de 2025</strong></span>
                            </div>
                            <div className={styles.infoItem}>
                                <i className="fas fa-clock"></i>
                                <span>**Horário:** <strong>10h00 às 18h00</strong> (Montagem a partir das 08h00)</span>
                            </div>
                            <div className={styles.infoItem}>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>**Local:** <strong>Praça Central, Vila Alegre</strong> (Próximo à Igreja Matriz)</span>
                            </div>
                            <div className={styles.infoItem}>
                                <i className="fas fa-palette"></i>
                                <span>**Tipo:** <strong>Brechó, Vintage e Moda Sustentável</strong></span>
                            </div>
                            <div className={styles.infoItem}>
                                <i className="fas fa-user-friends"></i>
                                <span>**Público Estimado:** <strong>+1.500 visitantes</strong></span>
                            </div>
                        </div>

                        <div className={styles.description}>
                            <h2>Descrição Completa</h2>
                            <p>
                                A Feira Garimpo do Bairro é um evento mensal consolidado que celebra a moda circular, o consumo
                                consciente e a economia criativa. Reunimos mais de 50 expositores fixos e abrimos vagas para
                                novos talentos a cada edição. É a oportunidade perfeita para desapegar de peças de qualidade,
                                encontrar achados únicos e promover a sustentabilidade.
                            </p>

                            <h3>Regras e Destaques da Edição:</h3>
                            <ul>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--evento-cor-secundaria)' }}></i> Taxa de inscrição:
                                    R$ 50,00 por estande (3x3m).</li>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--evento-cor-secundaria)' }}></i> Prioridade para
                                    vendedores de Brechó, Artesanato e Upcycling.</li>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--evento-cor-secundaria)' }}></i> Haverá área de
                                    food-trucks e música ao vivo a partir das 14h.</li>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--evento-cor-secundaria)' }}></i> O expositor é
                                    responsável por sua mesa e estrutura de barraca.</li>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--evento-cor-secundaria)' }}></i> **BRFrete é o
                                    parceiro oficial para transporte de estandes/estoque!**</li>
                            </ul>

                            <h3>Galeria da Última Edição</h3>
                            <div className={styles.galleryGrid}>
                                <div className={styles.galleryImage}
                                    style={{ backgroundImage: "url('https://source.unsplash.com/random/400x400/?thrift+market+fashion&sig=1')" }}
                                    aria-label="Feira de Brechó com expositoras"></div>
                                <div className={styles.galleryImage}
                                    style={{ backgroundImage: "url('https://source.unsplash.com/random/400x400/?sustainable+fashion&sig=2')" }}
                                    aria-label="Barracas de artesanato e moda vintage"></div>
                                <div className={styles.galleryImage}
                                    style={{ backgroundImage: "url('https://source.unsplash.com/random/400x400/?upcycling+market&sig=3')" }}
                                    aria-label="Detalhe de peças de roupa em cabides de madeira"></div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.sidebar}>
                        <h3>Vagas e Logística</h3>

                        <p style={{ fontSize: '14px', marginBottom: '20px' }}>
                            Se você é expositor, garanta sua vaga e organize seu transporte agora mesmo!
                        </p>

                        <Link href="/eventos/inscricao/1" className={styles.btnAcao}><i className="fas fa-ticket-alt"></i> Fazer Minha
                            Inscrição!</Link>

                        <hr style={{ border: 0, borderTop: '1px solid #ddd', margin: '20px 0' }} />

                        <div className={styles.freteCotacaoBox}>
                            <h3 style={{ marginTop: 0, fontSize: '18px', borderBottom: 'none', textAlign: 'center' }}>Calcule Seu
                                Frete BRFrete</h3>

                            <label htmlFor="cep-destino">Para onde você precisa levar seu estoque?</label>
                            <input
                                type="text"
                                id="cep-destino"
                                placeholder="Digite seu CEP de Destino"
                                maxLength="9"
                                value={cepDestino}
                                onChange={handleCepChange}
                            />

                            <button className={styles.btnCotar} onClick={cotarFrete}><i className="fas fa-search"></i> Ver Opções de
                                Frete</button>

                            <div
                                id="frete-resultado"
                                className={styles.freteCotacaoResultado}
                                style={{ display: resultadoFrete.display, ...resultadoFrete.estilo }}
                                dangerouslySetInnerHTML={{ __html: resultadoFrete.mensagem }}
                            >
                            </div>
                        </div>

                        <Link href="/fretes/cotar/evento/1" className={`${styles.btnAcao} ${styles.btnFrete}`}><i className="fas fa-truck-loading"></i> Ver
                            Detalhes de Logística (Completo)</Link>
                        <hr style={{ border: 0, borderTop: '1px solid #ddd', margin: '20px 0' }} />

                        <h3>Localização</h3>
                        <div className={styles.mapPlaceholder}>
                            <i className="fas fa-map-marked-alt" style={{ fontSize: '30px' }}></i> Mapa Interativo
                        </div>
                        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
                            <a href="https://maps.google.com/?q=Praça+Central,+Vila+Alegre" target="_blank"
                                style={{ color: 'var(--evento-cor-suporte)', textDecoration: 'none' }}>Ver no Google Maps</a>
                        </p>

                        <hr style={{ border: 0, borderTop: '1px solid #ddd', margin: '20px 0' }} />

                        <Link href="/eventos/duvidas/1" className={styles.btnAcao} style={{ backgroundColor: 'var(--evento-cor-negociacao)' }}><i
                            className="fas fa-question-circle"></i> Tirar Dúvidas com Organizador</Link>

                    </div>

                </div>
            </main>

            <footer className={styles.footerEvento}>
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
                    <h4>Recursos para o Expositor</h4>
                    <ul>
                        <li><Link href="/recursos/guia">Guia do Expositor de Sucesso</Link></li>
                        <li><Link href="/recursos/checklist">Checklist para Feiras</Link></li>
                        <li><Link href="/recursos/calculadora">Calculadora de Frete para Eventos</Link></li>
                        <li><Link href="/recursos/barracas">Onde Alugar Barracas</Link></li>
                        <li><Link href="/recursos/seguro">Seguro para Seu Estoque</Link></li>
                        <li><Link href="/recursos/promocao">Dicas de Promoção no Local</Link></li>
                        <li><Link href="/recursos/tributacao">Aspectos de Tributação</Link></li>
                        <li><Link href="/recursos/feedbacks">Receber Feedbacks</Link></li>
                    </ul>
                </div>
                <div className={styles.footerBottom}>
                    © 2025 BRFrete. Todos os direitos reservados.
                </div>
            </footer>
        </div>
    );
};

export default EventosPageClient;