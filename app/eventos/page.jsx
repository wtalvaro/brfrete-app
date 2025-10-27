import React from 'react';
// 1. Importa o componente que contém toda a interatividade (Client Component)
import EventosPageClient from './EventosPageClient';

/**
 * 2. METADATA (Server Component)
 * Esta função é processada no lado do servidor, garantindo SEO e título corretos.
 */
export const metadata = {
    title: 'Detalhes do Evento - Feira "Garimpo do Bairro" | Logística BRFrete',
    description: 'Confira a agenda da Feira Garimpo do Bairro! Vagas para expositores, detalhes do evento e cotação de frete simplificada com a BRFrete.',
};


/**
 * 3. Componente de Página Principal (Server Component)
 * Simplesmente retorna o componente de Cliente.
 */
export default function EventosPage() {
    // A página Server Component apenas chama o componente que tem a interatividade.
    return (
        <EventosPageClient />
    );
}