// app/urbano/page.jsx

import React from 'react';
// 1. Importa o Client Component que contém toda a UI
import UrbanoClient from './UrbanoClient';

// 2. Garante que o CSS Module (e suas variáveis :global) é carregado no Server Component
import './urbano.module.css';

/**
 * 3. METADATA (Server Component)
 * Define as informações de SEO (título e descrição) no lado do servidor.
 */
export const metadata = {
    title: 'BRFrete - Frete Urbano: Entregas Rápidas e Conexão Local',
    description: 'Otimize a logística de última milha. Fretes expressos no mesmo dia ou em poucas horas na cidade, com frota diversificada e rastreamento ao vivo (GPS).',
};

/**
 * 4. Componente de Página Principal (Server Component)
 * Retorna o Client Component e adiciona as tags de <head> necessárias (Font Awesome, Fonts).
 */
export default function UrbanoPage() {
    return (
        // Fragmento que substitui a tag <html>
        <>
            {/* O Next.js 13+ App Router permite tags <link> para recursos globais. */}

            {/* Links para as fontes e Font Awesome - essenciais (conforme o HTML original) */}
            <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
            {/* O Font Awesome é necessário para os ícones */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

            <UrbanoClient />
        </>
    );
}