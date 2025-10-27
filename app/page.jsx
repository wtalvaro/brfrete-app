// app/page.tsx
import Link from 'next/link';

// Componente de Página Principal (Home)
export default function Home() {
  return (
    <>
      {/* O cabeçalho (<header>) */}
      <header className="banner-container">
        <div className="login-box">

          {/* CORREÇÃO: Removida a tag <a> filho. O Link é o elemento navegável. */}
          {/* Linhas 38-41 CORRIGIDAS: */}
          <Link href="/login">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
          <Link href="/cadastro">
            <i className="fas fa-user-plus"></i> Cadastro
          </Link>

        </div>

        <h1><i className="fas fa-shipping-fast"></i> BRFrete: Logística Inteligente</h1>
        <p>Sua plataforma completa para <strong>fretes rápidos</strong>, <strong>seguros</strong> e <strong>marketplaces especializados</strong></p>

        <form className="frete-form" action="/cotacao" method="GET">
          <input type="text" name="origem" placeholder="Origem (CEP, Cidade)" required />
          <input type="text" name="destino" placeholder="Destino (CEP, Cidade)" required />
          <input type="number" name="peso" placeholder="Peso Estimado (kg)" required />
          <button type="submit"><i className="fas fa-search-location"></i> Consultar Frete</button>
        </form>
      </header>

      {/* A barra de navegação (<nav>) */}
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/fretes">Cotação de Fretes</Link>
        <Link href="/metais">Metais Recicláveis</Link>
        <Link href="/moda">Moda Sustentável</Link>
        <Link href="/reuso">Materiais de Reuso</Link>
        <Link href="/contato">Contato</Link>
      </nav>

      <main>
        <h2>Explore o Ecossistema BRFrete</h2>

        {/* Seção 1: Marketplaces */}
        <section className="section marketplace-section">
          <h3>Marketplaces Integrados e Sustentáveis</h3>
          <div className="cards">
            <div className="card">
              <i className="fas fa-recycle fa-2x"></i>
              <h3>Metais Recicláveis</h3>
              <p>Compre e venda sucata e materiais reaproveitáveis com cotação por peso e frete integrado.</p>
              <Link href="/metais" className="card-btn">Ver Mercado</Link>
            </div>
            <div className="card">
              <i className="fas fa-tshirt fa-2x"></i>
              <h3>Moda Sustentável</h3>
              <p>Descubra marcas independentes, upcycling e moda consciente com entrega rápida e rastreada.</p>
              <Link href="/moda" className="card-btn">Comprar Moda</Link>
            </div>
            <div className="card">
              <i className="fas fa-tools fa-2x"></i>
              <h3>Materiais de Reuso</h3>
              <p>Comercialize eletrônicos, peças de obra, móveis e outros itens com frete inteligente para retirada.</p>
              <Link href="/reuso" className="card-btn">Anunciar Itens</Link>
            </div>
          </div>
        </section>

        {/* Seção 2: Setores */}
        <section className="section setor-section">
          <h3>Combinações Estratégicas por Setor</h3>
          <div className="cards">
            <div className="card"><i className="fas fa-tractor fa-2x"></i>
              <h3>Agronegócio</h3>
              <p>Frete para insumos, máquinas e safras.</p>
              <Link href="/agronegocio" className="card-btn">Cotar Frete</Link>
            </div>
            <div className="card"><i className="fas fa-hard-hat fa-2x"></i>
              <h3>Construção Civil</h3>
              <p>Transporte de materiais pesados e agendados por obra.</p>
              <Link href="/construcao" className="card-btn">Cotar Frete</Link>
            </div>
            <div className="card"><i className="fas fa-box-open fa-2x"></i>
              <h3>E-commerce Local</h3>
              <p>Entregas rápidas para lojas físicas e clientes da região.</p>
              <Link href="/ecommerce-local" className="card-btn">Cotar Frete</Link>
            </div>
            <div className="card"><i className="fas fa-microphone fa-2x"></i>
              <h3>Eventos</h3>
              <p>Logística para feiras, shows e exposições.</p>
              <Link href="/eventos" className="card-btn">Cotar Frete</Link>
            </div>
            <div className="card"><i className="fas fa-apple-alt fa-2x"></i>
              <h3>Alimentos e Bebidas</h3>
              <p>Frete refrigerado ou seco com rastreio.</p>
              <Link href="/alimentos" className="card-btn">Cotar Frete</Link>
            </div>
            <div className="card"><i className="fas fa-couch fa-2x"></i>
              <h3>Móveis e Decoração</h3>
              <p>Entrega com montagem e cuidado especial.</p>
              <Link href="/moveis" className="card-btn">Cotar Frete</Link>
            </div>
          </div>
        </section>

        {/* Seção 3: Categorias de Frete */}
        <section className="section categoria-section">
          <h3>Categorias de Frete Inteligente</h3>
          <div className="cards">
            <div className="card"><i className="fas fa-weight fa-2x"></i>
              <h3>Frete Leve</h3>
              <p>Ideal para moda, documentos e pequenos pacotes.</p>
              <Link href="/frete-leve" className="card-btn">Ver Soluções</Link>
            </div>
            <div className="card"><i className="fas fa-dolly fa-2x"></i>
              <h3>Frete Pesado</h3>
              <p>Para metais recicláveis, construção e máquinas.</p>
              <Link href="/pesado" className="card-btn">Ver Soluções</Link>
            </div>
            <div className="card"><i className="fas fa-exclamation-triangle fa-2x"></i>
              <h3>Frete Especializado</h3>
              <p>Resíduos perigosos, refrigerados ou frágeis.</p>
              <Link href="/especializado" className="card-btn">Ver Soluções</Link>
            </div>
            <div className="card"><i className="fas fa-city fa-2x"></i>
              <h3>Frete Urbano</h3>
              <p>Entregas rápidas em centros urbanos.</p>
              <Link href="/urbano" className="card-btn">Ver Soluções</Link>
            </div>
            <div className="card"><i className="fas fa-road fa-2x"></i>
              <h3>Frete Rural</h3>
              <p>Rotas para áreas agrícolas e remotas.</p>
              <Link href="/rural" className="card-btn">Ver Soluções</Link>
            </div>
            <div className="card">
              <i className="fas fa-hand-holding-heart fa-2x"></i>
              <h3>Frete para Comunidades</h3>
              <p>Serviços acessíveis e personalizados para regiões periféricas e grandes capitais.</p>
              <Link href="/comunidades" className="card-btn">Ver Soluções</Link>
            </div>
          </div>
        </section>

        {/* Seção 4: Soluções Logísticas */}
        <section className="section solucoes-section">
          <h3>Soluções Logísticas e Tecnologia de Ponta</h3>
          <div className="cards">

            <div className="card">
              <i className="fas fa-layer-group fa-2x"></i>
              <h3>Cotação Multimodal Integrada</h3>
              <p>Combine modais (rodoviário, aéreo, marítimo) de forma inteligente para otimizar custos e prazos.</p>
              <Link href="/cotacao-multi" className="card-btn">Simular Combinação</Link>
            </div>

            <div className="card">
              <i className="fas fa-map-marked-alt fa-2x"></i>
              <h3>Rastreamento GPS em Tempo Real</h3>
              <p>Monitore sua carga 24/7 com precisão, garantindo transparência e segurança em todo o trajeto.</p>
              <Link href="/rastreamento" className="card-btn">Acompanhar Carga</Link>
            </div>

            <div className="card">
              <i className="fas fa-brain fa-2x"></i>
              <h3>Otimização de Rotas por IA</h3>
              <p>Algoritmos avançados calculam as rotas mais rápidas e econômicas, reduzindo o tempo de trânsito.</p>
              <Link href="/ia-rotas" className="card-btn">Calcular Rota Otimizada</Link>
            </div>

            <div className="card">
              <i className="fas fa-door-open fa-2x"></i>
              <h3>Serviço de Coleta e Entrega Porta a Porta</h3>
              <p>Facilidade e conveniência: nossa rede busca e entrega a mercadoria diretamente no local desejado.</p>
              <Link href="/porta-a-porta" className="card-btn">Solicitar Coleta</Link>
            </div>
            <div className="card">
              <i className="fas fa-warehouse fa-2x"></i>
              <h3>Gerenciamento de Armazém (WMS)</h3>
              <p>Sistemas inteligentes para controle de estoque, separação e expedição de mercadorias com eficiência.</p>
              <Link href="/wms" className="card-btn">Ver WMS</Link>
            </div>
            <div className="card">
              <i className="fas fa-truck-loading fa-2x"></i>
              <h3>Logística Reversa</h3>
              <p>Estrutura completa para devolução de produtos e reaproveitamento de materiais.</p>
              <Link href="/logistica-reversa" className="card-btn">Inicie Devolução</Link>
            </div>

          </div>
        </section>

        {/* Seção 5: Ferramentas de Negócio */}
        <section className="section business-tools-section">
          <h3>Ferramentas Essenciais para o Seu Negócio</h3>
          <div className="cards">

            <div className="card">
              <i className="fas fa-plug fa-2x"></i>
              <h3>API para Integração com E-commerce</h3>
              <p>Conecte sua loja virtual (WooCommerce, Shopify, etc.) ao BRFrete para cotação e rastreio automáticos no checkout.</p>
              <Link href="/api-ecommerce" className="card-btn">Integrar Agora</Link>
            </div>

            <div className="card">
              <i className="fas fa-receipt fa-2x"></i>
              <h3>Faturamento e Conciliação Automática</h3>
              <p>Emita notas fiscais, gere relatórios de custos e concilie pagamentos de frete de forma rápida e sem erros manuais.</p>
              <Link href="/faturamento" className="card-btn">Acessar Faturamento</Link>
            </div>

            <div className="card">
              <i className="fas fa-shield-alt fa-2x"></i>
              <h3>Seguro de Carga Facilitado</h3>
              <p>Proteção completa contra roubo, avaria ou extravio. Processo de cotação e acionamento simplificado e acessível.</p>
              <Link href="/seguro" className="card-btn">Proteger Cargas</Link>
            </div>

            <div className="card">
              <i className="fas fa-tachometer-alt fa-2x"></i>
              <h3>Dashboard de Performance Logística</h3>
              <p>Monitore prazos de entrega, custos por rota e satisfação do cliente em tempo real para otimizar toda a sua operação.</p>
              <Link href="/dashboard" className="card-btn">Ver Relatórios</Link>
            </div>

            <div className="card">
              <i className="fas fa-money-check-alt fa-2x"></i>
              <h3>Pagamento Imediato via PIX/Carteira Digital</h3>
              <p>Garantimos a liquidação instantânea dos fretes para nossos parceiros e motoristas via PIX ou nossa carteira digital interna.</p>
              <Link href="/pix" className="card-btn">Receba na Hora</Link>
            </div>

            <div className="card">
              <i className="fas fa-desktop fa-2x"></i>
              <h3>Assistente de Construção de Lojas Virtuais</h3>
              <p>Oferecemos suporte e ferramentas de IA para que pequenos empreendedores comunitários criem e configurem seus próprios e-commerces.</p>
              <Link href="/site-builder" className="card-btn">Iniciar Loja Virtual</Link>
            </div>

          </div>
        </section>

        {/* Seção 6: Inclusão Logística e Impacto Social */}
        <section className="section social-section">
          <h3>Inclusão Logística e Impacto Social</h3>
          <div className="cards">
            <div className="card">
              <i className="fas fa-users fa-2x"></i>
              <h3>Comunidades Atendidas</h3>
              <p>Conectamos frete solidário a regiões com pouca cobertura logística, fomentando o comércio local.</p>
              <Link href="/comunidades" className="card-btn">Saiba Mais</Link>
            </div>
            <div className="card">
              <i className="fas fa-handshake fa-2x"></i>
              <h3>Parcerias Locais</h3>
              <p>Trabalhamos com cooperativas, ONGs, transportadores independentes e <strong>Pontos de Coleta (incluindo residenciais)</strong>. Basta se cadastrar para fazer parte!</p>
              <Link href="/parcerias-locais" className="card-btn">Cadastre seu Ponto</Link>
            </div>
            <div className="card">
              <i className="fas fa-leaf fa-2x"></i>
              <h3>Impacto Sustentável</h3>
              <p>Fretes otimizados que reduzem custos e emissões de carbono, promovendo a Logística Verde.</p>
              <Link href="/sustentabilidade" className="card-btn">Saiba Mais</Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="cta-buttons">
          {/* CORREÇÃO: Removido o botão e mantido apenas o Link com a classe de botão */}
          <Link href="/cotacao" className="cta-destaque">
            <i className="fas fa-search-location"></i> Obtenha a Melhor Cotação de Frete Agora!
          </Link>
        </div>
      </main>

      {/* O rodapé (<footer>) */}
      <footer>
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
            {/* Mantido <a> pois são links externos/âncoras sem rota Next.js, com href="#" */}
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

        <div className="footer-bottom">
          &copy; 2025 BRFrete. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}