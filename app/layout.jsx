// app/layout.jsx
// O JSX não usa a importação de tipo 'type' (como 'Metadata' e 'Readonly')
// mas a estrutura de 'Metadata' é mantida como um objeto JavaScript.
import { Red_Hat_Display, Poppins } from 'next/font/google';
import './globals.css';

// 1. Configuração otimizada das Fontes Google com `next/font`
const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-red-hat-display', // Define a variável CSS
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins', // Define a variável CSS
});

// 2. Metadata (Informações de SEO e <title>)
// No JSX, mantemos a exportação da constante normalmente.
export const metadata = {
  title: 'BRFrete - Plataforma de Fretes Inteligente', // Do <title> original
  description: 'Sua plataforma completa para fretes rápidos, seguros e marketplaces especializados.',
};

// 3. Componente Principal (Função)
// Removemos a tipagem explícita de TypeScript:
// ANTES (TSX): export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
// DEPOIS (JSX):
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* 4. Link para Font Awesome: Adicionado aqui para ser global */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      {/* Aplica as variáveis CSS das fontes ao body, para serem usadas em globals.css */}
      <body className={`${redHatDisplay.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}