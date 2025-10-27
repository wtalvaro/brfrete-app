// app/cadastro/page.jsx

import React from 'react';
import CadastroClient from './CadastroClient'; // 1. Importa o componente de cliente
import './cadastro.module.css'; // 2. Importa o CSS Module (Necessário no Server Component para que Next.js o inclua no bundle)

// 3. Metadados para SEO (Isso é executado no servidor!)
export const metadata = {
    title: 'BRFrete - Cadastro Simples',
    description: 'Crie sua conta BRFrete em minutos e comece a cotar fretes e gerenciar sua logística de forma eficiente.',
};

// 4. Componente Principal (Server Component)
// Sua única função é renderizar o componente de cliente.
export default function CadastroPage() {
    return (
        <CadastroClient />
    );
}