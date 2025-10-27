// app/balcao-local/page.jsx
import Link from 'next/link';
// Para Next.js com App Router, se precisar da tipagem:
// import { Metadata } from 'next'; 
import styles from './ecommerce-local.module.css';

// 1. Definição da Metadata para SEO e Título
export const metadata = {
	title: 'BRFrete - Balcão Local: Artesanato, Comércio e Renda Comunitária',
	description: 'A logística para quem cria e vende localmente. Feiras, artesanato, e-commerce de bairro e renda extra.',
};

// 2. Componente de Página Principal
export default function BalcaoLocalPage() {
	return (
		<>
			{/* Container Principal do Banner */}
			<header className={styles.bannerContainer}>
				{/* Login Box */}
				<div className={styles.loginBox}>
					<Link href="/login"><i className="fas fa-sign-in-alt"></i> Entrar</Link>
					<Link href="/cadastro"><i className="fas fa-user-plus"></i> Abrir Loja</Link>
				</div>

				<h1><i className="fas fa-hand-holding-heart"></i> BRFrete Comunidade: Sua Renda Gira Perto de Casa</h1>
				<p>A logística para quem cria e vende localmente. Feiras, artesanato, e-commerce de bairro e renda extra.</p>

				{/* Formulário de Cotação Local (GET Request padrão) */}
				<form className={styles.freteForm} action="/cotacao" method="GET">
					<input type="text" name="origem" placeholder="Seu Bairro/Rua" required />
					<input type="text" name="destino" placeholder="Bairro do Cliente" required />
					<input type="text" name="item" placeholder="Item (Ex: Bolo de Pote, Artesanato)" required />
					<button type="submit"><i className="fas fa-motorcycle"></i> Entregadores Locais</button>
				</form>
			</header>

			{/* Nav Bar */}
			<nav className={styles.navBar}>
				<Link href="/home">Home</Link>
				<Link href="/fretes">Cotação de Fretes</Link>
				<Link href="/lojas-locais">Lojas Locais</Link>
				<Link href="/entregadores">Entregadores</Link>
				<Link href="/guia-vendedor">Guia do Vendedor</Link>
				<Link href="/contato">Contato</Link>
			</nav>

			{/* Conteúdo Principal (main) */}
			<main className={styles.mainContent}>
				<h2>Do Artesanato ao Bolo: Logística Feita para o Pequeno Empreendedor</h2>

				<section className={styles.section}>
					<p className={styles.sectionParagraph}>
						Seu talento merece circular. Use o Balcão BRFrete para **vender seus produtos online** e garantir a
						**entrega rápida e barata** para seus vizinhos e para a cidade. Logística simples, preço justo.
					</p>

					<div className={styles.negociacaoGrid}>

						{/* Card 1: VENDER (Destaque Principal) */}
						<div className={`${styles.negociacaoCard} ${styles.cardDestaque}`}>
							<i className={`${styles.negociacaoIcon} fas fa-tag ${styles.iconRenda}`}></i>
							<h3>EU QUERO VENDER MEUS PRODUTOS (Artesanato, Doces, Roupas)</h3>
							<p>Crie sua loja virtual gratuita, publique suas peças com fotos e aceite pagamentos. Deixe a
								entrega
								com nossa rede local de motoristas e motoboys.</p>
							<Link href="/vender-local" className={`${styles.btnAcao} ${styles.btnVenderLocal}`}>
								<i className="fas fa-store-alt"></i> Abrir Minha Loja Grátis
							</Link>
						</div>

						{/* Card 2: COMPRAR (Apoio Local) */}
						<div className={styles.negociacaoCard}>
							<i className={`${styles.negociacaoIcon} fas fa-map-pin ${styles.iconComunidade}`}></i>
							<h3>EU QUERO COMPRAR NA MINHA REGIÃO (Apoio Local)</h3>
							<p>Encontre produtos feitos à mão, quitandas e pequenos comércios perto de você. Seu dinheiro
								fortalece a economia local e chega mais rápido!</p>
							<Link href="/comprar-local" className={`${styles.btnAcao} ${styles.btnComprarLocal}`}>
								<i className="fas fa-shopping-basket"></i> Buscar Lojas Perto
							</Link>
						</div>

						{/* Card 3: DESCONTO (Borda Acento) */}
						<div className={`${styles.negociacaoCard} ${styles.negociacaoCardAcento}`}>
							<i className={`${styles.negociacaoIcon} fas fa-handshake ${styles.iconRenda}`}></i>
							<h3>FRETE COM DESCONTO PARA PEQUENAS ENTREGAS</h3>
							<p>Temos planos especiais e descontos para quem faz poucas entregas por dia/semana. O Frete não pode
								ser o vilão do seu preço final. Economize e lucre mais!</p>
							{/* Uso de uma classe combinada para forçar o estilo do botão */}
							<Link href="/frete-desconto-micro" className={`${styles.btnAcao} ${styles.btnDescontoRenda}`}>
								<i className="fas fa-dollar-sign"></i> Simular Desconto de Frete
							</Link>
						</div>

						{/* Card 4: TREINAMENTO (Botão Amarelo Acento) */}
						<div className={styles.negociacaoCard}>
							<i className={`${styles.negociacaoIcon} fas fa-graduation-cap ${styles.iconComunidade}`}></i>
							<h3>TREINAMENTO: COMO VENDER PELA INTERNET</h3>
							<p>Aprenda a fotografar, a calcular preços, a conversar com clientes e a usar as redes sociais para
								vender mais. Cursos gratuitos focados em microempreendedores.</p>
							<Link href="/treinamento-local" className={`${styles.btnAcao} ${styles.btnTreinamento}`}>
								<i className="fas fa-chalkboard-teacher"></i> Acessar Treinamento
							</Link>
						</div>
					</div>
				</section>

				{/* Seção 2: Flexibilidade de Frete */}
				<section className={`${styles.section} ${styles.sectionHighlight}`}>
					<h3 className={styles.sectionTitleComunidade}>
						Logística de Bairro: Rápida e com Confiança
					</h3>

					<div className={styles.freteFlexibility}>
						
						{/* Opção 1: Entrega Rápida */}
						<div className={`${styles.freteOption} ${styles.freteOptionComunidade}`}>
							<i className="fas fa-person-biking"></i>
							<h4>Opção 1: Entrega Rápida no Bairro</h4>
							<p>Use motoboys e entregadores de bicicleta cadastrados na sua região. Ideal para alimentos, doces e
								encomendas urgentes. **Entregue em minutos.**</p>
							<button className={`${styles.btn} ${styles.btnComprarLocal}`}>Contratar Entrega Bike/Moto</button>
						</div>
						
						{/* Opção 2: Frete Protegido (Longa Distância) */}
						<div className={`${styles.freteOption} ${styles.freteOptionRenda}`}>
							<i className="fas fa-box-tissue"></i>
							<h4>Opção 2: Frete Protegido (Longas Distâncias)</h4>
							<p>Para peças delicadas ou clientes mais distantes, contrate um Frete BRFrete com seguro. Sua
								encomenda viaja em veículos maiores com rastreamento completo e **garantia contra danos.**</p>
							<button className={`${styles.btn} ${styles.btnCombinado}`}>Ver Frete Protegido</button>
						</div>
					</div>
					
					<div className={styles.ctaWrapper}>
						<Link href="/cadastro" className={`${styles.btnAcao} ${styles.btnVenderLocal} ${styles.ctaLarge}`}>
							<i className="fas fa-heart"></i> Faça Parte da Nossa Comunidade Empreendedora!
						</Link>
					</div>
				</section>

				{/* Seção 3: Histórias de Sucesso Local */}
				<section className={styles.section}>
					<h3 className={styles.sectionTitleNormal}>Histórias de Sucesso Local</h3>
					<div className={styles.negociacaoGrid}>
						
						<div className={styles.sucessoCard}>
							<i className="fas fa-store-slash" style={{ color: 'var(--cor-renda)' }}></i>
							<h4 className={styles.sucessoCardTitle}>Fechei a Loja e Vendi 3x Mais!</h4>
							<p>Descubra como a Maria, vendedora de bijuterias, migrou para o online e expandiu seu negócio com o
								BRFrete.</p>
						</div>
						
						<div className={styles.sucessoCard}>
							<i className="fas fa-hand-holding-usd" style={{ color: 'var(--cor-comunidade)' }}></i>
							<h4 className={styles.sucessoCardTitle}>Frete: De Custo a Lucro</h4>
							<p>O João, artesão, te ensina a negociar o frete para que ele vire um diferencial competitivo, e não
								um gasto.</p>
						</div>
						
						<div className={styles.sucessoCard}>
							<i className="fas fa-map-marker-alt" style={{ color: 'var(--cor-acento)' }}></i>
							<h4 className={styles.sucessoCardTitle}>Comunidade: Vizinhos Apoiando Vizinhos</h4>
							<p>Saiba como nosso mapa de lojas locais gerou uma rede de apoio e vendas entre clientes do mesmo
								bairro.</p>
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
					<h4>Empreendedorismo e Renda</h4>
					<ul>
						<li><Link href="/guia-vendedor#primeiros-passos">Primeiros Passos no E-commerce</Link></li>
						<li><Link href="/guia-vendedor#estrategias-vendas">Estratégias para Vender no Bairro</Link></li>
						<li><Link href="/entregadores#cadastro-moto">Seja um Entregador Local (Moto/Bike)</Link></li>
						<li><Link href="/guia-vendedor#embalagem-segura">Dicas de Embalagem para Delicados</Link></li>
						<li><Link href="/guia-vendedor#gestao-financeira">Gestão Financeira para MEI</Link></li>
						<li><Link href="/lojas-locais#promocao-comunitaria">Programa de Promoção Comunitária</Link></li>
						<li><Link href="/guia-vendedor#marketplaces-locais">Como Integrar a Outros Marketplaces</Link></li>
						<li><Link href="/guia-vendedor#feira-virtual">Participe da Nossa Feira Virtual Mensal</Link></li>
					</ul>
				</div>

				<div className={styles.footerBottom}>
					&copy; 2025 BRFrete. Todos os direitos reservados.
				</div>
			</footer>
		</>
	);
}