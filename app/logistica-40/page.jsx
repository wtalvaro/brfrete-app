// app/logistica-40/page.jsx

import React from 'react';
// 1. Importa o componente de Cliente
import Logistica40Client from './Logistica40Client';

// 2. Garante que os estilos (incluindo variáveis) são carregados pelo servidor
import './logistica-40.module.css';

/**
 * 3. METADATA (Server Component)
 * Define as informações de SEO.
 */
export const metadata = {
    title: 'BRFrete - Consultoria Logística 4.0: Inteligência Artificial e Otimização Total',
    description: 'Redefina sua cadeia de suprimentos com Consultoria Logística 4.0: IoT, Big Data e Automação para máxima eficiência e redução de custos.',
};


/**
 * 4. Componente de Página Principal (Server Component)
 */
export default function Logistica40Page() {
    return (
        <Logistica40Client />
    );
}