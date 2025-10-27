// app/frete-internacional/page.jsx

import React from 'react';
// 1. Importa o componente que contém toda a interatividade (Client Component)
import FreteInternacionalClient from './FreteInternacionalClient';

// **CORREÇÃO CRÍTICA: Força a importação do CSS Module no Server Component**
// Isso garante que o Next.js inclua as variáveis :global(:root) no bundle.
import './frete-internacional.module.css'; 

/**
 * 2. METADATA (Server Component)
 * Define as informações de SEO (título e descrição) no lado do servidor.
 */
export const metadata = {
    title: 'BRFrete Global: Frete Internacional Facilitado | Remessas Seguras',
    description: 'Simplifique suas remessas globais com a BRFrete. Cotações inteligentes, rastreamento 24h e suporte completo para documentação internacional.',
};


/**
 * 3. Componente de Página Principal (Server Component)
 * Simplesmente retorna o componente de Cliente.
 */
export default function FreteInternacionalPage() {
    return (
        <FreteInternacionalClient />
    );
}