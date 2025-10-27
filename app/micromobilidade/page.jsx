// app/micromobilidade/page.jsx

import React from 'react';
// 1. Importa o componente que contém toda a UI (Client Component)
import MicromobilidadeClient from './MicromobilidadeClient';

// 2. Garante que o CSS Module (e suas variáveis :global) é carregado no Server Component
import './micromobilidade.module.css';

/**
 * 3. METADATA (Server Component)
 * Define as informações de SEO (título e descrição) no lado do servidor.
 */
export const metadata = {
    // Título extraído do HTML
    title: 'BRFrete - Micromobilidade Urbana: Last Mile Ágil e Sustentável',
    // Descrição focada no benefício e sustentabilidade
    description: 'Soluções de micromobilidade (Bikes e Patinetes Elétricos) para o Last Mile: entregas mais rápidas, zero emissão e rastreamento total em centros urbanos.',
};


/**
 * 4. Componente de Página Principal (Server Component)
 * Simplesmente retorna o componente de Cliente.
 */
export default function MicromobilidadePage() {
    return (
        <MicromobilidadeClient />
    );
}