// app/pesado/page.jsx

import React from 'react';
// 1. Importa o componente que contém toda a UI (Client Component)
import PesadoClient from './PesadoClient';

// 2. Importa o CSS Module no Server Component para garantir a injeção correta das variáveis :global
import './pesado.module.css';

/**
 * 3. METADATA (Server Component)
 * Define as informações de SEO (título e descrição), extraídas do HTML.
 */
export const metadata = {
    title: 'BRFrete - Frete Pesado: O Centro Logístico de Carga e Indústria',
    description: 'Logística especializada em cargas industriais, maquinário, minério e projetos especiais. Força, segurança e agilidade para seu negócio.',
};


/**
 * 4. Componente de Página Principal (Server Component)
 * Simplesmente retorna o componente de Cliente.
 */
export default function PesadoPage() {
    return (
        <PesadoClient />
    );
}