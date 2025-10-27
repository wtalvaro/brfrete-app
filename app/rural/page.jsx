// app/rural/page.jsx

import React from 'react';
// 1. Importa o Client Component que contém toda a UI
import RuralClient from './RuralClient';

// 2. Garante que o CSS Module (e suas variáveis :global) é carregado no Server Component
import './rural.module.css';

// 3. Importa o componente Head do Next.js para metatags, links de fontes e ícones
import Head from 'next/head';

/**
 * 4. METADATA (Server Component)
 * Define as informações de SEO (título e descrição) no lado do servidor.
 */
export const metadata = {
    title: 'BRFrete - Frete Rural: Logística Comunitária para o Produtor Familiar',
    description: 'Conectamos a produção rural familiar aos mercados da cidade com baixo custo, utilizando soluções de transporte simplificadas e fretes compartilhados.',
    // Você pode adicionar links externos de fontes e ícones aqui, se preferir
};

/**
 * 5. Componente de Página Principal (Server Component)
 * Retorna o Client Component e adiciona as tags de <head> necessárias (Font Awesome, Fonts).
 */
export default function RuralPage() {
    return (
        // Fragmento que substitui a tag <html>
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* Links para as fontes e Font Awesome - essenciais */}
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
                {/* O Font Awesome é necessário para os ícones */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </Head>
            <RuralClient />
        </>
    );
}