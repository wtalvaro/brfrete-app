// app/moveis/page.jsx

import React from 'react';
// 1. Importa o componente que contém toda a UI (Client Component)
import MoveisClient from './MoveisClient';

// 2. Garante que o CSS Module (e suas variáveis :global) é carregado no Server Component
import './moveis.module.css';

/**
 * 3. METADATA (Server Component)
 * Define as informações de SEO (título e descrição) no lado do servidor, extraídas do HTML.
 */
export const metadata = {
    title: 'BRFrete - Balcão do Pequeno Vendedor: Móveis, Decoração e Renda',
    description: 'Logística especializada em peças únicas, móveis de reuso e artigos de artesanato. Seu negócio de criatividade com frete seguro.',
};


/**
 * 4. Componente de Página Principal (Server Component)
 * Simplesmente retorna o componente de Cliente.
 */
export default function MoveisPage() {
    return (
        <MoveisClient />
    );
}