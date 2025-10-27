// app/login/page.jsx

import React from 'react';
// 1. Importa o componente que contém toda a interatividade (Client Component)
import LoginClient from './LoginClient';

// **IMPORTANTE:** Importa o CSS Module no Server Component (Boa Prática Next.js)
// Isso garante que os estilos sejam carregados corretamente.
import './login.module.css';

/**
 * 2. METADATA (Server Component)
 * Define as informações de SEO (título e descrição) de forma eficiente no servidor.
 */
export const metadata = {
    title: 'BRFrete - Login de Acesso',
    description: 'Acesse a sua conta na plataforma BRFrete para gerenciar seus fretes e cotações.',
};


/**
 * 3. Componente de Página Principal (Server Component)
 * Simplesmente retorna o componente de Cliente.
 */
export default function LoginPage() {
    return (
        <LoginClient />
    );
}