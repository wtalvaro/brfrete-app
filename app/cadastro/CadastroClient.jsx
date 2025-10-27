// app/cadastro/CadastroClient.jsx

'use client'; // 1. DIRETIVA DE COMPONENTE DE CLIENTE

import { useState } from 'react';
import Link from 'next/link';
// IMPORTANTE: Mantenha a importação do CSS Module para que as classes funcionem
import styles from './cadastro.module.css';

// Endereço base da sua API (Se estiver usando localhost/ngrok)
const API_CADASTRO_URL = 'http://localhost:8080/api/pessoas/cadastro/simplificado';

// 2. Componente de Cliente
export default function CadastroClient() {

    // ESTADOS PARA GERENCIAR FORMULÁRIO E MENSAGENS
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // LÓGICA DE VALIDAÇÃO E SUBMISSÃO - AGORA ASINCRONA COM FETCH
    const handleSubmit = async (event) => {
        event.preventDefault();

        setMensagemErro('');
        setMensagemSucesso('');

        // Validação do Email (Regex simples)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setMensagemErro('Por favor, insira um endereço de e-mail válido.');
            return;
        }

        // Validação de Senha (mínimo 3 caracteres)
        if (senha.length < 3) {
            setMensagemErro('A senha deve ter no mínimo 3 caracteres.');
            return;
        }

        const dadosCadastro = {
            email: email,
            senha: senha,
        };

        // INICIA O PROCESSO DE SUBMISSÃO E MENSAGEM DE LOADING
        setIsSubmitting(true);
        setMensagemSucesso(
            <span style={{ color: 'var(--cor-sustentavel)' }}>
                <i className="fas fa-spinner fa-spin"></i> Enviando dados para o servidor...
            </span>
        );

        // CHAMADA DE API ASINCRONA COM FETCH
        try {
            const response = await fetch(API_CADASTRO_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosCadastro),
            });

            if (response.ok && response.status === 201) {
                setMensagemSucesso('✅ Cadastro realizado com sucesso! Você pode fazer login agora.');
                // Opcional: Limpar formulário (para não mostrar senha)
                setEmail('');
                setSenha('');

            } else {
                const errorData = await response.json();
                const errorMessage = errorData.message || 'Ocorreu um erro desconhecido no servidor. Tente novamente.';

                setMensagemErro(`Falha na requisição (${response.status}): ${errorMessage}`);
                setMensagemSucesso('');
            }

        } catch (error) {
            console.error('Erro de Rede/Fetch:', error);
            setMensagemErro('❌ Não foi possível conectar ao servidor. Verifique sua conexão.');
            setMensagemSucesso('');

        } finally {
            setIsSubmitting(false);
        }
    };

    // Renderização do Componente (Todo o HTML/JSX)
    return (
        <>
            {/* O cabeçalho (<header>) */}
            <header style={{ backgroundColor: 'var(--cor-principal)', padding: '10px', textAlign: 'center' }}>
                <h1 style={{ color: 'white', fontSize: '24px', fontWeight: '700', margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                    <i className="fas fa-shipping-fast"></i> BRFrete
                </h1>
            </header>

            {/* Container Principal */}
            <div className={styles.cadastroContainer}>
                <h2>Crie sua conta BRFrete</h2>
                <p style={{ marginTop: '-20px', marginBottom: '25px', color: '#666' }}>Rápido, seguro e pronto para a logística.</p>

                {/* Mensagens de Erro/Sucesso */}
                {mensagemErro && (
                    <div style={{ color: 'red', marginBottom: '15px', fontWeight: '600' }}>
                        <i className="fas fa-exclamation-circle"></i> {mensagemErro}
                    </div>
                )}
                {mensagemSucesso && (
                    <div style={{ marginBottom: '15px', fontWeight: '600' }}>
                        {mensagemSucesso}
                    </div>
                )}

                {/* Formulário */}
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email"><i className="fas fa-envelope"></i> E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="seu.email@exemplo.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="senha"><i className="fas fa-lock"></i> Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Mínimo 3 caracteres"
                            required
                            minLength="3"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <button type="submit" className={styles.btnCadastro} disabled={isSubmitting}>
                        <i className="fas fa-user-plus"></i>
                        {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>

                <div className={styles.separator}>OU</div>

                <div className={styles.socialLogin}>
                    <button type="button" className={styles.btnGoogle}>
                        <i className="fab fa-google"></i> Continuar com Google
                    </button>
                    <button type="button" className={styles.btnFacebook}>
                        <i className="fab fa-facebook"></i> Continuar com Facebook
                    </button>
                </div>

                <p className={styles.loginLink}>
                    Já tem uma conta? <Link href="/login">Faça Login aqui!</Link>
                </p>
            </div>

            {/* Rodapé (Adaptado do seu código) */}
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