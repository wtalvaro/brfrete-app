// app/login/LoginClient.jsx

"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './login.module.css';

// Documentação: Expressão Regular mais robusta
// Verifica caracteres no nome, o '@', um ou mais subdomínios, e uma extensão (2 a 4 caracteres) no final.
const EMAIL_REGEX = /^[\w.-]+@([\w-]+\.)+[\w]{2,4}$/;

// Endereço base da sua API
// IMPORTANTE: Configure a porta/endereço para o seu Spring Boot
const API_BASE_URL = 'https://daxton-unbelievable-woozily.ngrok-free.dev';

/**
 * Função Auxiliar (Método Educativo): validarEmail
 * Descrição: Centraliza a lógica de validação do formato de e-mail.
 * @param {string} email - A string de e-mail a ser validada.
 * @returns {boolean} - Retorna true se o e-mail for válido, false caso contrário.
 */
const validarEmail = (email) => {
    // 1. Garante que o campo não está apenas com espaços em branco
    if (!email || email.trim() === '') {
        return false;
    }
    // 2. Testa o formato utilizando a REGEX centralizada
    return EMAIL_REGEX.test(email.trim());
};


const LoginClient = () => {
    // 1. Estados para controlar a visibilidade e mensagens
    const [isRecoveryVisible, setIsRecoveryVisible] = useState(false);
    const [recoveryMessage, setRecoveryMessage] = useState('');
    const [loginMessage, setLoginMessage] = useState(''); // Estado para mensagens de erro/sucesso de login

    // 3. Novos Estados para os campos de formulário (necessário para validação real-time)
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Estado para controlar o erro de email no formulário de login
    const [loginEmailError, setLoginEmailError] = useState('');

    // Handler para mostrar o formulário de recuperação
    const mostrarFormRecuperacao = (event) => {
        event.preventDefault();
        setIsRecoveryVisible(true);
        setLoginMessage(''); // Limpa mensagens de login ao mudar
        setLoginEmailError(''); // Limpa erros de validação ao mudar
    };

    // Handler para esconder o formulário de recuperação
    const esconderFormRecuperacao = (event) => {
        event.preventDefault();
        setIsRecoveryVisible(false);
        setRecoveryMessage(''); // Limpa mensagens de recuperação ao voltar
    };

    // Documentação: Handler para submissão de login - AGORA COM FETCH (AJAX)
    // Tornamos a função assíncrona (async) para permitir o uso de 'await'
    const handleLoginSubmit = async (event) => {
        event.preventDefault(); // Impedimos o envio nativo do formulário

        setLoginMessage('');

        // **INÍCIO DA VALIDAÇÃO (LOGIN) - Front-end**
        if (!validarEmail(loginEmail)) {
            setLoginEmailError('Formato de e-mail inválido. Por favor, corrija.');
            setLoginMessage(
                <span style={{ color: 'red' }}>
                    <i className="fas fa-exclamation-circle"></i> Verifique o e-mail e a senha.
                </span>
            );
            return;
        }

        if (!loginPassword) {
            setLoginMessage(
                <span style={{ color: 'red' }}>
                    <i className="fas fa-exclamation-circle"></i> A senha é obrigatória.
                </span>
            );
            return;
        }

        setLoginEmailError(''); // Limpa o erro se o email for válido

        // Mensagem de loading
        setLoginMessage(
            <span style={{ color: 'var(--cor-sustentavel)' }}>
                <i className="fas fa-spinner fa-spin"></i> Verificando credenciais...
            </span>
        );

        // **INÍCIO DA CHAMADA FETCH (AJAX) PARA A API**
        try {
            // Requisição POST para o endpoint de login da API Java
            const response = await fetch(`${API_BASE_URL}/api/pessoas/login`, {
                method: 'POST',
                headers: {
                    // Informa ao servidor que o body é JSON
                    'Content-Type': 'application/json',
                },
                // Converte o objeto JavaScript em uma string JSON para envio
                body: JSON.stringify({
                    email: loginEmail,
                    senha: loginPassword,
                }),
            });

            // Tratamento da Resposta
            if (response.ok) { // Status 200-299 (Sucesso)
                const pessoa = await response.json(); // Se a API retornar dados da Pessoa ou um token

                setLoginMessage(
                    <span style={{ color: 'var(--cor-sustentavel)' }}>
                        <i className="fas fa-check-circle"></i> Login bem-sucedido! Bem-vindo(a), {pessoa.nome ? pessoa.nome : 'usuário'}.
                    </span>
                );
                // **PRÓXIMO PASSO REAL:** Salvar o token de autenticação e redirecionar
                // Ex: router.push('/dashboard');

            } else if (response.status === 401) {
                // 401 Unauthorized: E-mail ou senha inválidos
                setLoginMessage(
                    <span style={{ color: 'red' }}>
                        <i className="fas fa-exclamation-circle"></i> E-mail ou senha incorretos.
                    </span>
                );
            } else {
                // Outros erros (400, 500, etc.)
                setLoginMessage(
                    <span style={{ color: 'red' }}>
                        <i className="fas fa-exclamation-circle"></i> Ocorreu um erro inesperado no servidor. Tente novamente.
                    </span>
                );
                console.error(`Erro na API: ${response.status} - ${response.statusText}`);
            }

        } catch (error) {
            // Erro de rede (ex: servidor desligado, CORS bloqueando, etc.)
            console.error('Erro de rede/fetch:', error);
            setLoginMessage(
                <span style={{ color: 'red' }}>
                    <i className="fas fa-exclamation-circle"></i> Não foi possível conectar ao servidor.
                </span>
            );
        }
        // **FIM DA CHAMADA FETCH**
    };


    // Handler para simular o envio de recuperação de senha (adaptado)
    const handleRecoverySubmit = async (event) => {
        event.preventDefault();
        setRecoveryMessage('');

        const form = event.target;
        const emailRecuperacao = form.elements['email'].value.trim();

        // **USO DA FUNÇÃO AUXILIAR PARA VALIDAÇÃO (RECUPERAÇÃO)**
        if (!validarEmail(emailRecuperacao)) {
            setRecoveryMessage(
                <span style={{ color: 'red' }}>
                    <i className="fas fa-exclamation-circle"></i> Por favor, insira um e-mail válido.
                </span>
            );
            return;
        }
        // **FIM DO USO DA FUNÇÃO AUXILIAR**

        // Simulação de envio com Spinner
        setRecoveryMessage(
            <span style={{ color: 'var(--cor-sustentavel)' }}>
                <i className="fas fa-spinner fa-spin"></i> Enviando...
            </span>
        );

        // Simula a chamada de API
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simular um sucesso ou falha
        // Em cenários reais, a mensagem de sucesso é mostrada mesmo se o e-mail não existir, por segurança.
        setRecoveryMessage(
            <span style={{ color: 'var(--cor-sustentavel)' }}>
                <i className="fas fa-check-circle"></i> Se o e-mail estiver em nossa base, você receberá um link de redefinição em breve.
            </span>
        );
    };

    // Handler para o campo de email de login (validação em tempo real)
    const handleLoginEmailChange = (e) => {
        const novoEmail = e.target.value;
        setLoginEmail(novoEmail);
        setLoginMessage(''); // Limpa a mensagem principal ao digitar

        if (novoEmail && !validarEmail(novoEmail)) {
            setLoginEmailError('Formato de e-mail inválido.');
        } else {
            setLoginEmailError('');
        }
    };


    return (
        <>
            {/* === 1. HEADER === */}
            <header className={styles.headerArea}>
                <h1>
                    <i className="fas fa-shipping-fast"></i> BRFrete
                </h1>
            </header>

            {/* === 2. CONTEÚDO PRINCIPAL (LOGIN BOX) === */}
            <div className={styles.loginContainer}>
                <h2>Acesse sua conta BRFrete</h2>
                <p style={{ marginTop: '-20px', marginBottom: '25px', color: '#666' }}>Entre e comece a cotar fretes e negociar.</p>

                {/* Mensagens de Login/Recuperação */}
                <div style={{ marginBottom: '15px', fontWeight: 600 }}>{loginMessage}</div>
                <div style={{ marginBottom: '15px', fontWeight: 600 }}>{recoveryMessage}</div>

                {/* === FORMULÁRIO DE LOGIN E SOCIAL (VISÍVEL QUANDO !isRecoveryVisible) === */}
                <div className={isRecoveryVisible ? styles.hidden : ''}>
                    <form id="form-login" onSubmit={handleLoginSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email-login"><i className="fas fa-envelope"></i> E-mail</label>
                            {/* **CAMPO DE E-MAIL DE LOGIN COM CONTROLE DE ESTADO** */}
                            <input
                                type="text"
                                id="email-login"
                                name="email"
                                placeholder="seu.email@exemplo.com"
                                required
                                value={loginEmail}
                                onChange={handleLoginEmailChange}
                                style={{ borderColor: loginEmailError ? 'red' : '' }} // Feedback visual
                            />
                            {/* **EXIBIÇÃO DO ERRO DE VALIDAÇÃO** */}
                            {loginEmailError && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '-5px' }}>{loginEmailError}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="senha"><i className="fas fa-lock"></i> Senha</label>
                            {/* **CAMPO DE SENHA COM CONTROLE DE ESTADO** */}
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Sua senha"
                                required
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>

                        <div className={styles.forgotPassword}>
                            <Link href="/recuperar-senha" onClick={mostrarFormRecuperacao}>Esqueci minha senha</Link>
                        </div>

                        <button type="submit" className={styles.btnLogin} disabled={!!loginEmailError}>
                            <i className="fas fa-sign-in-alt"></i> Entrar
                        </button>
                    </form>

                    <div className={styles.separator}>OU</div>

                    <div className={styles.socialLogin}>
                        <button type="button" className={styles.btnGoogle}>
                            <i className="fab fa-google"></i> Entrar com Google
                        </button>
                        <button type="button" className={styles.btnFacebook}>
                            <i className="fab fa-facebook"></i> Entrar com Facebook
                        </button>
                    </div>
                </div>

                {/* === FORMULÁRIO DE RECUPERAÇÃO (VISÍVEL QUANDO isRecoveryVisible) === */}
                <div className={isRecoveryVisible ? '' : styles.hidden}>
                    <form id="form-recuperacao" onSubmit={handleRecoverySubmit}>
                        <p style={{ color: 'var(--cor-principal)', fontWeight: 600 }}>Digite seu e-mail para receber o link de recuperação:</p>
                        <div className={styles.formGroup}>
                            <label htmlFor="email-recuperacao"><i className="fas fa-envelope"></i> E-mail</label>
                            {/* O campo de recuperação continua usando o name="email" para ser lido no handler */}
                            <input type="email" id="email-recuperacao" name="email" placeholder="seu.email@exemplo.com" required />
                        </div>
                        <button type="submit" className={styles.btnLogin} style={{ backgroundColor: 'var(--cor-principal)' }}>
                            <i className="fas fa-paper-plane"></i> Enviar Link
                        </button>
                        <p style={{ marginTop: '15px' }}>
                            <Link href="#" onClick={esconderFormRecuperacao} style={{ color: 'var(--cor-sustentavel)' }}>Voltar ao Login</Link>
                        </p>
                    </form>
                </div>

                {/* Link de Cadastro */}
                <p className={`${styles.cadastroLink} ${isRecoveryVisible ? styles.hidden : ''}`}>
                    Ainda não tem conta? <Link href="/cadastro">Cadastre-se agora!</Link>
                </p>
            </div>

            {/* === 3. RODAPÉ (FOOTER) === */}
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

export default LoginClient;